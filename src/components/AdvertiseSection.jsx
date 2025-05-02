import React from "react";

const AdvertiseSection = () => {
  return (
    <section
      id="advertise-section"
      className="text-[var(--primary-text-color)]"
    >
      <div className="container flex justify-center flex-col items-center space-y-3.5">
        <h2 className="title-card w-[600px] text-center">
          Short on time and want more study prep?
        </h2>
        <p className="font-normal text-2xl">
          We got you covered with our Import feature
        </p>

        {/* Advertise Card */}
        <div className="bg-[#FFF8E8] rounded-2xl mx-auto w-[100%] h-[563px] overflow-hidden outline-11 outline-[#faedcd] outline-solid flex mt-4">
          <div className="basis-8/12">
            <div className="translate-x-10 -translate-y-12 w-fit">
              <img
                src="/images/Import/Anki.svg"
                alt="Anki Photo"
                className="w-50"
              />
            </div>
            <div className="translate-x-13 translate-y-20 w-fit">
              <img
                src="/images/Import/PPT.svg"
                alt="PPT Photo"
                className="w-50"
              />
            </div>
            <div className="translate-x-70 -translate-y-80 w-fit">
              <img
                src="/images/Import/Quizlet.svg"
                alt="Quizlet Photo"
                className="w-50"
              />
            </div>
            <div className="translate-x-130 -translate-y-190 w-fit">
              <img
                src="/images/Import/DOCX.svg"
                alt="Health Photo"
                className="w-50"
              />
            </div>
            <div className="translate-x-130 -translate-y-175 w-fit">
              <img
                src="/images/Import/PDF.svg"
                alt="Health Photo"
                className="w-50"
              />
            </div>
          </div>
          <div className="basis-4/12 rounded-2xl h-[100%] bg-white flex flex-col justify-center items-center gap-5">
            <div>
              <img src="/images/Import/Ellipse.svg" alt="Ellipse" />
            </div>
            <p className="text-4xl mt-10">Import</p>
            <p className="font-normal text-2xl w-[400px] text-center">
              Make flashcards{" "}
              <span className="text-[var(--secondaty-text-color)] font-bold">
                instantly
              </span>{" "}
              by uploading your materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseSection;
