import { CiSearch } from "react-icons/ci";
import { FaHeart, FaUserEdit } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className="bg-yellow-200 ">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between  gap-10 h-16">
          <div className="flex px-80">
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Shop</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="flex items-center  space-x-5">
          <FaUserEdit className="text-2xl" />
          <CiSearch className="text-2xl" />
          <FaHeart className="text-2xl" />
          <SlBasket className="text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
