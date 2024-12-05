"use client";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null); // To reference the navbar and check for outside clicks

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if clicked outside the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 p-4 z-50 sticky top-0" ref={navbarRef}>
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#ede8d0]">MARUTNANDAN</div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <Menu className="w-6 h-6 text-white" onClick={toggleNavbar} />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 absolute lg:relative left-0 w-full bg-gray-800 lg:bg-transparent lg:w-auto p-4 lg:p-0 z-10`}
          style={{
            top: isOpen ? "100%" : "auto",
            transition: "top 0.3s ease", // smooth transition for opening
          }}
        >
          {/* Mobile View Navigation Items */}
          <a
            href="#"
            className="text-white py-3 px-4 hover:bg-[#ede8d0] transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white py-3 px-4 hover:bg-[#ede8d0] transition-colors"
          >
            Project
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 rounded hover:bg-orange-400 transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Mobile View Adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #333; /* Darker background on mobile */
            border-radius: 8px; /* Rounded corners */
          }
          a {
            display: block; /* Ensure vertical stack */
            text-align: center; /* Center text */
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
