import React, { useState } from "react";
import GlassBG from "../../components/glass/GlassBG";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import loginIllustration from "../../assets/loginimage.png";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Zod schema for login
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle API Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const result = loginSchema.safeParse(form);
    if (!result.success) {
      setMessage(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save token and user info for Navbar
      if (data.token) localStorage.setItem("token", data.token);
      if (data.refreshToken)
        localStorage.setItem("refreshToken", data.refreshToken); // <-- Add this
      if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1000);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle social login with Firebase
  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setMessage(null);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user info to localStorage for Navbar
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );

      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 overflow-hidden">
      <GlassBG />

      <div className="relative z-10 flex w-full max-w-4xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-200/50 to-purple-200/50 p-8">
          <img
            src={loginIllustration}
            alt="login illustration"
            className="max-w-xs md:max-w-sm drop-shadow-2xl"
          />
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-10 flex flex-col justify-center"
        >
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Login to your account
          </h1>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-500 outline-none py-2"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-500 outline-none py-2 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium shadow-lg hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or login with</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social logins */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={() => handleSocialLogin(new GoogleAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition"
              disabled={loading}
            >
              <FcGoogle size={20} /> Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin(new GithubAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition"
              disabled={loading}
            >
              <FaGithub size={20} /> Github
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin(new FacebookAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition text-blue-600"
              disabled={loading}
            >
              <FaFacebook size={20} /> Facebook
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              type="button"
              className="text-purple-600 hover:underline font-medium"
              onClick={() => navigate("/auth/register")}
            >
              Sign Up
            </button>
          </p>

          {/* Error / success message */}
          {message && (
            <div className="mt-4 text-center text-sm text-red-500">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
