import React from "react";
import Endy from "../../assets/Endy.png";
import Yanut from "../../assets/Yanut.png";
import Navbar from "../../components/navbar/Navbar";
import Pencil from "../../assets/pencil.svg";

const About = () => {
  return (
    <>
      <Navbar />
      <section className=" px-4 py-16">
        <div className="max-w-screen-xl container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={Pencil} alt="Pencil image" />
              <h1 className="text-heading font-heading text-accent mb-4">
                Who Are <span className="text-purple-800">We ?</span>
              </h1>

              <h2 className="text-title font-bold text-accent mb-6">
                Modern Portfolio
              </h2>

              <p className="text-lg text-accent mb-8 max-w-lg">
                A brand new way to learn, read, play and discover the world. A
                technique that we have developed helps students learn 5x more
                quickly.
              </p>

              <div className="flex gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Meet Our Team
                </button>
                <button className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Video Demo
                </button>
              </div>
            </div>

            <div className="relative h-[500px] w-full">
              {/* 300+ Clients */}
              <div className="absolute top-8 left-4 bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg z-30 border border-white/30">
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-sm text-white/80">Clients</div>
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
                <div className="text-2xl font-bold text-pink-300">15+</div>
                <div className="text-sm text-white/80">Templates</div>
              </div>

              {/* Background decorative circles */}
              <div className="absolute top-4 right-16 w-32 h-32 bg-white/20 rounded-full opacity-40 z-10 blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-28 h-28 bg-white/15 rounded-full opacity-40 z-10 blur-xl"></div>
              <div className="absolute top-32 left-2 w-20 h-20 bg-white/10 rounded-full opacity-30 z-10 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
