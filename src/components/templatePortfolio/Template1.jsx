import React from "react";
import Template from "../../pages/template/Template";
import RotanaImage from "../../assets/Rotana.png";
import {
  FaCalendarAlt,
  FaCube,
  FaRocket,
  FaShieldAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import Pic1 from "../../assets/work-image1.png";
import Pic2 from "../../assets/work-image2.png";
import Pic3 from "../../assets/work-image3.png";
import Pic4 from "../../assets/work-image4.png";
import Pic5 from "../../assets/work-image5.png";
import Pic6 from "../../assets/work-image6.png";

const Template1 = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const experiences = [
    {
      period: "2019 - 2020",
      title: "Senior Software Developer",
      company: "Creative Developer",
      description:
        "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry.",
    },
    {
      period: "2020 - 2022",
      title: "UI/UX Developer",
      company: "Creative UI/UX Design",
      description:
        "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry.",
    },
    {
      period: "2016 - 2020",
      title: "Junior Web Developer",
      company: "Web Developer",
      description:
        "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry.",
    },
    {
      period: "2019 - 2022",
      title: "Junior App Developer",
      company: "Application Developer",
      description:
        "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry.",
    },
  ];

  const stats = [
    {
      number: "21K",
      label: "project completed",
    },
    {
      number: "12+",
      label: "Years of experience",
    },
    {
      number: "14+",
      label: "Awards achievement",
    },
  ];

  const projects = [
    {
      id: 1,
      img: Pic1,
      alt: "Modern ceramic design",
    },
    {
      id: 2,
      img: Pic2,
      alt: "Mobile app interface",
    },
    {
      id: 3,
      img: Pic3,
      alt: "Orange design objects",
    },
    {
      id: 4,
      img: Pic4,
      alt: "Geometric sculptures",
    },
    {
      id: 5,
      img: Pic5,
      alt: "Kitchen ceramics",
    },
    {
      id: 6,
      img: Pic6,
      alt: "Minimalist design",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-6 bg-transparent z-50">
        <div className="text-2xl font-bold">🎯</div>
        <div className="flex space-x-8 text-sm font-medium text-gray-600">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            EDUCATION
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* Hero Section / About */}
      <div id="about" className="px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-16">
          {/* Left Content - 3 Sections */}
          <div className="flex-1">
            {/* Section 1: Main Heading - Left Aligned */}
            <div className="mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2 text-left">
                Hello,
              </h1>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2 text-left">
                I am
              </h2>
              <h3 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-4 text-left">
                Ratana
              </h3>
            </div>

            {/* Section 2: Description - Center Aligned */}
            <div className="mb-12 text-center">
              <p className="text-gray-600 text-base leading-relaxed mx-auto max-w-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            {/* Section 3: Job Title - Right Aligned */}
            <div className="mb-8 text-right">
              <h4 className="text-4xl font-light text-gray-700 leading-tight mb-1">
                Web
              </h4>
              <h4 className="text-4xl font-light text-gray-700 ">Developer</h4>
              <div className="w-[100px] h-[4px] bg-pink-400 ml-auto rounded-sm mb-3"></div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-80 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={RotanaImage}
                alt="Ratana"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Education
          </h2>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {/* Education 1 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-orange-400 text-sm font-medium">
                        2018 - 2022
                      </span>
                      <FaCalendarAlt className="w-3 h-3 ml-3 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Bachelor of Computer Science
                    </h3>
                    <p className="text-gray-600 font-medium mb-3">
                      Royal University of Phnom Penh
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Focused on software development, web technologies, and
                      database management. Graduated with honors and completed a
                      capstone project on modern web applications.
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-orange-400 rounded-full border-4 border-white shadow-md z-10"></div>

                <div className="w-5/12"></div>
              </div>

              {/* Education 2 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-orange-400 rounded-full border-4 border-white shadow-md z-10"></div>

                <div className="w-5/12 text-left pl-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <FaCalendarAlt className="w-3 h-3 mr-3 text-orange-400" />
                      <span className="text-orange-400 text-sm font-medium">
                        2022 - 2023
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Full Stack Development Bootcamp
                    </h3>
                    <p className="text-gray-600 font-medium mb-3">
                      Institute of Science and Technology Advanced Development
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Intensive 12-month program covering React, Node.js,
                      MongoDB, and modern web development practices. Built 10+
                      real-world projects and collaborated in team environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education 3 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-orange-400 text-sm font-medium">
                        2023 - Present
                      </span>
                      <FaCalendarAlt className="w-3 h-3 ml-3 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      AWS Cloud Certification
                    </h3>
                    <p className="text-gray-600 font-medium mb-3">
                      Amazon Web Services
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Currently pursuing AWS Solutions Architect certification
                      to expand cloud computing skills and stay current with
                      modern deployment practices.
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-orange-400 rounded-full border-4 border-white shadow-md z-10"></div>

                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="w-3 h-3 mr-3 text-orange-300" />
                  <span className="text-orange-300 text-xs font-medium">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {exp.title}
                </h3>

                <p className="text-sm font-medium text-gray-600 mb-3">
                  {exp.company}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div id="projects" className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* My Work Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Work
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            My Skill
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1 - Product Design */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <FaCube className="w-full h-full" />
              </div>
              <h4 className="text-sm text-gray-600 mb-2">Product Design</h4>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Digital Product Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating a higher spacing and how people move through a unique.
              </p>
            </div>

            {/* Skill 2 - Product Development */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <FaRocket className="w-full h-full" />
              </div>
              <h4 className="text-sm text-gray-600 mb-2">
                Product Development
              </h4>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating a higher spacing and how people move through a unique.
              </p>
            </div>

            {/* Skill 3 - Custom Services */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <FaShieldAlt className="w-full h-full" />
              </div>
              <h4 className="text-sm text-gray-600 mb-2">Custom Services</h4>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Branding & Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating a higher spacing and how people move through a unique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div>
              {/* Contact Badge */}
              <div className="inline-block mb-8">
                <span className="px-4 py-2 bg-orange-100 text-orange-600 text-sm font-medium rounded-full border border-orange-200">
                  CONTACT
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                Get In Touch
              </h2>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 mt-1">
                    <FaPhoneAlt className="w-full h-full text-orange-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">011531148</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 mt-1">
                    <FaEnvelope className="w-full h-full text-orange-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 mt-1">
                    <FaMapMarkerAlt className="w-full h-full text-orange-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Graaf Florisstraat 22A, 3021 CH
                      <br />
                      Burline, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email Address"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Your Subject"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-300 hover:bg-orange-400 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <p className="text-gray-400 leading-relaxed">
                Germany — 426 Eden Drive
                <br />
                Richmond, VA 23219
              </p>
            </div>

            {/* Say Hello */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Say Hello</h3>
              <div className="space-y-2">
                <p className="text-gray-400">hello@design.com</p>
                <p className="text-orange-300 font-medium">011531148</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Type Your Email"
                  className="flex-1 px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-400 placeholder-gray-500"
                />
                <button className="px-4 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-r-lg transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">N</span>
                </div>
                <span className="text-xl font-bold">Natia</span>
              </div>

              {/* Copyright */}
              <div className="text-gray-500 text-sm flex items-center">
                © 2025 Natia. Design with
                <FaHeart className="w-3 h-3 text-red-500 mx-1" />
                by Zoyothemes.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Template1;
