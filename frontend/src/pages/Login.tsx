import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ IMPORT FROM firebase.ts
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const [darkMode, setDarkMode] = useState(true);

  // ✅ Google Login Function (using firebase.ts)
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Logged In:", result.user);
      alert("Google Login Successful!");
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Google Login Failed");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Dark mode toggle now fixed and always visible */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 p-2 rounded-full border bg-white/70 backdrop-blur z-50"
      >
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>

      <div className="flex flex-col md:flex-row w-full min-h-screen">
        
        {/* LEFT SIDE — only this side moves */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 gap-6 min-h-screen mt-10 md:mt-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-6 cursor-pointer">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg font-bold">
              N
            </div>
            <h1 className="text-xl font-semibold">NFTMarket</h1>
          </Link>

          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-sm opacity-80 mb-4">Please login to your account.</p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg border bg-transparent"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border bg-transparent"
          />

          <button className="text-sm text-red-400 self-end -mt-3">
            Forgot password?
          </button>

          <button className="w-full p-3 rounded-lg bg-purple-600 text-white font-semibold">
            Log in
          </button>

          {/* ✅ Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full p-3 rounded-lg border flex items-center justify-center gap-3"
          >
            <img src="/google.png" className="w-5" />
            Log in with Google
          </button>

          <p className="text-center text-sm mt-2">
            New here?{" "}
            <Link to="/signup" className="text-purple-500 font-semibold">
              Create an account
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE — fixed */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="/nft_banner.svg"
            alt="NFT Art"
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
}
