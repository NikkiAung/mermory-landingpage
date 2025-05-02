import React from "react";

const DecksSection = () => {
  return (
    <section
      id="advertise-section"
      className="text-[var(--primary-text-color)] mt-40"
    >
      <div className="container flex justify-center flex-col items-center space-y-3.5">
        <h2 className="title-card w-[600px] text-center">
          Explore ready-made decks
        </h2>
        <p className="font-normal text-2xl">
          Discover flashcard decks created by students just like you.
        </p>
      </div>
      <div className="container">
        <ul className="flex gap-5 text-zinc-500 text-2xl">
          <li className="py-2 px-5 hover:bg-[#2c9be2] hover:rounded-full hover:text-black hover:font-semibold transition-all duration-500 cursor-pointer">
            Science
          </li>
          <li className="py-2 px-5 hover:bg-[#2c9be2] hover:rounded-full hover:text-black hover:font-semibold transition-all duration-500 cursor-pointer">
            Math
          </li>
          <li className="py-2 px-5 hover:bg-[#2c9be2] hover:rounded-full hover:text-black hover:font-semibold transition-all duration-500 cursor-pointer">
            Physics
          </li>
          <li className="py-2 px-5 hover:bg-[#2c9be2] hover:rounded-full hover:text-black hover:font-semibold transition-all duration-500 cursor-pointer">
            Engineering
          </li>
        </ul>
        {/* Decks Card */}
        <div className="grid grid-cols-3 mt-5 gap-5">
          <div className="flex flex-col">
            <img src="/images/Decks Section/Image.svg" alt="card image" />
            <div className="flex items-center gap-2 mt-3 text-zinc-500">
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_star-fill.svg"
                  alt="ph_star"
                />
                <p className="flex items-center">4.5 (12)</p>
              </div>
              <img
                src="/images/Decks Section/dot.svg"
                alt="dot"
                className="flex items-center"
              />
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_book-open-user-duotone.svg"
                  alt="ph_book open"
                />
                <p className="flex items-center">2 studiers</p>
              </div>
            </div>
            <div className="flex gap-1">
              <img
                src="/images/Decks Section/person.svg"
                alt="person"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <p className="font-semibold font-3xl">Biology Final Exam</p>
                <p className="font-normal font-sm">@emily381</p>
              </div>
            </div>
            <p>Updated 1 days ago</p>
          </div>
          <div className="flex flex-col">
            <img src="/images/Decks Section/Image.svg" alt="card image" />
            <div className="flex items-center gap-2 mt-3 text-zinc-500">
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_star-fill.svg"
                  alt="ph_star"
                />
                <p className="flex items-center">4.5 (12)</p>
              </div>
              <img
                src="/images/Decks Section/dot.svg"
                alt="dot"
                className="flex items-center"
              />
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_book-open-user-duotone.svg"
                  alt="ph_book open"
                />
                <p className="flex items-center">2 studiers</p>
              </div>
            </div>
            <div className="flex gap-1">
              <img
                src="/images/Decks Section/person.svg"
                alt="person"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <p className="font-semibold font-3xl">Biology Final Exam</p>
                <p className="font-normal font-sm">@emily381</p>
              </div>
            </div>
            <p>Updated 1 days ago</p>
          </div>

          <div className="flex flex-col">
            <img src="/images/Decks Section/Image.svg" alt="card image" />
            <div className="flex items-center gap-2 mt-3 text-zinc-500">
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_star-fill.svg"
                  alt="ph_star"
                />
                <p className="flex items-center">4.5 (12)</p>
              </div>
              <img
                src="/images/Decks Section/dot.svg"
                alt="dot"
                className="flex items-center"
              />
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_book-open-user-duotone.svg"
                  alt="ph_book open"
                />
                <p className="flex items-center">2 studiers</p>
              </div>
            </div>
            <div className="flex gap-1">
              <img
                src="/images/Decks Section/person.svg"
                alt="person"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <p className="font-semibold font-3xl">Biology Final Exam</p>
                <p className="font-normal font-sm">@emily381</p>
              </div>
            </div>
            <p>Updated 1 days ago</p>
          </div>

          <div className="flex flex-col">
            <img src="/images/Decks Section/Image.svg" alt="card image" />
            <div className="flex items-center gap-2 mt-3 text-zinc-500">
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_star-fill.svg"
                  alt="ph_star"
                />
                <p className="flex items-center">4.5 (12)</p>
              </div>
              <img
                src="/images/Decks Section/dot.svg"
                alt="dot"
                className="flex items-center"
              />
              <div className="flex items-center gap-1">
                <img
                  src="/images/Decks Section/ph_book-open-user-duotone.svg"
                  alt="ph_book open"
                />
                <p className="flex items-center">2 studiers</p>
              </div>
            </div>
            <div className="flex gap-1">
              <img
                src="/images/Decks Section/person.svg"
                alt="person"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <p className="font-semibold font-3xl">Biology Final Exam</p>
                <p className="font-normal font-sm">@emily381</p>
              </div>
            </div>
            <p>Updated 1 days ago</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecksSection;
