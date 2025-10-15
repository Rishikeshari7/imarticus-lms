import React, { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import Notifications from "../../components/Notifications";
import ProfileOptions from "../../components/ProfileOptions";
import CourseDetails from "../../components/CourseDetails";
import { useAuthStore } from "@/store/authStore";

const BASE_URL = "https://imarticus-lms.onrender.com/api/v1";

const Course = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOptionsOpen, setProfileOptionsOpen] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`${BASE_URL}/course/68ef99ed2e5d3b9f2c8223a6`);
        const data = await res.json();
        if (data.success) {
            console.log("Course data:", data.course);
          setCourse(data.course);
        } else {
          console.error("Failed to load course");
        }
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Please log in to access courses.</p>
      </div>
    );
  }

  return (
    <div className="flex bg-[#F2F6F9] max-w-screen overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(!isSidebarOpen)} />

      <main className="w-screen md:w-full bg-[#F2F6F9]">
        <header className="w-full h-16 bg-white shadow-lg flex justify-between items-center px-4 md:px-10">
          <div className="flex items-center gap-2 md:gap-10">
            <div className="md:hidden flex flex-col gap-1">
              {!isSidebarOpen && (
                <button onClick={() => setIsSidebarOpen(true)} aria-label="Toggle navigation">
                  <span className="block w-4 h-1 rounded-lg bg-gray-400 mb-1"></span>
                  <span className="block w-8 h-1 rounded-lg bg-gray-400 mb-1"></span>
                  <span className="block w-6 h-1 rounded-lg bg-gray-400"></span>
                </button>
              )}
            </div>
            <h1 className="hidden md:flex text-xl text-[#82849F]">{course?.title}</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className={`rounded-lg ${notificationsOpen && "bg-gray-100"} p-2`}>
              <FaRegBell onClick={() => setNotificationsOpen(!notificationsOpen)} className="cursor-pointer text-2xl text-gray-700 hidden md:flex" />
            </div>
            <Notifications isOpen={notificationsOpen} />

            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setProfileOptionsOpen(!profileOptionsOpen)}>
              <div className="h-8 w-8 md:h-10 md:w-10 bg-red-500 flex items-center justify-center rounded-full text-white text-md md:text-2xl">
                {user?.name?.[0] || user?.email?.[0] || "U"}
              </div>
              <h1 className="text-gray-500 font-semibold hidden md:flex">{user?.name || user?.email || "User"}</h1>
              <IoIosArrowDown className="text-lg text-gray-500 hidden md:flex" />
            </div>
            <ProfileOptions logoutHandler={logout} isOpen={profileOptionsOpen} />
          </div>
        </header>

        <div className="w-full h-24 flex items-center mx-16">
          <p className="text-sm font-semibold text-[#035642] flex items-center cursor-pointer">
            My Courses <IoIosArrowForward />
            <span className="text-[#82849F] ml-1">{course?.title}</span>
          </p>
        </div>

        <div className="w-full px-8 md:px-16">
          <CourseDetails course={course} />
        </div>


      </main>
    </div>
  );
};

export default Course;
