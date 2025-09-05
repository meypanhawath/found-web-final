import logo from "../../assets/logo-export.svg";
import "../../App.css";

export default function Navbar() {
  return (
    <nav className="glassmorphism flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 drop-shadow-lg" />
      </div>

      {/* Links */}
      <ul className="flex justify-between space-x-8 text-white font-[var(--font-title)]">
        <li className="cursor-pointer hover:text-[var(--color-hover-primary)]">
          Templates
        </li>
        <li className="cursor-pointer hover:text-[var(--color-hover-primary)]">
          About Us
        </li>
        <li className="cursor-pointer hover:text-[var(--color-hover-primary)]">
          Support
        </li>
      </ul>

      {/* Button */}
      <button className="relative bg-[var(--color-primary)] hover:bg-[var(--color-hover-primary)] text-[var(--color-secondary)] px-6 py-2 rounded-full font-[var(--font-title)] shadow-lg transition-all duration-300 overflow-hidden">
        <span className="relative z-10">Login</span>
        {/* Liquid shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-30 -translate-x-full hover:translate-x-full transition-transform duration-700"></span>
      </button>
    </nav>
  );
}
