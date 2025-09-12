import React, { useState } from "react";
import GlassBG from "../../components/glass/GlassBG";
import {
  createUserWithEmailAndPassword,
  updateProfile,
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
import loginIllustration from "../../assets/loginimage.png";

// Zod schema for register
const registerSchema = z.object({
  username: z.string().min(2, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    // Zod validation
    const result = registerSchema.safeParse(form);
    if (!result.success) {
      setMessage(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      await updateProfile(userCredential.user, { displayName: form.username });
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setMessage("This email is already registered. Please log in instead.");
      } else {
        setMessage(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialRegister = async (provider) => {
    setLoading(true);
    setMessage(null);
    try {
      await signInWithPopup(auth, provider);
      setMessage("Registration/Login successful! Redirecting...");
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
            alt="register illustration"
            className="max-w-xs md:max-w-sm drop-shadow-2xl"
          />
        </div>
        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-10 flex flex-col justify-center"
        >
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Create your account
          </h1>
          {/* Username */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-500 outline-none py-2"
              required
            />
          </div>
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
              placeholder="Create a password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-purple-500 outline-none py-2"
              required
            />
          </div>
          {/* Register button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium shadow-lg hover:opacity-90 transition"
          >
            {loading ? "Registering..." : "Create Account"}
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
              onClick={() => handleSocialRegister(new GoogleAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition"
              disabled={loading}
            >
              <FcGoogle size={20} /> Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialRegister(new GithubAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition"
              disabled={loading}
            >
              <FaGithub size={20} /> Github
            </button>
            <button
              type="button"
              onClick={() => handleSocialRegister(new FacebookAuthProvider())}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition text-blue-600"
              disabled={loading}
            >
              <FaFacebook size={20} /> Facebook
            </button>
          </div>
          {/* Sign in */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              className="text-purple-600 hover:underline font-medium"
              onClick={() => navigate("/auth/login")}
            >
              Sign in
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
