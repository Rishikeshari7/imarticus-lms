// const Course = require("../models/Course");
import Course from '../models/Course.js';
import { ApiError } from "../utils/ApiError.js";
import { GoogleGenAI } from "@google/genai";

const createCourse = async (req, res) => {
  try {
    const { title, batch, status, price, sections } = req.body;
    console.log("Received course data:", req.body);

    if (!title || !price || !batch || !sections || sections.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid Course Data",
      });
    }

    const completeSection = sections.map((section) => ({
      title: section.title,
      lectures: Array.isArray(section.lectures)
        ? section.lectures.map((lecture) => ({
            title: lecture.title,
            type: lecture.type || "lecture",
            content: lecture.content || "",
          }))
        : [],
    }));

    console.log("completeSection", completeSection);
    const newCourse = new Course({
      title,
      batch,
      price,
      status: status || "Ongoing",
      sections: completeSection,
    });
    console.log("newCourse", newCourse);
    await newCourse.save();

    res.status(200).json({
      success: true,
      message: "Course Created Successfully",
      course: newCourse,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating course", error });
  }
};
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Fetching course with ID:", id);
    const course = await Course.findById(id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, course });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching course", err });
  }
};
const summarizeText = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: "No text provided!" 
      });
    }

    if (!process.env.GOOGLE_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Google API key not configured. Please add GOOGLE_API_KEY to your .env file."
      });
    }

    const prompt = `Summarize the following text in a concise paragraph:\n\n${text}`;

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY
    });

    const model = ai.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    res.status(200).json({ 
      success: true,
      summary: summary 
    });
  } catch (error) {
    console.error("Error in summarizeText:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error generating summary", 
      error: error.message 
    });
  }
};
export { createCourse, getCourseById, summarizeText };
