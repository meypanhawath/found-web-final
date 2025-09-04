import { motion } from "framer-motion";
import logo from "../../assets/logo-export.svg";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-2xl bg-white/20 border border-white/30 shadow-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20"
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 drop-shadow-lg" />
      </div>

      <div className="hidden md:flex justify-between space-x-8 text-white/90 font-medium">
        <a href="#templates" className="hover:text-purple-300 transition">Templates</a>
        <a href="#about" className="hover:text-purple-300 transition">About Us</a>
        <a href="#support" className="hover:text-purple-300 transition">Support</a>
      </div>

      <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300">
        Login
      </button>
    </motion.nav>
  );
}
