import React from "react";

const AiTutorSection = () => {
  return (
    <section
      id="advertise-section"
      className="text-[var(--primary-text-color)] mt-40"
    >
      <div className="container flex justify-center flex-col items-center space-y-3.5">
        <h2 className="title-card w-[600px] text-center">
          Your personal AI tutor
        </h2>
        <p className="font-normal text-2xl">
          Our AI helps you solve your homework questions in seconds.
        </p>

        {/* Advertise Card */}
        <div className="bg-[#fff2f9] rounded-2xl mx-auto w-[100%] h-[563px] overflow-hidden outline-11 outline-[#ecd4e1] outline-solid flex mt-4 gap-5">
          <div className="basis-6/12 flex justify-center flex-start ml-10 flex-col gap-10">
            <p className="font-bold text-[#583446] text-5xl">Answer AI</p>
            <p className="font-normal text-3xl text-[var(--secondary-text-color)]">
              Whether you crop a question or type into the chat box, AI is ready
              to help - instantly.
            </p>
            <button className="py-4 px-6 bg-[#472838] w-fit text-white rounded-full text-xl group">
              <div className="flex gap-2 items-center">
                Try it out
                <div className="transform transition-transform group-hover:translate-x-2">
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
                    className="lucide lucide-arrow-right-icon lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="basis-6/12 rounded-4xl h-[100%] bg-white flex flex-col justify-center items-center gap-5"></div>
        </div>

        <div className="flex mt-10 gap-20">
          <div className="outline-11 outline-[#e1d6ef] outline-solid w-fit h-[563px] rounded-2xl bg-[#f7f1ff] relative basis-6/12">
            <div className="ml-10 mt-10">
              <p className="font-bold text-6xl">Crop to Chat</p>
              <p className="font-normal text-2xl w-[500px]">
                Crop any part of your PDF or image to get instant answers.
              </p>
            </div>
            <div className="relative top-22.5">
              <img src="/images/AI Tutor/Crop to Chat/Overview.svg" alt="" />
            </div>
          </div>

          <div className="outline-11 outline-[#e5d8c5] outline-solid w-fit h-[563px] rounded-2xl bg-[#fef8e0] relative basis-6/12">
            <div className="ml-10 mt-10">
              <p className="font-bold text-6xl">AI Chat Box</p>
              <p className="font-normal text-2xl w-[500px]">
                Type your questions - get instant answers from AI
              </p>
            </div>
            <div className="relative top-22.5 left-15">
              <img
                src="/images/AI Tutor/AI Chat Box/Overview.svg"
                alt="Overview"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTutorSection;
