import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:4000/api/v1";

const Payment = () => {
  const [course, setCourse] = useState(null);
  const user = useAuthStore((state) => state.user); 
  const updateUser = useAuthStore((state) => state.updateUser);
  const navigate = useNavigate();

  console.log("BASE_URL:", BASE_URL);
  console.log("RAZORPAY_KEY:", import.meta.env.VITE_RAZORPAY_KEY);
  console.log("Current user:", user);

  
  useEffect(() => {
    if (!user) {
      toast.error("Please login to access payment page");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }
  }, [user, navigate]);

  useEffect(() => {
    const courseId = "68ef99ed2e5d3b9f2c8223a6"; 
    
    if (user && user.enrolledCourses && user.enrolledCourses.includes(courseId)) {
     
      setTimeout(() => {
        navigate("/course");
      }, 2000);
    }
  }, [user, navigate]);
  
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        console.log("Fetching course from:", "https://imarticus-lms.onrender.com/api/v1/course/68ef99ed2e5d3b9f2c8223a6");
        
        const res = await fetch(
          "https://imarticus-lms.onrender.com/api/v1/course/68ef99ed2e5d3b9f2c8223a6"
        );
        
        console.log("Response status:", res.status);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Course response data:", data);
        
        if (data.success && data.course) {
          setCourse(data.course);
          console.log("Course set successfully:", data.course);
          
        
          const courseId = data.course._id;
          if (user && user.enrolledCourses && user.enrolledCourses.includes(courseId)) {
            toast.success("You are already enrolled in this course! Redirecting...");
            setTimeout(() => {
              navigate("/course");
            }, 2000);
            return;
          }
          
          toast.success("Course loaded successfully!");
        } else {
          console.error("Invalid response structure:", data);
          toast.error("Failed to load course - Invalid response.");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
        toast.error("Error fetching course data.");
      }
    };

    fetchCourse();
  }, []);

  const handlePayment = async () => {
    if (!course) {
      toast.error("Course data not loaded");
      return;
    }

    if (!user || !user._id) {
      toast.error("Please login to make payment");
      navigate("/login");
      return;
    }

    console.log("Starting payment with course:", course);
    console.log("Payment details:", {
      amount: course.price,
      userId: user._id,
      courseId: course._id
    });

    try {
      const res = await fetch(`${BASE_URL}/payment/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: course.price,
          userId: user._id,
          courseId: course._id,
        }),
      });
      
      console.log("Order creation response status:", res.status);
      const data = await res.json();
      console.log("Order creation response data:", data);

      if (!data.success) {
        toast.error("Payment order creation failed: " + (data.message || "Unknown error"));
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "AI/ML Course",
        description: course.title,
        order_id: data.order.id,
        handler: async function (response) {
          console.log("Payment response:", response);
          
          try {
            const verifyRes = await fetch(`${BASE_URL}/payment/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId: user._id,
                courseId: course._id,
              }),
            });
            
            console.log("Verify response status:", verifyRes.status);
            const verifyData = await verifyRes.json();
            console.log("Verify response data:", verifyData);
            
            if (verifyData.success) {
              toast.success("Payment successful! Redirecting to course...");
             
              const updatedUser = {
                ...user,
                enrolledCourses: [...(user.enrolledCourses || []), course._id]
              };
              updateUser(updatedUser);
              
              
              setTimeout(() => {
                navigate("/course");
              }, 2000);
            } else {
              toast.error("Verification failed: " + verifyData.message);
            }
          } catch (error) {
            console.error("Verification error:", error);
            toast.error("Verification error!");
          }
        },
        theme: { color: "#22c55e" },
      };

     
      if (!window.Razorpay) {
        toast.error("Razorpay not loaded. Please refresh the page.");
        return;
      }

      if (!import.meta.env.VITE_RAZORPAY_KEY) {
        toast.error("Razorpay key not configured.");
        return;
      }

      new window.Razorpay(options).open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment error!");
    }
  };

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p>Checking authentication...</p>
        <p className="text-sm text-gray-500 mt-2">Redirecting to login...</p>
      </div>
    );
  }

  if (!course) {
    return <div className="text-center mt-10">Loading course...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-2xl font-bold mb-6 text-center">Order Summary</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Course Title</th>
              <th className="px-4 py-3 text-left">Batch</th>
              <th className="px-4 py-3 text-left">Amount (₹)</th>
              <th className="px-4 py-3 text-left">Sections</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 font-bold py-3">{course.title}</td>
              <td className="px-4 py-3">{course.batch}</td>
              <td className="px-4 font-semibold py-3">{course.price}</td>
              <td className="px-4 py-3">
                <ul className="list-disc list-inside space-y-1">
                  {course.sections.map((section, index) => (
                    <li key={index} className="text-gray-700">
                      {section.title}
                    </li>
                  ))}
                  {
                    user.name
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handlePayment}
          className="px-6 py-3 bg-green-700 cursor-pointer text-white rounded hover:bg-green-800 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Payment;
