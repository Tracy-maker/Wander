import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClhqGX4kJK-yM7pilcakXNhhZg1K9hjbQ",
  authDomain: "weather-auth-development.firebaseapp.com",
  projectId: "weather-auth-development",
  storageBucket: "weather-auth-development.appspot.com",
  messagingSenderId: "918247703612",
  appId: "1:918247703612:web:e82afa55d313626ad2ef39",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
