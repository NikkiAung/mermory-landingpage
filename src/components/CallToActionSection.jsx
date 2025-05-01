import React, { useEffect, useRef } from "react";

const CallToActionSection = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      ul.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <section
      className="relative py-24 overflow-hidden mt-60 
"
      style={{
        backgroundImage: ["url('/images/Social Proof/Star Wavy.svg')"],
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "200px",
        // backgroundRepeat: "no-repeat",
        maxWidth: "100%",
      }}
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 bg-no-repeat bg-cover bg-center">
        <div className="text-center">
          <p className="text-3xl font-bold text-[#0B0F19]">
            <span className="text-[#3797D3]">Join students</span> from around
            the globe using memory
          </p>

          {/* Logo Carousel animation */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              style={{ width: "max-content" }}
            >
              <li>
                <img
                  src="/images/Social Proof/Penn.svg"
                  alt="Penn"
                  className="h-50 w-50"
                />
              </li>
              <li>
                <img
                  src="/images/Social Proof/Cornell.svg"
                  alt="Cornell"
                  className="h-50 w-50"
                />
              </li>
              <li>
                <img
                  src="/images/Social Proof/Princeton.svg"
                  alt="Princeton"
                  className="h-50 w-50"
                />
              </li>
              <li>
                <img
                  src="/images/Social Proof/UCLA.svg"
                  alt="UCLA"
                  className="h-50 w-50"
                />
              </li>
              <li>
                <img
                  src="/images/Social Proof/UCDavis.svg"
                  alt="UCDavis"
                  className="h-50 w-50"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
