import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import gta from "../../assets/GTA.png";
import discord from "../../assets/Discord.png";
import spotify from "../../assets/Spotify.png";

const Template2 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-gray-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <div className="flex justify-start text-xl font-bold">Portfolio</div>
          <div className="flex justify-end items-center space-x-4">
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Project
            </button>
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              About
            </button>
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Contact
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Hire
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-[100px] my-[50px]">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black rounded-2xl mb-20">
          <div className="relative z-10 text-center">
            <h1 className="text-7xl md:text-9xl text-white font-bold mb-4 tracking-tight">
              Mey Panhawath
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              From GTA VI-inspired projects to Discord and Spotify clones, I
              bring ambitious ideas to life with clean, powerful code.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="max-w-7xl">
            <h2 className="text-4xl font-bold my-[40px]">My Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[25px]">
              {/* Project 1 - GTA VI */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-64">
                  <img
                    src={gta}
                    alt="GTA VI Project Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    2020-Present: GTA VI
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An ambitious gaming project inspired by the GTA series,
                    featuring open-world mechanics and immersive gameplay.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      Unity
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      C#
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>

              {/* Project 2 - Discord */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-64">
                  <img
                    src={discord}
                    alt="Discord Clone Project Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    2018: Discord Clone
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A real-time chat application replicating Discord's core
                    features with modern web technologies.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      Socket.io
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>

              {/* Project 3 - Spotify */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-64">
                  <img
                    src={spotify}
                    alt="Spotify Clone Project Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    2019: Spotify Clone
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A music streaming application with playlist management and
                    audio playback capabilities.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      Express
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                      Web Audio API
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>

              {/* Project 4 - E-Commerce Platform */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-64">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=550&h=300&fit=crop&crop=center"
                    alt="E-Commerce Platform Project Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    2021: E-Commerce Platform
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A full-featured e-commerce platform with payment
                    integration, inventory management, and admin dashboard.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      Stripe
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                      MongoDB
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>

              {/* Project 5 - Task Management App */}
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-64">
                  <img
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=550&h=300&fit=crop&crop=center"
                    alt="Task Management App Project Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    2022: Task Management App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A collaborative project management tool with kanban boards,
                    team chat, and time tracking features.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      Vue.js
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      Laravel
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                      MySQL
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-gray-900/50 rounded-2xl mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Code Terminal */}
              <div className="order-2 lg:order-1">
                <div className="bg-black rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-gray-400 text-sm">
                        portfolio.js
                      </span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="text-gray-500">// Developer Profile</div>
                    <div className="text-purple-400 mt-2">
                      const <span className="text-blue-400">developer</span> ={" "}
                      {`{`}
                    </div>
                    <div className="ml-4 text-emerald-400">
                      name:{" "}
                      <span className="text-amber-400">"Mey Panhawath"</span>,
                    </div>
                    <div className="ml-4 text-emerald-400">
                      role:{" "}
                      <span className="text-amber-400">
                        "Full Stack Developer"
                      </span>
                      ,
                    </div>
                    <div className="ml-4 text-emerald-400">
                      location:{" "}
                      <span className="text-amber-400">"Cambodia"</span>,
                    </div>
                    <div className="ml-4 text-emerald-400">skills: [</div>
                    <div className="ml-8 text-amber-400">
                      "React", "Node.js", "Python",
                    </div>
                    <div className="ml-8 text-amber-400">
                      "TypeScript", "MongoDB", "AWS"
                    </div>
                    <div className="ml-4 text-emerald-400">],</div>
                    <div className="ml-4 text-emerald-400">
                      passion:{" "}
                      <span className="text-amber-400">
                        "Building amazing experiences"
                      </span>
                    </div>
                    <div className="text-purple-400">{`};`}</div>
                    <div className="mt-4 text-gray-500">
                      // Always learning, always growing
                    </div>
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-5xl font-bold mb-8 text-white">About Me</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer who loves turning
                    complex problems into simple, beautiful and intuitive
                    designs. When I'm not pushing pixels, you'll find me
                    cooking, gardening or working out in the park.
                  </p>
                  <p>
                    My experience spans across modern web technologies, from
                    crafting pixel-perfect user interfaces to building robust
                    backend systems. I believe in writing clean, maintainable
                    code and creating experiences that users love.
                  </p>
                  <p>
                    I'm always excited about new challenges and opportunities to
                    grow. Whether it's learning a new framework or collaborating
                    on innovative projects, I bring dedication and creativity to
                    everything I do.
                  </p>
                </div>

                <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">Panhawath</h3>
              <p className="text-gray-400 max-w-md">
                Full Stack Developer passionate about creating exceptional
                digital experiences through innovative design and clean code.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Navigation</h4>
              <nav className="space-y-3">
                <div>
                  <a
                    href="#home"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    href="#projects"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </div>
                <div>
                  <a
                    href="#about"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="#contact"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Connect</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-gray-500" />
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-gray-500" />
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2024 Mey Panhawath. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Template2;
