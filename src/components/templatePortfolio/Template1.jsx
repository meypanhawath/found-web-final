import React from 'react';
import Template from '../../pages/template/Template';

const Template1 = () => {
  const experiences = [
    {
      period: "2019 - 2020",
      title: "Senior Software Developer",
      company: "Creative Developer",
      description: "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry."
    },
    {
      period: "2020 - 2022",
      title: "UI/UX Developer", 
      company: "Creative UI/UX Design",
      description: "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry."
    },
    {
      period: "2016 - 2020",
      title: "Junior Web Developer",
      company: "Web Developer", 
      description: "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry."
    },
    {
      period: "2019 - 2022",
      title: "Junior App Developer",
      company: "Application Developer",
      description: "Hello, I'm Danny, a seasoned product developer with a passion for crafting innovative solutions. I've honed my skills over years of hands-on experience in the industry."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">🎯</div>
        <div className="flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">ABOUT</a>
          <a href="#" className="hover:text-gray-900 transition-colors">EDUCATION</a>
          <a href="#" className="hover:text-gray-900 transition-colors">EXPERIENCE</a>
          <a href="#" className="hover:text-gray-900 transition-colors">PROJECTS</a>
          <a href="#" className="hover:text-gray-900 transition-colors">SKILLS</a>
          <a href="#" className="text-pink-400">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section / About */}
      <div id="about" className="flex items-center justify-between px-8 py-16">
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl font-light text-gray-800 mb-2">
            Hello,
          </h1>
          <h2 className="text-4xl font-light text-gray-800 mb-2">
            I am
          </h2>
          <h3 className="text-4xl font-bold text-purple-500 mb-6">
            Ratana
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          
          <div className="mb-8">
            <h4 className="text-2xl font-light text-gray-800">Web</h4>
            <h4 className="text-2xl font-light text-gray-800">
              <span className="text-pink-400">Developer</span>
            </h4>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 ml-8">
          <div className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              // src={profileImage} // Use this when you import your image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
              alt="Ratana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="px-8 py-16 bg-white bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>
          {/* Add your education content here */}
          <div className="text-center text-gray-600">
            <p>Education section content will go here...</p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-orange-400 text-xs font-medium">{exp.period}</span>
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
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="px-8 py-16 bg-white bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
          {/* Add your projects content here */}
          <div className="text-center text-gray-600">
            <p>Projects section content will go here...</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
          {/* Add your skills content here */}
          <div className="text-center text-gray-600">
            <p>Skills section content will go here...</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="px-8 py-16 bg-white bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact</h2>
          {/* Add your contact content here */}
          <div className="text-center text-gray-600">
            <p>Contact section content will go here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;