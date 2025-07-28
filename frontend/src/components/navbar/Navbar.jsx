import { CgSearch } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="col-span-2 row-span-1 bg-nav-grey h-16 flex justify-between p-2">
      {/* Logo Section */}
      <div className="flex flex-row items-center space-x-2" onClick={() => navigate("/")}>
        <img src="/Chit-Chat Logo.png" alt="Chit-Chat Logo" className="h-20 w-20 pt-2" />
        <h1 className="text-2xl">Chit-Chat</h1>
      </div>

      {/* Search and Settings Section */}
      <div className="flex flex-row items-center pr-28 space-x-4">
        {/* Search Bar */} 
        <div className="flex flex-row items-center space-x-2">
          <CgSearch className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search..."
            className="input input-ghost w-full max-w-xs bg-transparent border-b border-gray-500 outline-none focus:border-b-2"
          />
          <button className="btn btn-primary">Search</button>
        </div>

        {/* Settings Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center">
            <IoMdSettings className="h-6 w-6 cursor-pointer" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-black-200" : ""
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => {
                      navigate("/profile")
                    }}
                  >
                    Profile Settings
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

      </div>
    </div>
  );
};

export default Navbar;
