// src/Implement/Google.js
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

export const useLoginWithGoogle = () => {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async () => {
    setIsPending(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
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
