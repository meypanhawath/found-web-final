import React, { useState } from "react";
import GlassBG from "../../components/glass/GlassBG";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import loginIllustration from "../../assets/loginimage.png"; // <-- put your uploaded file in assets and import it

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setMessage(null);
    try {
      await signInWithPopup(auth, provider);
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-500 outline-none py-2"
              required
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input type="checkbox" className="w-4 h-4" /> Keep me signed in
            </label>
            <button
              type="button"
              className="text-purple-600 hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
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
            <span className="px-3 text-gray-500 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social logins */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={() => handleSocialLogin(new GoogleAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition"
            >
              <FcGoogle size={20} /> Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin(new GithubAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition"
            >
              <FaGithub size={20} /> Github
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin(new FacebookAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition text-blue-600"
            >
              <FaFacebook size={20} /> Facebook
            </button>
          </div>

          {/* Sign up */}
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
