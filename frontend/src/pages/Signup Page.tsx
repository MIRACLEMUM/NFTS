import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Eye, EyeOff } from "lucide-react";

const SignUp: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true); 
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-[#1e1e1e] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        
        {/* LEFT SIDE (scrollable) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 gap-6 relative overflow-y-auto">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 mb-10 cursor-pointer mt-4">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg font-bold">
              N
            </div>
            <h1 className="text-xl font-semibold">NFTMarket</h1>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold">Create an Account</h1>
          <p className="text-sm sm:text-base opacity-80 max-w-xl">
            Enter your details and start creating, collecting and selling NFTs.
          </p>

          <form className="flex flex-col gap-5 mt-4 w-full max-w-2xl">

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-lg border bg-white text-black placeholder-gray-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder="First Name"
              className="p-4 rounded-lg border bg-white text-black placeholder-gray-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="p-4 rounded-lg border bg-white text-black placeholder-gray-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Username"
              className="p-4 rounded-lg border bg-white text-black placeholder-gray-600 focus:outline-none"
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                className="p-4 rounded-lg border w-full bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="p-4 rounded-lg border w-full bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <input
              type="text"
              placeholder="Referral Code (Optional)"
              className="p-4 rounded-lg border bg-white text-black placeholder-gray-600 focus:outline-none"
            />

            <button
              type="button"
              className="mt-2 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-xl font-semibold"
            >
              Create Account
            </button>

            <div className="text-center opacity-80 mt-2">Or</div>

            <button
              type="button"
              className="flex items-center justify-center gap-3 p-4 bg-white text-black rounded-xl border mt-2"
            >
              <img src="/google.png" alt="google" className="w-5" />
              <span>Sign up with Google</span>
            </button>

            <p className="text-center mt-4 mb-10">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-400 font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT FIXED SIDE */}
        <div className="hidden md:block w-1/2 fixed right-0 top-0 h-full">
          <img
            src="/nft_banner.svg"
            alt="signup visual"
            className="w-full h-full object-cover"
          />

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="absolute top-5 right-5 p-3 rounded-full shadow-md bg-white/90 z-30"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
