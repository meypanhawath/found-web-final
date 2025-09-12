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

const Template = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-primary/30">
        <div className="absolute left-150 top-20 w-150 h-150 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <section className="min-h-screen relative overflow-hidden">
          <Navbar/>
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

              `}</style>
              </section>
              <section className="flex flex-col gap-0 md:gap-4 w-fit">
                <h1 className="text-center text-2xl lg:text-7xl font-heading text-smoke dark:text-gray-900 leading-tight">
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
              <PrimaryBtn>Explore</PrimaryBtn>
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
      <section className="">
        <article className="py-20 flex flex-col gap-4 px-5 text-center">
          <h2 className="text-xl md:text-title lg-text-title font-bold relative">
            Your <span className="text-purple-600">portfolio</span> start here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 20"
              className="absolute top-10 sm:left-[30%] md:left-[44%] -bottom-2 w-36 h-6"
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
          <p className="text-desc text-gray-500 font-bold">
            Pick a template, customize it in minutes and launch your personal
            brand.
          </p>
        </article>
        <section className="button-container flex items-center justify-between">
          <section className="py-5 flex flex-row gap-5 justify-start">
            <SecondaryBtn className="rounded-full">Templates</SecondaryBtn>
            <SecondaryBtn className="rounded-full">Popular</SecondaryBtn>
            <SecondaryBtn className="rounded-full">Recommend</SecondaryBtn>
          </section>
          <section className="py-5 flex flex-row gap-5 justify-center">
            <label htmlFor="template-search" className="sr-only">
              
              Search templates
            </label>
            <input
              type="text"
              id="template-search"
              placeholder="Search templates..."
              className="border border-gray-300 rounded-full w-[500px] px-5 h-16"
            />
            <SecondaryBtn className="rounded-full">Favorite</SecondaryBtn>
          </section>
        </section>
      </section>
    </>
  );
};

export default Template;
