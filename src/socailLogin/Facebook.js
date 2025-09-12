// src/Implement/Facebook.js
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, facebookProvider } from "../firebase/config";

export const useLoginWithFacebook = () => {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async () => {
    setIsPending(true);
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setUser(result.user);
    } catch (err) {
      console.error(err);
    }
    setIsPending(false);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return { login, logout, user, isPending };
};
