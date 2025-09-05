import { useState, useEffect } from "react";
import logo from '../../assets/logo.svg';


const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-10 left-130 w-230 z-20 transition-transform duration-800 ${
        show ? "translate-y-0" : "-translate-y-[150px]"
      }`}
    >
      <nav
        className="max-w-screen-xl mx-auto mb-20 flex items-center justify-between py-5 px-18 rounded-full 
                   bg-white/20 backdrop-blur-xl text-white shadow-lg"
      >
        <img className="w-24 transition duration-500 hover:scale-105 cursor-pointer" src={logo} alt="logo" />
        <div className="flex space-x-12 items-center">
          <h2 className="cursor-pointer text-white hover:text-primary text-xl font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">Templates</h2>
          <h2 className="cursor-pointer text-white hover:text-primary text-xl font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">About Us</h2>
          <h2 className="cursor-pointer text-white hover:text-primary text-xl font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">Support</h2>
          <button className="bg-primary text-white text-xl font-medium py-3 px-8 rounded-2xl cursor-pointer transition duration-500 hover:shadow-[inset_120px_0_0_0_#50299B]">Log in</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;