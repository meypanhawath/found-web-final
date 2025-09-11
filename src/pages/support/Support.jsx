import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PrimaryBtn } from "../../components/button/Button";
import ActiveSupport from "../../assets/ActiveSupport.png";
import GlassBG from "../../components/glass/GlassBG";
import Logo from "../../assets/logo.svg";
import Footer from "../../components/footer/Footer";
const Support = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
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
     

        {/* Main Content */}
        <main className="max-w-screen-xl container mx-auto">
          {/* FAQ Section Header */}
          <div className="text-center">
            <h1 className="text-heading md:text-heading font-title font-medium text-accent my-[50px]">
              HOW CAN WE HELP?
            </h1>
            <p className="text-[22px] text-gray-800 max-w-2xl mx-auto my-[45px]">
              We may already have the answer for you,
              <br />
              check out the FAQs below
            </p>
          </div>
          {/* FAQ Section */}
          <div className="max-w-9xl mx-auto space-y-4 my-[20px]">
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
          <div className="min-h-screen flex flex-col">
            {/* Header Section - Compact */}
            <div className="text-center py-6 ">
              <h1 className="text-3xl md:text-4xl font-title font-medium text-accent mb-3">
                CONTACT US
              </h1>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-4">
                Still have questions? We're here to help!
                <br />
                Get in touch with our support team
              </p>
              <PrimaryBtn>CHECK OUT OUR FAQs</PrimaryBtn>
            </div>

            {/* Main Contact Section */}
            <div className="max-w-screen-xl container mx-auto flex-1 flex items-center justify-center">
              <div className="relative flex items-center justify-center p-6 border border-white/40 rounded-xl shadow-xl overflow-hidden w-full max-w-6xl">
                <div className="absolute inset-0 scale-75 opacity-60 h-[500px] w-[800px]">
                  <GlassBG />
                </div>

                <div className="relative z-10 w-full">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                      <div className="w-[450px] h-[380px]">
                        <img
                          src={ActiveSupport}
                          alt="Active Support - Customer service representative"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* RIGHT SIDE - Contact Form */}
                    <div className="relative flex items-center justify-center border border-white/40 rounded-xl shadow-xl overflow-hidden order-1 lg:order-2">
                      <div className="absolute inset-0 scale-90 opacity-60">
                        <GlassBG />
                      </div>

                      {/* Form content with relative positioning */}
                      <div className="relative z-10 w-[420px]">
                        {/* Form Header Section */}
                        <div className="text-center mb-8">
                          <div className="w-[90px] h-[54px] mx-auto mb-4">
                            <img
                              src={Logo}
                              alt="Logo"
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <h2 className="text-2xl font-disc text-gray-800 leading-tight drop-shadow-lg">
                            Feel Free To Share Your Concern!
                          </h2>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                          {/* Username Input Field */}
                          <div>
                            <label
                              htmlFor="username"
                              className="block text-gray-700 font-disc mb-2 text-base tracking-wider"
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
                              className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-400/30 focus:outline-none focus:border-gray-400/80 placeholder-gray-400/50 text-gray-700 text-base transition-all duration-300"
                              required
                              autoComplete="username"
                              disabled={isSubmitting}
                            />
                          </div>

                          {/* Email Input Field */}
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-gray-700 font-disc mb-2 text-base tracking-wider"
                            >
                              Email{" "}
                              <span className="text-gray-500 text-opacity-60">
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
                              className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-400/30 focus:outline-none focus:border-gray-400/80 placeholder-gray-400 text-gray-700 text-base transition-all duration-300"
                              required
                              autoComplete="email"
                              disabled={isSubmitting}
                            />
                          </div>

                          {/* Message Textarea Field */}
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-gray-700 font-disc text-base tracking-wider"
                            >
                              Message{" "}
                              <span className="text-gray-500 text-opacity-60">
                                (required)
                              </span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Message"
                              rows={4}
                              className="w-full mt-2 px-4 py-3 backdrop-blur-sm bg-white/10 border-2 border-gray-400/20 rounded-xl focus:outline-none focus:border-gray-400/50 focus:bg-white/15 placeholder-gray-400/50 text-gray-700 text-base resize-none transition-all duration-300"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          {/* Submit Button */}
                          <div className="text-center pb-2">
                            <PrimaryBtn>Send</PrimaryBtn>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Support;
