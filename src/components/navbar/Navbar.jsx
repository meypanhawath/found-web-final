import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import logo from "../../assets/logo.svg";
import logoV2 from "../../assets/logoV2.png"
import GlassBG from "../glass/GlassBG";
// import upperImg from "../../assets/Ellipse.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
  };

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

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // };

  // const closeMobileMenu = () => {
  //   setMobileMenuOpen(false);
  // };

  return (
    <>
    
    <header className="relative z-30">
      {/* Background image */}
      {/* <img
        className="absolute -top-72 w-full -z-10 opacity-90"
        src={upperImg}
        alt="background"
      /> */}

      {/* Navbar */}
      <nav
        className={`sticky top-6 transition-transform duration-700 ${
          show ? "translate-y-0" : "-translate-y-40"
        }`}
      >
        <div
          className="max-w-7xl w-250 mx-auto absolute left-115 top-10 flex items-center justify-between px-8 py-4 rounded-full
          bg-white/10 backdrop-blur-xl shadow-lg border border-white/20"
        >
          {/* Logo */}
          <img
            className="w-50 cursor-pointer transition-transform duration-300 hover:scale-105"
            src={logoV2}
            alt="logo"
            onClick={() => navigate("/")}
          />

          {/* Links */}
          <div className="flex items-center gap-10">
            {["Templates", "About", "Support"].map((item) => (
              <h2
                key={item}
                className="cursor-pointer text-lg font-medium transition-all duration-300 text-primary 
                hover:text-hover-primary hover:underline hover:underline-offset-4 hover:scale-105 hover:translate-y-[-10%]"
                onClick={() =>
                  navigate(`/${item.toLowerCase().replace(" ", "")}`)
                }
              >
                {item}
              </h2>
            ))}

            {/* Auth buttons */}
            {user ? (
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center gap-2 cursor-pointer group"
                  onClick={() => navigate("/profile")}
                >
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="profile"
                      className="w-10 h-10 rounded-full border border-primary 
                      group-hover:ring-2 group-hover:ring-primary transition-all duration-300"
                    />
                  )}
                  <span className="text-primary font-medium group-hover:underline">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  className="text-white cursor-pointer px-6 py-2 rounded-full text-lg font-medium bg-red-500 
                  hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-md"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            ) : (
              <button
                className="px-6 py-2 text-white cursor-pointer rounded-full text-lg font-medium bg-primary hover:shadow-[inset_100px_0_0_0_#FFFFFF00] outline-2 outline-primary transition-all duration-400 hover:scale-110 hover:bg-transparent hover:text-primary  hover:outline-2 hover:outline-primary"
                onClick={() => navigate("/auth/login")}
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Navbar;
