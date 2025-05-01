import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-10">
      <div className="flex gap-15 mr-20">
        <button className="text-[var(--primary-text-color)] navbar-text w-[67px] h-[40px]">
          Tools
        </button>
        <button className="text-[var(--primary-text-color)] navbar-text w-[86px] h-[40px]">
          Explore
        </button>
      </div>
      <div className="w-[477px] h-[40px]">
        <div class="flex items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon lucide-search w-5 h-5 text-gray-600 mr-2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="I'm looking for..."
            class="bg-transparent w-full text-gray-600 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
