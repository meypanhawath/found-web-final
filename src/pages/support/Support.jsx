import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PrimaryBtn } from "../../components/button/Button";
import ActiveSupport from "../../assets/ActiveSupport.png";
import Logo from "../../assets/logo.svg";
import ChatBot from "../../components/chat/ChatBot";
import emailjs from "@emailjs/browser";

const Support = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitting(false);
        setFormData({ username: "", email: "", message: "" });
        alert("Message sent successfully!");
      })
      .catch(() => {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-200 via-purple-200 to-pink-100 overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
        style={{ backgroundColor: "#B9A2E6" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
        style={{ backgroundColor: "#E6B3E6" }}
      />

      <main className="max-w-screen-xl container mx-auto">
        {/* Header Section */}
        <header className="text-center mb-[80px]">
          <h1 className="text-heading md:text-heading font-title font-medium text-accent my-[5px]">
            HOW CAN WE HELP?
          </h1>
          <p className="text-[22px] text-gray-800 max-w-2xl mx-auto">
            We may already have the answer for you, <br /> check out the FAQs
            below
          </p>
        </header>

        {/* FAQ Section */}
        <section
          aria-labelledby="faq-section"
          className="max-w-9xl mx-auto space-y-4"
        >
          {faqItems.map((item) => (
            <article
              key={item.id}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
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
            </article>
          ))}
        </section>

        {/* Contact Section */}
        <section
          aria-labelledby="contact-section"
          className="text-center my-[50px]"
        >
          <h2 className="text-heading md:text-heading font-title font-medium text-accent mb-6">
            CONTACT US
          </h2>
          <p className="text-[22px] text-gray-800 max-w-2xl mx-auto mb-8">
            Still have questions? We're here to help! <br /> Get in touch with
            our support team
          </p>
          <PrimaryBtn>CHECK OUT OUR FAQs</PrimaryBtn>
        </section>

        {/* Contact Form Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center p-8 bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-300">
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <figure className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src={ActiveSupport}
                alt="Customer Support"
                className="w-full max-w-sm"
              />
            </figure>

            {/* Contact Form */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-lg bg-white bg-opacity-60 backdrop-blur-2xl rounded-2xl p-10 shadow-xl border border-white/20">
                <div className="text-center">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="w-28 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Feel Free To Share Your Concern!
                  </h3>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Username{" "}
                      <span className="text-gray-400 text-sm">(required)</span>
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter username"
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-400 focus:border-purple-600 outline-none placeholder-gray-400 text-gray-800"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email{" "}
                      <span className="text-gray-400 text-sm">(required)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-400 focus:border-purple-600 outline-none placeholder-gray-400 text-gray-800"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message{" "}
                      <span className="text-gray-400 text-sm">(required)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-400 focus:border-purple-600 outline-none placeholder-gray-400 text-gray-800 resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:scale-105 hover:shadow-lg"
                      } px-10 py-3 bg-purple-600 text-white rounded-full font-medium transition-all duration-300`}
                    >
                      {isSubmitting ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating ChatBot */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatBot />
      </div>
    </div>
  );
};

export default Support;
