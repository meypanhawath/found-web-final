import React from "react";
import Endy from "../../assets/Endy.png";
import Pencil from "../../assets/pencil.svg";
import Yanut from "../../assets/Yanut.png";
import Navbar from "../../components/navbar/Navbar";
import Vision from "../../assets/vision.png";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-16">
        <div className="max-w-screen-xl container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={Pencil} alt="" />
              <h1 className="text-7xl font-heading text-accent mb-4">
                Who Are <span className="text-purple-800">We ?</span>
              </h1>

              <h2 className="text-4xl font-bold text-accent mb-6">
                Modern Portfolio
              </h2>

              <p className="text-lg text-gray-500 mb-8 max-w-lg">
                A brand new way to learn, read, play and discover the world. A
                technique that we have developed helps students learn 5x more
                quickly.
              </p>

              <div className="flex gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-heading transition-colors">
                  Meet Our Team
                </button>
                <button className="border-2 border-primary text-primary hover:bg-white/10 px-8 py-4 rounded-lg font-heading transition-colors">
                  Video Demo
                </button>
              </div>
            </div>

            <div className="relative h-[500px] w-full">
              {/* 300+ Clients */}
              <div className="absolute top-8 left-4 bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg z-30 border border-white/30">
                <div className="text-2xl font-bold text-blue-300">300+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>

              <div className="absolute top-16 left-20 w-55 h-150 bg-white/20 backdrop-blur-sm rounded-full shadow-xl overflow-hidden z-20 transform border-4 border-white/30">
                <img
                  src={Yanut}
                  alt="Female Team Member"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Second Team Member Image */}
              <div className="absolute top-24 right-20 w-55 h-150 bg-white/20 backdrop-blur-sm rounded-full shadow-xl overflow-hidden z-20 transform border-4 border-white/30">
                <img
                  src={Endy}
                  alt="Male Team Member"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* 15+ Templates */}
              <div className="absolute bottom-16 right-4 bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg z-30 border border-white/30">
                <div className="text-2xl font-bold text-pink-400">15+</div>
                <div className="text-sm text-gray-600">Templates</div>
              </div>

              {/* Background decorative circles */}
              <div className="absolute top-4 right-16 w-32 h-32 bg-white/20 rounded-full opacity-40 z-10 blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-28 h-28 bg-white/15 rounded-full opacity-40 z-10 blur-xl"></div>
              <div className="absolute top-32 left-2 w-20 h-20 bg-white/10 rounded-full opacity-30 z-10 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
          <div>
          <img src={Vision} alt="" />
             {/* Vision Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl font-bold text-black mb-8 italic">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Our vision is to empower individuals to showcase their skills, creativity, and 
                achievements through beautiful and professional portfolios. We believe everyone 
                deserves a space to tell their story and highlight their talents, whether they are 
                students, professionals, or creators. By providing simple, user-friendly tools, we 
                make portfolio building accessible, modern, and impactful.
              </p>
            </div>
          </div>
          

        </div>
      </section>
    </>
  );
};

export default About;
