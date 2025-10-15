import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const GoogleFacebook = () => {
  return (
    <div className="flex gap-3">
      <button className="w-full flex items-center justify-center border gap-2 border-green-700 text-gray-800 rounded-md py-3 cursor-pointer  hover:bg-gray-100">
        Google
        <FcGoogle className="text-lg" />
      </button>
      <button className="w-full flex items-center justify-center border gap-2 border-blue-600 text-gray-800 rounded-md py-3 cursor-pointer hover:bg-gray-100">
        Facebook
        <FaFacebook className="text-blue-600 text-lg" />
      </button>
    </div>
  );
};

export default GoogleFacebook;
