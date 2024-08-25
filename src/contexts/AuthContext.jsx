import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateEmail,
} from "firebase/auth";

// Create the AuthContext
const AuthContext = createContext();

// Hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  console.log('useAuth context:', context); // Debugging output
  return context;
}

// AuthProvider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function changePassword(newPassword) {
    return updatePassword(auth.currentUser, newPassword);
  }

  function changeEmail(newEmail) {
    return updateEmail(auth.currentUser, newEmail);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('Auth state changed, current user:', user); // Debugging output
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    changeEmail,
    changePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
