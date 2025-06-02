// import React, { useState } from "react";

// const AwardsCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const awards = [
//     {
//       image: "/awards/award1.jpg",
//       title: "Excellence in Financial Advisory",
//       description: "Recognized for outstanding financial advisory services",
//       year: "2023",
//     },
//     {
//       image: "/awards/award2.jpg",
//       title: "Best Tax Consultant",
//       description: "Award for exceptional tax consultation services",
//       year: "2022",
//     },
//     {
//       image: "/awards/award3.jpg",
//       title: "Business Growth Champion",
//       description: "Acknowledged for fostering business growth and development",
//       year: "2022",
//     },
//     {
//       image: "/awards/award4.jpg",
//       title: "Innovation in Finance",
//       description: "Recognized for innovative financial solutions",
//       year: "2021",
//     },
//     {
//       image: "/awards/award5.jpg",
//       title: "Corporate Excellence",
//       description: "Award for excellence in corporate financial management",
//       year: "2021",
//     },
//   ];

//   // Add the first three items to the end for smooth looping
//   const displayAwards = [...awards, ...awards.slice(0, 3)];
//   const maxIndex = awards.length;

//   const nextSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       const nextIndex = currentIndex + 1;

//       setCurrentIndex(nextIndex);

//       if (nextIndex >= maxIndex) {
//         // When we reach the end, wait for transition then jump to start
//         setTimeout(() => {
//           setIsTransitioning(false);
//           setCurrentIndex(0);
//         }, 500);
//       } else {
//         setTimeout(() => setIsTransitioning(false), 500);
//       }
//     }
//   };

//   const prevSlide = () => {
//     if (!isTransitioning && currentIndex > 0) {
//       setIsTransitioning(true);
//       setCurrentIndex(currentIndex - 1);
//       setTimeout(() => setIsTransitioning(false), 500);
//     }
//   };

//   return (
//     <div className="relative px-12">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(calc(-${currentIndex * 100}% / 3))`,
//           }}
//         >
//           {displayAwards.map((award, index) => (
//             <div
//               key={`${award.title}-${index}`}
//               className="w-1/3 px-3 flex-shrink-0"
//             >
//               <div
//                 className={`
//                   bg-opacity-5 bg-white rounded-lg backdrop-blur-sm
//                   border border-white/10 hover:border-primary/30
//                   transition-all duration-300 group p-4
//                   transform hover:scale-105 hover:-translate-y-1
//                 `}
//               >
//                 <div className="w-full h-48 mb-4 bg-gray-800 rounded-lg overflow-hidden">
//                   <div className="w-full h-full bg-primary/10 flex items-center justify-center">
//                     <span className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
//                       {award.year}
//                     </span>
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold font-title mb-2 group-hover:text-primary transition-colors duration-300">
//                   {award.title}
//                 </h3>
//                 <p className="text-gray font-subtitle text-sm">
//                   {award.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className={`
//           absolute left-0 top-1/2 transform -translate-y-1/2
//           bg-black/50 p-2 rounded-full
//           hover:bg-primary/50 transition-all duration-300
//           hover:scale-110 active:scale-95
//           ${
//             !currentIndex || isTransitioning
//               ? "opacity-50 cursor-not-allowed"
//               : "opacity-100"
//           }
//         `}
//         disabled={!currentIndex || isTransitioning}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>
//       <button
//         onClick={nextSlide}
//         className={`
//           absolute right-0 top-1/2 transform -translate-y-1/2
//           bg-black/50 p-2 rounded-full
//           hover:bg-primary/50 transition-all duration-300
//           hover:scale-110 active:scale-95
//           ${isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"}
//         `}
//         disabled={isTransitioning}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default AwardsCarousel;
<<<<<<< HEAD

=======
>>>>>>> main
import React, { useState, useEffect, useCallback } from "react";

const awards = [
  {
    image: "/awards/award1.jpg",
    title: "Excellence in Financial Advisory",
    description: "Recognized for outstanding financial advisory services",
    year: "2023",
  },
  {
    image: "/awards/award2.jpg",
    title: "Best Tax Consultant",
    description: "Award for exceptional tax consultation services",
    year: "2022",
  },
  {
    image: "/awards/award3.jpg",
    title: "Business Growth Champion",
    description: "Acknowledged for fostering business growth and development",
    year: "2022",
  },
  {
    image: "/awards/award4.jpg",
    title: "Innovation in Finance",
    description: "Recognized for innovative financial solutions",
    year: "2021",
  },
  {
    image: "/awards/award5.jpg",
    title: "Corporate Excellence",
    description: "Award for excellence in corporate financial management",
    year: "2021",
  },
];

const getSlidesPerView = (width) => {
  if (width < 640) return 1; // mobile
  if (width < 1024) return 2; // sm / md
  return 3; // lg+
};

const AwardsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(
    getSlidesPerView(window.innerWidth)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  /** ─────────────────────────────────────────────────────────────
   *  Resize listener – updates how many cards are visible        */
  useEffect(() => {
    const handleResize = () =>
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /** ─────────────────────────────────────────────────────────────
   *  Build a clone tail so the loop feels seamless               */
  const displayAwards = [...awards, ...awards.slice(0, slidesPerView)];
  const maxIndex = awards.length;

  /** ─────────────────────────────────────────────────────────────
   *  Helpers to move carousel                                    */
  const slideTo = useCallback(
    (idx) => {
      setIsTransitioning(true);
      setCurrent(idx);

      // when we hit the cloned tail, jump back to the real start
      if (idx >= maxIndex) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrent(0);
        }, 500);
      } else {
        setTimeout(() => setIsTransitioning(false), 500);
      }
    },
    [maxIndex]
  );

  const next = () => !isTransitioning && slideTo(current + 1);
  const prev = () => !isTransitioning && current > 0 && slideTo(current - 1);

  /** ─────────────────────────────────────────────────────────────
   *  % we need to translate for each “step”                      */
  const translate = -(current * 100) / slidesPerView;

  return (
    <div className="relative px-8 sm:px-12">
      {/* TRACK */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translate}%)` }}
        >
          {displayAwards.map((award, i) => (
            <div
              key={`${award.title}-${i}`}
              className="basis-full sm:basis-1/2 lg:basis-1/3 px-3 flex-shrink-0"
            >
              <div
                className="
                bg-opacity-5 bg-white rounded-lg backdrop-blur-sm
                border border-white/10 hover:border-primary/30
                transition-all duration-300 group p-4
                transform hover:scale-105 hover:-translate-y-1
              "
              >
                <div className="w-full h-48 mb-4 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  {/* optional image – keep year overlay for current design */}
                  {/* <img src={award.image} alt={award.title} className="object-cover w-full h-full" /> */}
                  <span className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-title mb-2 group-hover:text-primary transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-gray font-subtitle text-sm">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NAV ARROWS */}
      <button
        onClick={prev}
        disabled={current === 0 || isTransitioning}
        className={`
          absolute left-0 top-1/2 -translate-y-1/2
          bg-black/50 p-2 rounded-full text-white
          hover:bg-primary/50 transition-all duration-300
          hover:scale-110 active:scale-95
          ${
            current === 0 || isTransitioning
              ? "opacity-40 cursor-not-allowed"
              : "opacity-100"
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={next}
        disabled={isTransitioning}
        className={`
          absolute right-0 top-1/2 -translate-y-1/2
          bg-black/50 p-2 rounded-full text-white
          hover:bg-primary/50 transition-all duration-300
          hover:scale-110 active:scale-95
          ${isTransitioning ? "opacity-40 cursor-not-allowed" : "opacity-100"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default AwardsCarousel;
