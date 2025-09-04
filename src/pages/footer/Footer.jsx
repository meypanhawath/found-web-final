
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 via-pink-50 to-pink-200 px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Crevo</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Crevo is an online tool that helps users easily create and customize professional portfolios to showcase their skills, projects, and experience without needing coding knowledge.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
          
          {/* Template Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Template</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Login
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Sign Up
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Login
              </a>
            </div>
          </div>
          
          {/* About Us Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About Us</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Legal Notice
              </a>
            </div>
          </div>
          
          {/* Support Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Legal Notice
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center border-t border-gray-300 pt-6">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 Crevo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
