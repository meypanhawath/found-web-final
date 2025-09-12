import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PrimaryBtn } from "../../components/button/Button";
import ActiveSupport from "../../assets/ActiveSupport.png";
import Logo from "../../assets/logo.svg";
import ChatBot from "../../components/chat/ChatBot";
import GlassBG from "../../components/glass/GlassBG";
import Footer from "../../components/footer/Footer"; // ✅ make sure this exists
import Contact from "./Contact";

const Support = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqItems = [
    {
      id: 1,
      question: "What is Crevo and do I need coding to use it?",
      answer:
        "Crevo provides modern website templates that are easy to use. No coding is required, but you can customize further with HTML, CSS, or JavaScript if you want.",
    },
    {
      id: 2,
      question: "Do I need a website builder with Crevo templates?",
      answer:
        "Not always. You can use Crevo templates directly or with popular builders like WordPress, Webflow, or Wix for easier editing.",
    },
    {
      id: 3,
      question: "Do I need a domain and hosting?",
      answer:
        "Yes, if you want a professional site (e.g., www.mybusiness.com). Many builders let you connect your domain easily.",
    },
    {
      id: 4,
      question: "Can I customize the design of my template?",
      answer:
        "Yes. You can change colors, fonts, images, and layouts. All Crevo templates are responsive, so your site will look great on desktop and mobile.",
    },
    {
      id: 5,
      question: "What if I need help setting up my website?",
      answer:
        "Every template comes with documentation. If you need more support, our team is ready to assist you through the Contact page.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-200 via-purple-200 to-pink-100 overflow-hidden">
      {/* FAQ Section */}
      <div className="max-w-9xl mx-auto space-y-4 my-[20px]">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-8 border-primary"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-50 rounded-2xl transition-all duration-200"
              aria-expanded={openItems.has(item.id)}
            >
              <span className="text-lg font-medium text-gray-800 pr-4">
                {item.question}
              </span>
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-purple-200">
                {openItems.has(item.id) ? (
                  <Minus className="w-4 h-4 text-purple-600" />
                ) : (
                  <Plus className="w-4 h-4 text-purple-600" />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(item.id)
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-8 pb-6 pt-2">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Support;
