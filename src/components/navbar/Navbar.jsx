import { useState, useEffect } from "react";
import logo from '../../assets/logo.svg';
import DarkMode from "../darkMode/DarkMode";
import { Menu, X } from 'lucide-react'; // You'll need to install lucide-react or use any hamburger icon
import GlassCard from "../glass/GlassCard";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-transparent">
      {/* Desktop Navbar */}
      <nav
        className={`my-4 md:my-10 sticky top-4 md:top-20 mx-auto w-full z-20 px-4 md:px-30 transition-transform duration-800 ${
          show ? "translate-y-0" : "-translate-y-[150px]"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div
            className="w-200 h-20 max-w-7xl grid grid-cols-[1fr_5fr_0.3fr_1.3fr] gap-x-5 mx-auto items-center py-2 px-5 rounded-full
                       backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-xl transition-all duration-500"
          >
            <img className="w-20 xl:w-24 transition duration-500 hover:scale-105 cursor-pointer" src={logo} alt="logo" />
            <div className="flex text-center gap-6 xl:gap-10 items-center justify-center">
              <h2 className="cursor-pointer text-primary hover:text-primary text-sm font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">Templates</h2>
              <h2 className="cursor-pointer text-primary hover:text-primary text-sm font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">About Us</h2>
              <h2 className="cursor-pointer text-primary hover:text-primary text-sm font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">Support</h2>
            </div>
            <DarkMode />
            <GlassCard width="w-full" height="h-10">
              <span className="text-primary font-medium">Log in</span>
            </GlassCard>
            {/* <button className="bg-primary text-white text-sm font-medium py-3 px-6 xl:px-8 rounded-2xl cursor-pointer transition duration-500 hover:shadow-[inset_120px_0_0_0_#50299B]">Log in</button> */}
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:block lg:hidden">
          <div
            className="w-full max-w-4xl flex items-center justify-between mx-auto py-3 px-6 rounded-full
                       backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-xl transition-all duration-500"
          >
            <img className="w-16 transition duration-500 hover:scale-105 cursor-pointer" src={logo} alt="logo" />
            <div className="flex gap-8 items-center">
              <h2 className="cursor-pointer text-primary hover:text-primary text-sm font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">Templates</h2>
              <h2 className="cursor-pointer text-primary hover:text-primary text-sm font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">About</h2>
              <h2 className="cursor-pointer text-primary hover:text-primary text-sm font-medium transition duration-500 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary hover:scale-105">Support</h2>
            </div>
            <div className="flex items-center gap-4">
              <DarkMode />
              <button className="bg-primary text-white text-sm font-medium py-2 px-6 rounded-2xl cursor-pointer transition duration-500 hover:shadow-[inset_120px_0_0_0_#50299B]">Login</button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="block md:hidden">
          <div
            className="w-full flex items-center justify-between mx-auto py-3 px-4 rounded-2xl
                       backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl transition-all duration-500"
          >
            <img className="w-12 transition duration-500 hover:scale-105 cursor-pointer" src={logo} alt="logo" />
            <div className="flex items-center gap-3">
              <DarkMode />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-primary transition-colors duration-300 hover:bg-white/20"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu}>
              <div 
                className="absolute top-20 right-4 left-4 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col space-y-4">
                  <h2 className="cursor-pointer text-primary hover:text-primary text-base font-medium transition duration-300 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary py-2 border-b border-gray-200/30" onClick={closeMobileMenu}>Templates</h2>
                  <h2 className="cursor-pointer text-primary hover:text-primary text-base font-medium transition duration-300 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary py-2 border-b border-gray-200/30" onClick={closeMobileMenu}>About Us</h2>
                  <h2 className="cursor-pointer text-primary hover:text-primary text-base font-medium transition duration-300 hover:decoration-2 hover:underline hover:underline-offset-5 hover:decoration-primary py-2 border-b border-gray-200/30" onClick={closeMobileMenu}>Support</h2>
                  <button 
                    className="bg-primary text-white text-base font-medium py-3 px-6 rounded-2xl cursor-pointer transition duration-500 hover:shadow-[inset_120px_0_0_0_#50299B] mt-4 w-full" 
                    onClick={closeMobileMenu}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;