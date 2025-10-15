import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const Faqs = [
  {
    question: "Do I need a laptop to do the course?",
    answer:
      "A Laptop is mandatory to do the course. This is primarily because all your projects are industry-level and you would be able to do those projects only on a Laptop.",
  },
  {
    question: "How will the Placement Assurance work?",
    answer:
      "On successful completion of course, our placements team will ensure that you apply to 10 partnered jobs per week. This will help you crack up to 10 assured interviews over 6-10 months (or before, depending on your portfolio and Resume). Our placements team increases the number of interviews granted per candidate only on a case-by-case scenario if need be.",
  },
  {
    question: "How will I be taught concepts in the class?",
    answer: "The mentors would be teaching you through classroom sessions.",
  },
  {
    question: "What is the duration of this course?",
    answer: "This 5–7 month program is available in both offline classroom and online batches. The Digital Marketing Graduate Program (DMGP) is a 5 month program because you only get 2 out of 3 specialisations in the same. On the other hand the ADMIPP (Advanced Digital Marketing Industry proficiency Program) is 7 months long due to all specialisations being present in the same. We will also share a detailed program calendar with you post your Admission.",
  },
  
];
const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="w-full justify-center items-center bg-white py-10 flex my-5">
      <div className="w-10/12 text-gray-600 flex flex-col gap-5 md:gap-10 justify-center items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Still have Doubts?{" "}
          </h1>
          <p className=" text-lg md:text-xl font-bold text-center">
            We have answered some of the frequent questions for you!
          </p>
        </div>
        <section className="w-full flex flex-col gap-4 my-8">
          {Faqs.map((faq, index) => (
            <div
              key={index}
              className="text-[#3c4852] bg-green-100/30 py-3 border-gray-200"
            >
              <button
                type="button"
                aria-expanded={open === index}
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggle(index)}
              >
                <h3 className="text-gray-600 text-lg md:text-2xl font-black">
                  {faq.question}
                </h3>
                <div className="text-xl">
                  {open === index ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </button>
              {open === index && (
                <div className="bg-white p-4 flex flex-col gap-2 ">
                  <p className="flex md:text-lg items-center ml-4 text-gray-500 font-semibold gap-2">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Faq;
