import React from "react";
import ChatBot from "../../components/chat/ChatBot";

const Home = () => {
  return (
    <>
      <section className="max-w-screen-xl container mx-auto grid grid-cols-[1.5fr_1fr]">
        <div>
          <h1 className="text-heading font-heading my-title leading-heading">
            Build Your Professional Portfolio in Minutes
          </h1>
          <p className="font-desc text-desc">
            Crevo is redefining website design—its intuitive interface lets you
            create, manage, and customize your site with ease.
          </p>
          {/* Optionally, you can add login/register CTA here if needed */}
        </div>
        {/* You can add an image or illustration in the second column if you want */}
        <div>
          {/* Example placeholder */}
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Portfolio Illustration"
            className="w-full h-auto"
          />
        </div>
      </section>
      {/* Floating ChatBot in bottom right */}
      <div className="fixed bottom-6 right-6 z-50 shadow-2xl">
        <ChatBot />
      </div>
    </>
  );
};

export default Home;
