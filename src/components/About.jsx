import React from "react";
import stackImage from "../assets/about/Hero Image.png";
import { aboutContent } from "../data/portfolioData";

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      className="w-16 h-16 md:w-20 md:h-20"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#3776AB"
        d="M63.996 0C31.999 0 34 13.875 34 13.875l.035 14.375h30.5v4.313H22C22 32.563 0 30.188 0 64c0 33.813 19.188 32.625 19.188 32.625h11.438V80.5S29.999 64 46.5 64h27.5c15.313 0 28-12.625 28-28V13.875S106.438 0 63.996 0z"
      />
      <path
        fill="#FFD43B"
        d="M64.004 128C96.001 128 94 114.125 94 114.125l-.035-14.375h-30.5v-4.313H106c0 0 22 2.375 22-31.437C128 30.188 108.812 31.375 108.812 31.375H97.375V47.5S98.001 64 81.5 64H54c-15.313 0-28 12.625-28 28v22.125S21.562 128 64.004 128z"
      />
      <circle cx="50" cy="18" r="4" fill="#fff" />
      <circle cx="78" cy="110" r="4" fill="#fff" />
    </svg>

    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      Python
    </span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      className="w-16 h-16 md:w-20 md:h-20"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="#61DAFB" strokeWidth="5">
        <ellipse cx="64" cy="64" rx="18" ry="46" />
        <ellipse cx="64" cy="64" rx="18" ry="46" transform="rotate(60 64 64)" />
        <ellipse
          cx="64"
          cy="64"
          rx="18"
          ry="46"
          transform="rotate(120 64 64)"
        />
      </g>
      <circle cx="64" cy="64" r="7" fill="#61DAFB" />
    </svg>

    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      React
    </span>
  </div>
);
const FastAPIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      className="w-16 h-16 md:w-20 md:h-20"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="56" fill="#009688" />

      <path fill="#ffffff" d="M72.6 27L42 70h18l-4.6 31L86 58H68l4.6-31z" />
    </svg>

    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      FastAPI
    </span>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#c9ada7] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-serif"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div
            data-aos="drop-bounce"
            className="relative flex justify-center w-full"
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Shakshi Jha — Computer Science Undergraduate"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 text-white mt-8 md:mt-0 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
            >
              <PythonIcon />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="450"
              className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
            >
              <ReactIcon />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
            >
              <FastAPIIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
