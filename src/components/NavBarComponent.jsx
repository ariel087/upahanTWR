import { useState } from "react";
import LoginModalComponent from "./modals/LoginModalComponent";
import SignupModalComponent from "./modals/SignupModalComponent";
import { Link } from "react-router-dom";
const NavBarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal visibility
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); // State for login modal visibility

  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Toggles menu visibility

  return (
    <>
      {/* Navigation bar */}
      <nav className="w-full flex justify-between items-center py-8 px-3 md:py-10 md:px-10 h-20 bg-white shadow-sm border-b border-gray-200">
        {/* Logo Section */}
        <div className="flex items-center">
        <Link to={"../"}>
          <img
            src="../src/assets/logo/upahan.png"
            className="w-32 h-10"
            alt="Upahan Logo"
            />
            </Link>
        </div>

        {/* Menu Button */}
        <div className="w-16 h-6 sm:w-24 sm:h-10 rounded-full border-2 border-customColor-light hover:opacity-75 transition">
          <button
            className="w-full h-full px-2 flex justify-center items-center"
            onClick={toggleMenu} // Toggles the menu visibility
          >
            <img
              src="../src/assets/icon/menu.png"
              className="w-10 sm:w-14 sm:h-8"
              alt="Menu Icon"
            />
          </button>
        </div>
      </nav>

      {/* Modal for Sign Up/Login */}
      {isMenuOpen && (
        <div className="fixed right-2 shadow-lg w-72 z-10 top-20">
          <div className="bg-white rounded-md p-6 relative">
            <ul className="w-full h-full text-lg font-semibold flex flex-col gap-5">
              <li className="w-full h-10 hover:bg-gray-300 flex items-center pl-2 cursor-pointer rounded-lg"
              onClick={() => {
                setIsMenuOpen(false); 
                setIsSignupModalOpen(true);
              }}
              >
                Sign Up
              </li>
              <li
                className="w-full h-10 hover:bg-gray-300 flex items-center pl-2 cursor-pointer rounded-lg"
                onClick={() => {
                  setIsMenuOpen(false); 
                  setIsLoginModalOpen(true);
                }}
              >
                Login
              </li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Login Modal Component */}
      <LoginModalComponent showModal={isLoginModalOpen} setShowModal={setIsLoginModalOpen} />
      <SignupModalComponent showModal={isSignupModalOpen} setShowModal={setIsSignupModalOpen} />
    </>
  );
};

export default NavBarComponent;
