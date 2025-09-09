import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Navbar from "../../components/navbar/Navbar";
import { PrimaryBtn } from "../../components/button/Button";
import ActiveSupport from "../../assets/ActiveSupport.png";
import GlassBG from "../../components/glass/GlassBG";
import Logo from "../../assets/logo.svg";
const Support = () => {
  const [openItems, setOpenItems] = useState(new Set());
 const [formData, setFormData] = useState({
  username: '',
  email: '',
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ data array
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
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submitted:", formData);

    setTimeout(() => {
    
      setIsSubmitting(false);
      setFormData({ username: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 2000);
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-purple-200 via-purple-200 to-pink-100 overflow-hidden">
        <div
          className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
          style={{ backgroundColor: "#B9A2E6" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
          style={{ backgroundColor: "#E6B3E6" }}
        ></div>

        {/* Navigation */}
        <Navbar />
        {/* Main Content */}
        <main className="max-w-screen-xl container mx-auto">
          {/* FAQ Section Header */}
          <div className="text-center mb-[80px]">
            <h1 className="text-heading md:text-heading font-title font-medium text-accent my-[5px]">
              HOW CAN WE HELP?
            </h1>
            <p className="text-[22px] text-gray-800 max-w-2xl mx-auto">
              We may already have the answer for you,
              <br />
              check out the FAQs below
            </p>
          </div>

          {/* FAQ Section */}
          <div className="max-w-9xl mx-auto space-y-4 ">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-7 border-primary"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-50 rounded-2xl transition-all duration-200"
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

                {/* Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(item.id)
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center my-[50px]">
            <h1 className="text-heading md:text-heading font-title font-medium text-accent mb-6">
              CONTACT US
            </h1>
            <p className="text-[22px] text-gray-800 max-w-2xl mx-auto mb-8">
              Still have questions? We're here to help!
              <br />
              Get in touch with our support team
            </p>
            <PrimaryBtn>CHECK OUT OUR FAQs</PrimaryBtn>
          </div>

          {/* Contact Form Section */}
          <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
            <div className="w-full max-w-7xl mx-auto">
              {/* Grid Layout: Image Left, Form Right */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* LEFT SIDE - Support Image */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="relative">
                    <img
                      src={ActiveSupport}
                      alt="Active Support - Customer service representative"
                      className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white border-opacity-20 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE - Contact Form */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                  <div className="w-[700px] h-auto">
                    {/* Contact Form Card */}
                    <div className="bg- bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white border-opacity-20">
                      {/* Form Header Section */}
                      <div className="text-center ">
                        <div className="w-[150px] h-[90px] mx-auto my-[5px]">
                          <img
                            src={Logo}
                            alt="Active Support - Customer service representative"
                            className="w-full max-w-md rounded-3xl"
                          />
                        </div>

                        <h2 className="text-[22px] font-disc text-accent leading-tight my-[20px] drop-shadow-lg">
                          Feel Free To Share Your Concern!
                        </h2>
                      </div>

                      {/* Contact Form */}
                      <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Username Input Field */}
                        <div>
                          <label
                            htmlFor="username"
                            className="block text-gray-700 font-disc mb-3 text-disc tracking-wider"
                          >
                            Username{" "}
                            <span className="text-gray-500 text-opacity-60">
                              (required)
                            </span>
                          </label>
                          <input
                            id="username"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-400 border-opacity-30 focus:outline-none focus:border-white focus:border-opacity-80 placeholder-white placeholder-opacity-50 text-white text-lg transition-all duration-300"
                            required
                            autoComplete="username"
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* Email Input Field */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-white font-medium mb-3 text-sm uppercase tracking-wider"
                          >
                            Email{" "}
                            <span className="text-white text-opacity-60">
                              (required)
                            </span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white border-opacity-30 focus:outline-none focus:border-white focus:border-opacity-80 placeholder-white placeholder-opacity-50 text-white text-lg transition-all duration-300"
                            required
                            autoComplete="email"
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* Message Textarea Field */}
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-white font-medium mb-3 text-sm uppercase tracking-wider"
                          >
                            Message{" "}
                            <span className="text-white text-opacity-60">
                              (required)
                            </span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share your thoughts..."
                            rows={4}
                            className="w-full px-6 py-4 bg-white bg-opacity-10 border-2 border-white border-opacity-20 rounded-2xl focus:outline-none focus:border-white focus:border-opacity-50 focus:bg-opacity-15 placeholder-white placeholder-opacity-50 text-white resize-none transition-all duration-300 backdrop-blur-sm"
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-6">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${
                              isSubmitting
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            } bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-16 rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 hover:scale-105 border border-white border-opacity-20`}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Support;
