import React from "react";

const StudyModesSection = () => {
  return (
    <section
      id="advertise-section"
      className="text-[var(--primary-text-color)]"
    >
      <div className="container flex justify-center flex-col items-center space-y-3.5">
        <h2 className="title-card w-[600px] text-center">
          Learn at your own pace with adaptive study modes
        </h2>
        <p className="font-normal text-2xl">
          Choose the study style that works best for you
        </p>

        {/* StudyModes Card */}
        <div className="grid grid-cols-3 w-full mt-10">
          <div className="rounded-2xl outline-9 outline-[#ffa6b1] outline-solid w-[422px] h-[460px] flex flex-col relative group cursor-pointer">
            {/* desgin  part */}
            <div className="basis-10/12 bg-[#ffe0e5] ">
              <img
                src="/images/Study Modes/Learn/Main Flashcard.svg"
                alt="Main Flashcard"
                className="absolute top-17 left-15 z-10 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/Study Modes/Learn/Flashcard Mini 1.svg"
                alt="Flashcard Mini 1"
                className="absolute top-7 left-5 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/Study Modes/Learn/Flashcard Mini 2.svg"
                alt="Flashcard Mini 2"
                className="absolute top-57 left-80 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-2.5 bg-[#fb9eaa] w-full"></div>
            {/* text  part*/}
            <div className="basis-4/12 flex flex-col gap-1.5 justify-center ml-5 mr-5">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-3xl">Learn</p>
                  <p className="font-normal text-xl">Standard Flashcard Mode</p>
                </div>

                <div className=" ">
                  <img
                    src="/images/Study Modes/Learn/Arrow.svg"
                    alt="Arrow"
                    className="w-14 h-14 rotate-330 group-hover:rotate-360 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl outline-9 outline-[#5ec0a9] outline-solid w-[422px] h-[460px] flex flex-col relative group cursor-pointer overflow-hidden">
            {/* desgin  part */}
            <div className="basis-10/12 bg-[#cef6ee] ">
              <img
                src="/images/Study Modes/Review/Main Flashcard.svg"
                alt="Main Flashcard"
                className="absolute top-17 left-15 z-10 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/Study Modes/Review/Checkmark - Small.svg"
                alt="Flashcard Mini 1"
                className="absolute top-60 left-5 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/Study Modes/Review/Checkmark - Large.svg"
                alt="Flashcard Mini 2"
                className="absolute top-5 left-93 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-2.5 bg-[#5ec0a9] w-full"></div>
            {/* text  part*/}
            <div className="basis-4/12 flex flex-col gap-1.5 justify-center ml-5 mr-5">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-3xl">Review</p>
                  <p className="font-normal text-xl">Knowledge Check Mode</p>
                </div>

                <div className=" ">
                  <img
                    src="/images/Study Modes/Review/Arrow.svg"
                    alt="Arrow"
                    className="w-14 h-14 rotate-330 group-hover:rotate-360 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl outline-9 outline-[#9E8FDB] outline-solid w-[422px] h-[460px] flex flex-col relative group cursor-pointer overflow-hidden">
            {/* desgin  part */}
            <div className="basis-10/12 bg-[#f3e1f9]">
              <img
                src="/images/Study Modes/FSRS/Main Flashcard.svg"
                alt="Main Flashcard"
                className="absolute top-17 left-15 z-10 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/Study Modes/FSRS/Good Vector.svg"
                alt="Good Vector"
                className="absolute top-1.5 -left-1 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/Study Modes/FSRS/Again Vector.svg"
                alt="Again Vector"
                className="absolute top-5 left-80 group-hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/Study Modes/FSRS/Easy Vector.svg"
                alt="Easy Vector"
                className="absolute top-70 left-80 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-2.5 bg-[#9E8FDB] w-full relative z-10"></div>
            {/* text  part*/}
            <div className="basis-4/12 flex flex-col gap-1.5 justify-center ml-5 mr-5">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-3xl">FSRS</p>
                  <p className="font-normal text-xl">Space Repetition Mode</p>
                </div>

                <div className=" ">
                  <img
                    src="/images/Study Modes/FSRS/Arrow.svg"
                    alt="Arrow"
                    className="w-14 h-14 rotate-330 group-hover:rotate-360 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyModesSection;
