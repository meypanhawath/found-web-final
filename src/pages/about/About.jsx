import React from "react";
import Endy from "../../assets/Endy.png";
import cher from "../../assets/cher.png";
import teacher from "../../assets/teacher.jpg";
import Yanut from "../../assets/Yanut.png";
import Navbar from "../../components/navbar/Navbar";
import Pencil from "../../assets/pencil.svg";
import { faClock,faCamera, faEnvelope, faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faGithub,faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CrevoFooter from "../../components/footer/Footer";

const ProfileCard = ({ person, isLarge = false }) => (
  <div
    className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
      isLarge ? "w-64" : "w-56"
    }`}
  >
    <div className={`${isLarge ? "h-72" : "h-64"} overflow-hidden`}>
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3
        className={`font-bold text-gray-800 ${
          isLarge ? "text-lg" : "text-base"
        } mb-1`}
      >
        {person.name}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{person.role}</p>

      <div className="flex items-center text-gray-500 text-xs mb-3">
      </div>

      <div className="flex space-x-3 justify-center ">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
          <FontAwesomeIcon icon={faGithub} className="text-purple-600 text-sm" />

        </div>
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
          <FontAwesomeIcon icon={faTelegram} className="text-purple-600 text-sm" />
        </div>
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
          <FontAwesomeIcon icon={faFacebook} className="text-purple-600 text-sm" />
        </div>
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
          <FontAwesomeIcon icon={faEnvelope} className="text-purple-600 text-sm" />
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const mentors = [
    {
      name: "Eung Lyzhia",
      role: "Mentor",
      image: teacher,
    
    },
    {
      name: "Sreng Chipor",
      role: "Mentor",
      image: cher,
     
    },
  ];

  const teamMembers = [
    {
      name: "Mey Panhawath",
      role: "Frontend ",
      image: "/api/placeholder/200/250",
    
    },
    {
      name: "Theoun Seyha",
      role: "Frontend, UX/UI",
      image: "/api/placeholder/200/250",
    
    },
    {
      name: "Svay Sereyratana",
      role: "Frontend, UX/UI",
      image: "/api/placeholder/200/250",
    
    },
    {
      name: "Moung Meyneang",
      role: "Frontend, UX/UI",
      image: "/api/placeholder/200/250",

    },
    {
      name: "Hiem Sreynit",
      role: "Frontend, Ux/UI",
      image: "/api/placeholder/200/250",
     
    },
    {
      name: "Seong Yanut",
      role: "Frontend, Ux/UI",
      image: "/api/placeholder/200/250",
    
    },
  ];

  return (
    <>
      <Navbar />

      {/* Who Are We Section */}
      <section className=" px-4 py-16">
        <div className="max-w-screen-xl container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={Pencil} alt="Pencil image" />
              <h1 className="text-heading font-heading text-accent mb-4">
                Who Are <span className="text-purple-800">We ?</span>
              </h1>
              <h2 className="text-3xl font-bold text-accent mb-6">
                Modern Portfolio
              </h2>
              <p className="text-lg text-accent mb-8 max-w-lg text-gray-500">
                A brand new way to learn, read, play and discover the world. A
                technique that we have developed helps students learn 5x more
                quickly.
              </p>

              <div className="flex gap-4">
                <button className="bg-purple-600 text-white text-xl px-6 py-2 rounded-tl-2xl rounded-sm hover:bg-purple-700 transition-colors">
                  Meet Our Team
                </button>
                <button className="border-2 border-purple/50 text-purple-700 text-xl rounded-br-2xl rounded-sm hover:bg-white/10 px-8 py-4 font-semibold transition-colors">
                  Video Demo
                </button>
              </div>
            </div>

            {/* Team images showcase */}
            <div className="relative h-[500px] w-full">
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

              <div className="absolute top-24 right-20 w-55 h-150 bg-white/20 backdrop-blur-sm rounded-full shadow-xl overflow-hidden z-20 transform border-4 border-white/30">
                <img
                  src={Endy}
                  alt="Male Team Member"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute bottom-16 right-4 bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg z-30 border border-white/30">
                <div className="text-2xl font-bold text-pink-300">15+</div>
                <div className="text-sm text-white/80">Templates</div>
              </div>

              <div className="absolute top-4 right-16 w-32 h-32 bg-white/20 rounded-full opacity-40 z-10 blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-28 h-28 bg-white/15 rounded-full opacity-40 z-10 blur-xl"></div>
              <div className="absolute top-32 left-2 w-20 h-20 bg-white/10 rounded-full opacity-30 z-10 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 mt-50">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 bg-yellow-200 w-24 "></div>
              <div className="flex mx-4 space-x-2 ">
                <div className="w-4 h-4 bg-yellow-200 rotate-45"></div>
                <div className="w-4 h-4 bg-yellow-200 rotate-45"></div>
                <div className="w-4 h-4 bg-yellow-200 rotate-45"></div>
              </div>
              <div className="h-0.5 bg-yellow-200 w-24"></div>
            </div>
            <h2 className="text-6xl font-heading text-black mb-4">
              Our Mission
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-0.5 bg-yellow-200 w-24"></div>
              <div className="flex mx-4 space-x-2">
                <div className="w-4 h-4 bg-yellow-200 rotate-45"></div>
                <div className="w-4 h-4 bg-yellow-200 rotate-45"></div>
                <div className="w-4 h-4 bg-yellow-200 rotate-45"></div>
              </div>
              <div className="h-0.5 bg-yellow-200 w-24"></div>
            </div>
          </div>

          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mb-12 lg:mb-0">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-full relative overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-20 left-16">
                  <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-white opacity-90 transform rotate-45"></div>
                </div>
                <div className="absolute top-32 right-20 w-4 h-4 bg-white opacity-70 transform rotate-12"></div>
                <div className="absolute top-40 right-32 w-3 h-3 bg-white opacity-60 transform rotate-45"></div>
                <div className="absolute bottom-32 left-20 w-5 h-5 bg-white opacity-50 transform -rotate-12"></div>
                <div className="absolute bottom-40 left-32 w-2 h-2 bg-white opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full h-20">
                  <div className="absolute bottom-0 left-8 w-16 h-8 bg-white opacity-80 rounded-full"></div>
                  <div className="absolute bottom-2 left-12 w-12 h-6 bg-white opacity-60 rounded-full"></div>
                  <div className="absolute bottom-0 right-12 w-20 h-10 bg-white opacity-70 rounded-full"></div>
                  <div className="absolute bottom-3 right-16 w-8 h-4 bg-white opacity-50 rounded-full"></div>
                </div>
              </div>

              {/* Floating Icons with FontAwesome */}
              <div className="absolute -top-4 right-8 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <FontAwesomeIcon icon={faCamera} className="text-white text-xl" />
              </div>
              <div className="absolute top-32 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <FontAwesomeIcon icon={faPaintBrush} className="text-white text-xl" />
              </div>
              <div className="absolute bottom-8 -left-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
              </div>
            </div>

            <div className="flex-1 lg:ml-16 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Empower Creativity
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Make it easy for anyone—creatives, professionals, or
                freelancers—to showcase their work beautifully without needing
                design or coding skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor + Team Crevo Section */}
      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-gray-800 mb-8  ">OUR MENTOR</h2>
            <div className="flex justify-center gap-8 flex-wrap text-left">
              {mentors.map((mentor, index) => (
                <ProfileCard key={index} person={mentor} isLarge={true} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-heading text-gray-800 mb-8">Team Crevo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center text-left">
              {teamMembers.map((member, index) => (
                <ProfileCard key={index} person={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CrevoFooter />
    </>
  );
};

export default About;
