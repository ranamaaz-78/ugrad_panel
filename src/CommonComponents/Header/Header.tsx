import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Images } from "../../constants/images";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiGraduationCapLine,
} from "react-icons/ri";
import { CustomButton } from "..";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Prevent body scrolling when drawer is open
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (isLearnOpen) setIsLearnOpen(false);
  };

  const toggleLearnMenu = () => {
    setIsLearnOpen(!isLearnOpen);
  };

  return (
    <div>
      <div className="py-4 px-4 md:px-12 lg:px-28 flex justify-between items-center w-full">
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <img
            src={Images.Logo}
            alt="Logo"
            className="h-8 w-auto cursor-pointer"
            onClick={() => {
              navigate("/");
              setIsDrawerOpen(false);
            }}
          />

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex md:space-x-10 lg:space-x-12 items-center">
            <div className="relative">
              <button
                onClick={toggleLearnMenu}
                className="text-primary-NavyBlue hover:text-gray-900  font-sans w-auto text-base border border-brand-grayNatural100 focus:outline-none focus:border-primary-darkGreen focus:border-4 focus:rounded-md  hover:border-primary-darkGreen  rounded-sm px-3 hover:border-4 hover:rounded-md hover:px-4"
              >
                <div className="flex items-center justify-center pl-2">
                  Learn
                  {isLearnOpen ? (
                    <RiArrowDropUpLine style={{ fontSize: "32px" }} />
                  ) : (
                    <RiArrowDropDownLine style={{ fontSize: "32px" }} />
                  )}
                </div>
              </button>

              {/* Desktop Dropdown */}
              {isLearnOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a
                    onClick={() => {
                      navigate("/programs");
                      setIsLearnOpen(!isLearnOpen);
                    }}
                    className="block px-4 py-2 text-primary-NavyBlue hover:bg-gray-100 cursor-pointer"
                  >
                    Programs
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-primary-NavyBlue hover:bg-gray-100 cursor-pointer"
                  >
                    Tutorials
                  </a>
                </div>
              )}
            </div>

            <a
              onClick={() => navigate("/about")}
              className="text-primary-NavyBlue hover:text-gray-900 font-sans cursor-pointer px-3 border rounded-sm hover:border-4 hover:rounded-md hover:px-4 border-brand-grayNatural100 hover:outline-none hover:border-primary-darkGreen"
            >
              About
            </a>
            <a
              onClick={() => navigate("/blogs")}
              className="text-primary-NavyBlue hover:text-gray-900 font-sans cursor-pointer px-3 border rounded-sm hover:border-4 hover:rounded-md hover:px-4 border-brand-grayNatural100 hover:outline-none hover:border-primary-darkGreen"
            >
              Blogs
            </a>
          </nav>
        </div>

        {/* CTA Button - Hidden on mobile */}
        <div>
          <CustomButton
            label="Apply as Instructor/Mentor"
            labelClassName="text-base font-sans"
            onClick={() => alert("Button Clicked!")}
            className="text-black h-12 rounded-md border p-2 hidden md:flex md:text-xs lg:text-base"
            borderColor="#0A2628"
            startIcon={<RiGraduationCapLine />}
          />
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className="md:hidden text-primary-NavyBlue focus:outline-none"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer - Full height with fixed button at bottom */}
      {isDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white mt-16 overflow-y-auto">
          {/* Overlay that covers the entire screen */}
          <div className="absolute inset-0 bg-white">
            <div className="container mx-auto px-4 py-2 flex flex-col h-full">
              {/* Navigation items with scrollable content */}
              <div className="flex-grow overflow-y-auto gap-6 flex flex-col">
                <div>
                  <button
                    onClick={toggleLearnMenu}
                    className="w-full text-left text-primary-NavyBlue hover:text-gray-900 py-4 flex items-center justify-between"
                  >
                    Learn
                    <span>
                      {isLearnOpen ? (
                        <RiArrowDropUpLine style={{ fontSize: "32px" }} />
                      ) : (
                        <RiArrowDropDownLine style={{ fontSize: "32px" }} />
                      )}
                    </span>
                  </button>

                  {/* Mobile Dropdown */}
                  {isLearnOpen && (
                    <div className="pl-4 py-2 space-y-2 bg-gray-50">
                      <a
                        onClick={() => {
                          navigate("/programs");
                          toggleDrawer();
                        }}
                        className="block text-primary-NavyBlue hover:text-gray-900 py-3 px-2 cursor-pointer"
                      >
                        Programs
                      </a>
                      <a
                        href="#"
                        className="block text-primary-NavyBlue hover:text-gray-900 py-3 px-2 cursor-pointer"
                      >
                        Tutorials
                      </a>
                    </div>
                  )}
                </div>

                <a
                  onClick={() => {
                    navigate("/about");
                    toggleDrawer();
                  }}
                  className="text-primary-NavyBlue cursor-pointer hover:text-gray-900 py-4 pr-2 flex items-center justify-between"
                >
                  About
                  <HiMiniArrowUpRight style={{ fontSize: "24px" }} />
                </a>
                <a
                  onClick={() => {
                    navigate("/blogs");
                    toggleDrawer();
                  }}
                  className="text-primary-NavyBlue cursor-pointer hover:text-gray-900 py-4 pr-2 flex items-center justify-between"
                >
                  Blogs
                  <HiMiniArrowUpRight style={{ fontSize: "24px" }} />
                </a>
              </div>

              {/* Fixed button at bottom */}
              <div className="sticky bottom-0 bg-white py-4">
                <CustomButton
                  label={
                    <div className="flex justify-center items-center gap-2">
                      <RiGraduationCapLine />
                      Apply as Instructor/Mentor
                    </div>
                  }
                  background="#113025"
                  labelClassName="text-base font-sans"
                  onClick={() => alert("Button Clicked!")}
                  className="w-full text-white h-12 rounded-md border border-r-8"
                  borderWidth="1"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
