import React from 'react';
 import Endy from '../assets/female-team-member.jpg';
import Yanut from '../assets/male-team-member.jpg';

const About = () => {
  return (
    <section className="py-16 px-4 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div>
            <svg className="w-8 h-8 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>

            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Who Are <span className="text-purple-600">We ?</span>
            </h1>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Modern Portfolio
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A brand new way to learn, read, play and discover the world. A technique that we have developed helps students learn 5x more quickly.
            </p>

            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold">
                Meet Our Team
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold">
                Video Demo
              </button>
            </div>
          </div>

          {/* Right Side - Images & Stats */}
          <div className="relative h-96">
            
            {/* 300+ Clients */}
            <div className="absolute top-0 left-0 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-gray-900">300+</div>
              <div className="text-gray-600">Clients</div>
            </div>

            {/* Female Team Member */}
            <div className="absolute top-16 left-8 w-40 h-48 bg-white rounded-xl shadow-lg overflow-hidden">
              {<img src={femaleTeamMember} alt="Team Member" className="w-full h-full object-cover" /> }
              <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Male Team Member */}
            <div className="absolute top-32 right-8 w-40 h-48 bg-white rounded-xl shadow-lg overflow-hidden">
              { <img src={maleTeamMember} alt="Team Member" className="w-full h-full object-cover" /> }
              <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* 15+ Templates */}
            <div className="absolute bottom-0 right-0 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-500">15+</div>
              <div className="text-gray-600">Templates</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;