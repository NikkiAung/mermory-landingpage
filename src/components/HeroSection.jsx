import React from "react";

const HeroSection = () => {
  return (
    <section id="hero-section" className="pt-5 lg:pt-10">
      <div className="bg-gradient-to-r from-[#B4ACF126] to-[#309CE226] p-6 rounded-3xl shadow-md container flex items-center">
        <div className="w-[1340px] h-[600px] basis-3/12 flex flex-col justify-center ml-20">
          <h1 className="text-5xl font-bold leading-[55px]">
            Flashcards, <br />
            <span className="bg-gradient-to-r from-[#2C9CE2] to-[#BFADF2] text-transparent bg-clip-text">
              Reimagined
            </span>
          </h1>

          <p className="my-6 font-normal font-lg text-2xl">
            Stylish, smart, and completely customizable.
          </p>
          <button className="btn btn-hover-animated !py-4 !px-5 navbar-text outline-4 outline-white outline-solid shadow-md max-w-[50%]">
            Start Designing
          </button>
        </div>
        <div className="basis-9/12 max-w-2xl mx-auto p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg space-y-4 font-figtree">
          <div className="bg-white rounded-xl p-6 flex items-center justify-between space-x-4 h-[250px] relative">
            {/* front card */}
            <div className="w-1/3 text-center text-pink-600 font-semibold text-sm border border-dashed border-pink-400 rounded-lg p-4">
              <img src="/images/Hero Section/Health.svg" alt="Health Photo" />
            </div>

            <div className="w-2/3">
              <p className="navbar-text !font-normal !text-2xl">
                What is a physical change?
              </p>
            </div>

            <div className="absolute top-48 right-75">
              <span className="bg-[#d968c9] text-white text-lg font-semibold px-6 py-2 rounded-lg shadow">
                Bilal
              </span>
            </div>
            <div className="absolute top-1 right-144">
              <span className="text-gray-400">Front</span>
            </div>
            <div className="absolute top-40 right-100 animate-point-left">
              <img src="/images/Hero Section/Pink Arrow.svg" alt="Pink-Arrow" />
            </div>
          </div>

          {/* back card */}
          <div className="bg-white rounded-xl p-6 relative h-[250px] flex justify-center items-center">
            <p className="text-center navbar-text !font-normal !text-2xl max-w-[66%]">
              A physical change is a change in a substance's form without
              altering its composition.
            </p>

            <div className="absolute top-6 right-22">
              <span className="bg-[#a48aeb] text-white text-lg font-semibold px-6 py-2 rounded-lg shadow">
                John
              </span>
            </div>

            <div className="absolute top-1 right-144">
              <span className="text-gray-400">
                <div className="flex gap-2 items-center">
                  Back
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-copy-icon lucide-copy"
                  >
                    <rect width="15" height="15" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </div>
              </span>
            </div>
            <div className="absolute top-10 right-46 animate-point-down">
              <img
                src="/images/Hero Section/Purple Arrow.svg"
                alt="Purple Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
