import React, { useState } from "react";
import { PrimaryBtn } from "../../components/button/Button";
import ActiveSupport from "../../assets/ActiveSupport.png";
import Logo from "../../assets/logo.svg";
import GlassBG from "../../components/glass/GlassBG";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <div className="min-h-screen flex flex-col">
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

      <div className="max-w-screen-xl container mx-auto flex-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center p-6 border border-white/40 rounded-xl shadow-xl overflow-hidden w-full max-w-6xl">
          <div className="absolute inset-0 scale-75 opacity-60 h-[500px] w-[800px]">
            <GlassBG />
          </div>

          <div className="relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* LEFT SIDE - Image */}
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

                <div className="relative z-10 w-[420px]">
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
                    {/* Username */}
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

                    {/* Email */}
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

                    {/* Message */}
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

                    {/* Submit */}
                    <div className="text-center pb-2">
                      <PrimaryBtn type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send"}
                      </PrimaryBtn>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
