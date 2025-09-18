import React from "react";
// import upperImg from '../../assets/upperImg.png'
import Navbar from "../../components/navbar/Navbar";
import homeSection2 from "../../assets/homeSection2.png";
import sampleHomeHero from "../../assets/sampleHomeHero.png";
import templateSectionBG from "../../assets/home-template-section-bg.png";
import templateSection1 from "../../assets/home-template-section1.png";
import templateSection2 from "../../assets/home-template-section2.png";
import templateSection3 from "../../assets/home-template-section3.png";
import homePreview1 from "../../assets/homePreview1.png";
import homePreview2 from "../../assets/homePreview2.png";
import homePreview3 from "../../assets/homePreview3.png";
import chooseIcon from "../../assets/choose-icon.png";
import selectIcon from "../../assets/select-icon.png";
import customizeIcon from "../../assets/customize-icon.png";
import yellowStar from "../../assets/home-yellow-star.png";
import homeSection5 from "../../assets/home-section5-bg.png";
// import sampleImg from '../../assets/Endy.png'

import "../../App.css";
import GlassCard from "../../components/glass/GlassCard";
import GlassBG from "../../components/glass/GlassBG";
import Test from "../../components/glass/Test";
import { PrimaryBtn, SecondaryBtn } from "../../components/button/Button";

import Circle from "../../components/decoration/circle/Circle";
// import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      {/* <video autoPlay loop muted className='absolute w-full h-full object-cover z-1'>
      <source src={sampleVid} type="video/mp4" />
    </video> */}
      <img
        className="absolute z-10 w-full h-[100vh]"
        src={sampleHomeHero}
        alt=""
      />

      {/* Hero section */}
      <section className="h-[100vh] pt-30 relative overflow-hidden">
        {/* Background with blur */}
        <div className="absolute inset-0 -z-10"></div>

        {/* Content without blur */}
        <div className="relative z-10">
          {/* <img className='absolute -top-10 w-full -z-1 blur-2xl' src={upperImg} alt="" /> */}

          <GlassCard
            width="w-full"
            height="h-[65vh]"
            className="max-w-screen-xl container relative mx-auto grid grid-cols-[2fr_1fr] bg-white/20 backdrop:blur-xl gap-10 items-center mt-[5%] py-20 px-10 rounded-2xl shadow-2xl "
          >
            <div>
              <h1 className="text-heading font-heading text-neutral-600">
                Build Your Professional{" "}
                <span className="text-primary">Portfolio</span> in Minutes{" "}
              </h1>
              <p className="text-desc font-desc my-desc">
                Crevo is redefining website design—its intuitive interface lets
                you create, manage, and customize your site with ease.
              </p>
              <div className="flex gap-5">
                <PrimaryBtn>Get started</PrimaryBtn>
                <SecondaryBtn>Test 1</SecondaryBtn>
              </div>
            </div>
            <div className="">
              {/* <Test animation='animate-circle1'/> */}
              {/* <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:0s]' />
        <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:2s]' />
        <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:4s]' />
        <GlassCard width='w-25' height='h-25' className='absolute top-40 left-[75%]' animation='animate-circle1' delay='[animation-delay:6s]' /> */}
              {/* <GlassCard width='w-25' height='h-25' position='absolute' top='top-50' left='left-10' /> */}
              {/* <div className='w-50 h-50 backdrop-blur-xl bg-white/10 border border-white/20 transition-all hover:scale-105 hover:shadow-[inset_120px_0_0_0_#50299B] duration-500'></div> */}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Section 1 */}
      <section className="h-[100vh] relative">
        <div className="max-w-screen-xl container mx-auto">
          <img
            className="w-full pt-45"
            src={homeSection2}
            alt="home-section-2"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-[100vh] ">
        <div className="max-w-screen-xl container mx-auto mt-30">
          <h2 className="text-heading font-heading text-center">
            Dream it? Build it!
          </h2>
          <h3 className="text-3xl font-title text-center">
            Get Started in 3 Easy Steps
          </h3>
          <p className="text-desc font-desc text-center">
            Building your portfolio with Crevo is quick, simple, and
            stress-free.
          </p>
          <div className="w-full h-120 mt-10 bg-white relative">
            <img
              className="w-full h-120 absolute "
              src={templateSectionBG}
              alt=""
            />
            {/* Children of template section */}
            <div className="flex">
              <div className="bg-blue-900">
                <img
                  className="w-30 h-30 absolute top-20 left-20"
                  src={templateSection1}
                  alt=""
                />
                <GlassCard
                  width="w-40"
                  height="h-40"
                  borderRadius="rounded-full"
                  className="absolute top-35 left-35 flex flex-col p-6"
                >
                  <img className="" src={chooseIcon} alt="" />
                  <h3 className="text-xl font-title text-primary font-bold">
                    Choose
                  </h3>
                  <p className="text-sm text-center font-desc">
                    Your Favorite Template
                  </p>
                </GlassCard>
              </div>

              <div className="">
                <img
                  className="w-30 h-30 absolute top-20 left-120"
                  src={templateSection2}
                  alt=""
                />
                <GlassCard
                  width="w-40"
                  height="h-40"
                  borderRadius="rounded-full"
                  className="absolute top-35 left-135 flex flex-col p-6"
                >
                  <img className="" src={selectIcon} alt="" />
                  <h3 className="text-xl font-title text-primary font-bold">
                    Select
                  </h3>
                  <p className="text-sm text-center font-desc">
                    Your Favorite Styles
                  </p>
                </GlassCard>
              </div>

              <div className="">
                <img
                  className="w-30 h-30 absolute top-20 left-220"
                  src={templateSection3}
                  alt=""
                />
                <GlassCard
                  width="w-40"
                  height="h-40"
                  borderRadius="rounded-full"
                  className="absolute top-35 left-235 flex flex-col p-6"
                >
                  <img className="" src={customizeIcon} alt="" />
                  <h3 className="text-xl font-title text-primary font-bold">
                    Customize
                  </h3>
                  <p className="text-sm text-center font-desc">
                    Your favorite website
                  </p>
                </GlassCard>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-2xl shadow-2xl shadow-gray-400 absolute bottom-20 left-140">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-[100vh]">
        <div className="max-w-screeen-xl container mx-auto">
          <h2 className="text-heading font-heading text-center">
            Designs That Speak for You
          </h2>
          <p className="text-desc font-light mb-5 font-desc text-center">
            From bold layouts to minimal styles, find the perfect template that
            highlights your unique portfolio
          </p>
        </div>
        <div className="bg-[#CEBBF1] w-full h-[85vh] relative overflow-hidden">
          <Circle className="absolute top-60 -left-20 " />
          <Circle className="absolute -top-60 left-270 " />
          <Circle className="absolute top-20 left-460" />
          <h3 className="text-[400px] font-bg font-bold text-white/50 absolute top-20 left-20 ">
            TEMPLATE
          </h3>
          <div className="flex gap-20 justify-center mt-20">
            {/* Children of Preview  */}
            <GlassCard width="w-80" height="h-95" className="pb-5">
              <div className="w-100">
                <img className="w-100" src={homePreview1} alt="" />

                <div className="flex flex-col px-5 gap-1 pt-3 ">
                  <h3 className="text-desc font-title font-bold">
                    CLASSIC DARK MODE
                  </h3>
                  <i></i>
                  <p className="text-md font-desc ">
                    Suitable for professionals who prefer a sleek, timeless
                    look.
                  </p>

                  <div className="flex gap-3 my-2">
                    <PrimaryBtn>Edit</PrimaryBtn>
                    <SecondaryBtn>Preview</SecondaryBtn>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard width="w-120" height="h-112" className="pb-5">
              <div className="w-full">
                <img className="w-full" src={homePreview2} alt="" />

                <div className="flex flex-col px-5 gap-1 mt-3">
                  <h3 className="text-desc font-title font-bold">
                    CLASSIC DARK MODE
                  </h3>
                  <i></i>
                  <p className="text-md font-desc ">
                    Suitable for professionals who prefer a sleek, timeless
                    look.
                  </p>

                  <div className="flex gap-3 my-2">
                    <PrimaryBtn>Edit</PrimaryBtn>
                    <SecondaryBtn>Preview</SecondaryBtn>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard width="w-80" height="h-95" className="pb-5">
              <div className="w-100">
                <img className="w-100" src={homePreview3} alt="" />

                <div className="flex flex-col px-5 gap-1 mt-3">
                  <h3 className="text-desc font-title font-bold">
                    CLASSIC DARK MODE
                  </h3>
                  <i></i>
                  <p className="text-md font-desc ">
                    Suitable for professionals who prefer a sleek, timeless
                    look.
                  </p>

                  <div className="flex gap-3 my-2">
                    <PrimaryBtn>Edit</PrimaryBtn>
                    <SecondaryBtn>Preview</SecondaryBtn>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="text-center mt-20">
            <PrimaryBtn>Browse Template</PrimaryBtn>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="h-[100vh] mt-20">
        <div className="max-w-screen-xl container mx-auto">
          <h2 className="text-heading font-heading text-center mb-20">
            What We Offer
          </h2>

          <div className="grid grid-cols-[520px_520px] gap-x-20 gap-y-10 justify-center">
            <GlassCard
              width="w-130"
              height="h-40"
              className="flex flex-col p-5"
            >
              <div className="flex gap-15 justify-between w-full mb-5">
                <h3 className="text-3xl font-title font-bold">
                  Mobile responsive
                </h3>
                <img src={yellowStar} alt="" />
              </div>

              <p>
                Your website is automatically adapted on all devices, and you can decide what is visible on mobile or not.
              </p>
            </GlassCard>

            <GlassCard
              width="w-130"
              height="h-40"
              className="flex flex-col p-5"
            >
              <div className="flex gap-15 justify-between w-full mb-5">
                <h3 className="text-3xl font-title font-bold">
                  Translation
                </h3>
                <img src={yellowStar} alt="" />
              </div>

              <p>
                Install different languages and translate the content directly from any page.
              </p>
            </GlassCard>

            <GlassCard
              width="w-130"
              height="h-40"
              className="flex flex-col p-5"
            >
              <div className="flex gap-15 justify-between w-full mb-5">
                <h3 className="text-3xl font-title font-bold">
                  Free-to-use imagery
                </h3>
                <img src={yellowStar} alt="" />
              </div>

              <p>
                Discover a wide range of illustrations and high resolution photos available on the Unsplash library to prettify your website.
              </p>
            </GlassCard>

            <GlassCard
              width="w-130"
              height="h-40"
              className="flex flex-col p-5"
            >
              <div className="flex gap-15 justify-between w-full mb-5">
                <h3 className="text-3xl font-title font-bold">
                  SEO
                </h3>
                <img src={yellowStar} alt="" />
              </div>

              <p className="">
                Don't just build a website, build an audience. Our integrated SEO suite guides you to optimize every page.
              </p>
            </GlassCard>

            <GlassCard
              width="w-130"
              height="h-40"
              className="flex flex-col p-5"
            >
              <div className="flex gap-15 justify-between w-full mb-5">
                <h3 className="text-3xl font-title font-bold">
                  Shapes and animations
                </h3>
                <img src={yellowStar} alt="" />
              </div>

              <p>
                Get stunning visual effects and animate blocks, texts, and backgrounds.
              </p>
            </GlassCard>

            <GlassCard
              width="w-130"
              height="h-40"
              className="flex flex-col p-5"
            >
              <div className="flex gap-15 justify-between w-full mb-5">
                <h3 className="text-3xl font-title font-bold">
                  Analytics
                </h3>
                <img src={yellowStar} alt="" />
              </div>

              <p>
                Learn more about your visitors and act accordingly with our analytic dashboard.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Sub 1 of section 5 */}
      <section className="h-[50vh] bg-primary">
        <div className="max-w-screen-xl container mx-auto rounded-2xl">
            <h2 className="text-heading font-accent font-bold text-center pt-15 text-white">Start Your Creative Journey for Free</h2>
            <p className="text-white text-xl mt-10 leading-10 text-center">Build a stunning, professional portfolio with our powerful free plan—no credit card required and no time limit. Get access to our core features, including responsive templates and basic SEO tools, to showcase your work at absolutely zero cost. Start building your online presence today with a plan that never expires and puts no ads on your site. Launch your first website completely free, and upgrade anytime to unlock advanced features like a custom domain when you're ready to grow.</p>
        </div>

      </section>

      {/* Sub 2 of section 5 */}
      <section className="h-[70vh] mt-20">
        <div className="max-w-screen-xl container mx-auto relative">
            <img className="w-full h-full rounded-2xl" src={homeSection5} alt="" />
            <div className="w-200 h-50 bg-white rounded-2xl absolute bottom-0">Join 15 million users</div>
            <p>who grow their business with Odoo</p>
            
        </div>
      </section>

      {/* <section className="h-[100vh] bg-green-700">
        <div className="pt-20 pl-50">
          <GlassCard width="w-100" height="h-50" borderRadius="rounded-full" />
        </div>
      </section> */}

      
    </>
  );
};

export default Home;
