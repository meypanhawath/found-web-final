import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Element_1 from "../../assets/element-1.svg";
import Element_2 from "../../assets/element-1-1.svg";
import Element_3 from "../../assets/element-1-2.svg";
import Element_4 from "../../assets/element-1-3.svg";
import Element_5 from "../../assets/element-1-4.svg";
import Element_6 from "../../assets/element-1-5.svg";
import PerspectiveGridBg from "../../assets/perspective-grid-bg.svg";
import { PrimaryBtn } from "../../components/button/Button";
import { SecondaryBtn } from "../../components/button/Button";
import { FaSearch } from "react-icons/fa";
import { HeartIcon } from "lucide-react";
import template1 from "../../assets/card-img1.png";
import template2 from "../../assets/card-img2.png";
import template3 from "../../assets/card-img3.png";
import template4 from "../../assets/card-img4.png";
import template5 from "../../assets/card-img5.png";
import template6 from "../../assets/card-img6.png";
import { Pagination } from "@mui/material";

const templateCards = [
  {
    id: 1,
    title: "Modern Portfolio",
    desc: "Suitable for professionals who prefer a sleek, timeless look.",
    image: template1,
  },
  {
    id: 2,
    title: "Creative Showcase",
    desc: "Ideal for artists and designers looking to showcase their work.",
    image: template2,
  },
  {
    id: 3,
    title: "Professional Resume",
    desc: "Perfect for job seekers wanting to highlight their skills and experience.",
    image: template3,
  },
  {
    id: 4,
    title: "Minimalist Design",
    desc: "Great for those who appreciate simplicity and elegance.",
    image: template4,
  },
  {
    id: 5,
    title: "Bold & Bright",
    desc: "Designed for those who want to make a statement with vibrant colors.",
    image: template5,
  },
  {
    id: 6,
    title: "Dark Mode",
    desc: "Modern look that's easy on the eyes, especially in low-light environments.",
    image: template6,
  },
  {
    id: 7,
    title: "Corporate Blue",
    desc: "Professional template perfect for business professionals.",
    image: template6,
  },
  {
    id: 8,
    title: "Artistic Vision",
    desc: "Express your creativity with this vibrant artistic template.",
    image: template5,
  },
  {
    id: 9,
    title: "Tech Innovator",
    desc: "Modern tech-focused design for developers and engineers.",
    image: template4,
  },
  {
    id: 10,
    title: "Elegant Simplicity",
    desc: "A clean and simple design for those who value minimalism.",
    image: template3,
  },
  {
    id: 11,
    title: "Vibrant Portfolio",
    desc: "Showcase your work with bold colors and dynamic layouts.",   
    image: template2,
  },
  {
    id: 12,
    title: "Classic Resume",
    desc: "A timeless design that highlights your professional journey.",
    image: template1,
  },
  {
    id: 13, 
    title: "Creative Burst",
    desc: "A lively and colorful template for creative professionals.",
    image: template1,
  }
];

const Template = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 items per page (2 rows of 3)

  // Calculate pagination
  const totalPages = Math.ceil(templateCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTemplates = templateCards.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Scroll to templates section when page changes
    document.querySelector(".templates-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-primary/50 via-pink-200 to-gray-100">
        <div id="scrollProgress" class="absolute w-6xl scroll-indicator"></div>
        <section className="min-h-screen relative overflow-hidden">
          <Navbar />
          <img
            className="absolute text-pink opacity-60 inset-0 min-h-screen bg-[url('/pattern.svg')] bg-repeat w-full h-screen lg:top-10 md:-top-45 -top-15"
            src={PerspectiveGridBg}
            alt="perspective grid background"
          />
          <section className="relative w-full h-screen flex flex-col items-center">
            <section className="relative w-full z-10 max-w-screen-xl container mx-auto py-20 flex flex-row gap-10 lg:gap-20">
              <section className="relative flex-1 flex flex-col justify-center gap-12 md:gap-40">
                <img
                  className="w-10 sm:w-10 md:w-10 lg:w-14 animate-drift"
                  src={Element_1}
                  alt="personal"
                />
                <img
                  className="w-10 sm:w-10 md:w-10 lg:w-14 absolute left-5 md:left-20 animate-wobble delay-500"
                  src={Element_3}
                  alt="inspire"
                />
                <img
                  className="w-10 sm:w-10 md:w-10 lg:w-14 animate-pulse delay-500"
                  src={Element_2}
                  alt="professional"
                />
                <style>{`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                  100% { transform: translateY(0px); }
                }
                .animate-float {
                  animation: float 5s ease-in-out infinite;
                }
                .delay-200 {
                  animation-delay: 2s;
                }
                .delay-500 {
                  animation-delay: 5s;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }

                  @keyframes wobble {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(8deg); }
                  }

                  .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                  }
                  .animate-wobble {
                    animation: wobble 3s ease-in-out infinite;
                  }
                  @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.7; }
                  }
                  .animate-pulse-slow {
                    animation: pulse 4s ease-in-out infinite;
                  }
                  @keyframes drift {
                  0% { transform: translate(0,0); }
                  25% { transform: translate(10px, -10px); }
                  50% { transform: translate(0, -20px); }
                  75% { transform: translate(-10px, -10px); }
                  100% { transform: translate(0,0); }
                }
                .animate-drift {
                  animation: drift 8s ease-in-out infinite;
                }
                  @keyframes bow {
                  0%, 100% { transform: translateY(0); opacity: 0.6; }
                  50% { transform: translateY(60px); opacity: 1; }
                }
                .animate-bow {
                  animation: bow 5s infinite;
                }
                @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              .scroll-indicator {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: linear-gradient(to right, #10b981, #8b5cf6);
                transform-origin: left;
                transform: scaleX(0);
                z-index: 9999;
                transition: transform 0.1s ease;
              }
              `}</style>
              </section>
              <section className="flex flex-col gap-0 md:gap-4 w-fit">
                <h1 className="text-center text-2xl line-clamp-3 md:line-clamp-2 lg:text-7xl font-heading text-smoke dark:text-gray-900 leading-tight">
                  Launching Your Portfolio <br />
                  in Minutes
                </h1>
                <p className="line-clamp-2 text-xs md:text-2xl text-center text-smoke dark:text-gray-900">
                  Pick a template, personalize it, and share <br />
                  your story with the world.
                </p>
              </section>
              <section className="relative f flex-1 flex flex-col justify-center items-end gap-12 md:gap-40">
                <img
                  className="w-8 sm:w-8 md:w-10 lg:w-14 animate-float delay-200"
                  src={Element_4}
                  alt="personal"
                />
                <img
                  className="w-8 sm:w-8 md:w-10 lg:w-14 absolute right-10 md:right-20 animate-drift"
                  src={Element_5}
                  alt="inspire"
                />
                <img
                  className="w-8 sm:w-8 md:w-10 lg:w-14 animate-wobble delay-500"
                  src={Element_6}
                  alt="professional"
                />
              </section>
            </section>
            <section className="absolute mt-20 flex flex-col gap-5 w-fit top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <a href="#templateSection" className="text-center text-sm md:text-lg text-gray-600">
                <button className="px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:scale-102 transition-shadow duration-500">
                  Explore
                </button>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-10 h-10 self-center text-primary animate-bow shadow-gray-300 shadow-md rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m0 0l-6-6m6 6l6-6"
                />
              </svg>
            </section>
          </section>
        </section>
      </section>
      <section className="max-w-screen-xl container mx-auto flex flex-col gap-10">
        <article className="flex flex-col gap-2 px-5 text-center">
          <h2 className="text-desc md:text-title font-bold relative">
            Your <span className="text-purple-600">portfolio</span> start here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 20"
              className="absolute top-15 sm:left-[30%] md:left-[38%] -bottom-2 w-46 h-6"
              transform="scale(1,-1)"
            >
              <path
                d="M 0 10 Q 100 30 200 10"
                stroke="#A78BFA"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </h2>
          <p className="text-desc text-gray-500">
            Pick a template, customize it in minutes and launch your personal
            brand.
          </p>
        </article>
        <section className="button-container flex items-center justify-between w-full">
          <section className="py-5 flex flex-row gap-5 justify-start">
            <SecondaryBtn className="rounded-full">Templates</SecondaryBtn>
            <SecondaryBtn className="rounded-full">Popular</SecondaryBtn>
            <SecondaryBtn className="rounded-full">Recommend</SecondaryBtn>
          </section>
          <section className="py-5 flex flex-row gap-5 justify-center items-center">
            <div className="relative w-[500px]">
              <label htmlFor="template-search" className="sr-only">
                Search templates
              </label>
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              <input
                type="text"
                id="template-search"
                placeholder="Search templates..."
                className="border border-gray-300 rounded-full w-full h-16 pl-14 pr-5"
              />
            </div>
            <SecondaryBtn className="rounded-full">Favorite</SecondaryBtn>
          </section>
        </section>
        <section className="templateSection w-full min-h-screen flex flex-col gap-8">
          <div className="templates-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {currentTemplates.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-md pb-4 hover:scale-103 transform transition-transform duration-500"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg border-gray-300 group cursor-pointer">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-cover transition-transform duration-5000 ease-linear group-hover:-translate-y-[calc(100%-16rem)]"
                  />
                </div>
                <section className="p-4 relative flex flex-row">
                  <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors duration-300 absolute top-4 right-4 cursor-pointer" />
                  <span className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold uppercase">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-desc">{card.desc}</p>
                  </span>
                </section>
              </div>
            ))}
          </div>

          {/* Material-UI Pagination */}
          <div className="flex justify-center pt-5 pb-8">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "1.1rem",
                  fontWeight: 500,
                },
                "& .Mui-selected": {
                  backgroundColor: "#9333ea !important",
                  color: "white",
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#e5e7eb",
                },
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Template;
