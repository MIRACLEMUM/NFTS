import type { FC } from "react";
import nftImage from "/hero_img.svg"; 
import { useTheme } from "../context/ThemeContext"; // ✅ import theme hook

const Hero: FC = () => {
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <section
      className={`py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 transition-colors duration-300 ${
        darkMode ? "bg-[#2e2e2e] text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Left Section */}
      <div className="flex-1">
        <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-6`}>
          Discover digital <br /> art & Collect <br />
          <span className="text-[#8B5CF6]">NFTs</span>
        </h1>
        <p className={darkMode ? "text-gray-300 mb-8 max-w-lg" : "text-gray-700 mb-8 max-w-lg"}>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art
          from more than <span className={darkMode ? "text-white font-semibold" : "text-black font-semibold"}>20k NFT artists</span>.
        </p>

        <button
          className="bg-[#8B5CF6] px-8 py-3 rounded-md font-semibold hover:bg-[#7c3aed] transition-all"
        >
          Get Started
        </button>

        {/* Stats */}
        <div className="flex gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p className={darkMode ? "text-gray-400 text-sm" : "text-gray-700 text-sm"}>Total Sale</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p className={darkMode ? "text-gray-400 text-sm" : "text-gray-700 text-sm"}>Auctions</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p className={darkMode ? "text-gray-400 text-sm" : "text-gray-700 text-sm"}>Artists</p>
          </div>
        </div>
      </div>

      {/* Right NFT Card */}
      <div className="flex-1 flex justify-center">
        <div
          className={`rounded-2xl overflow-hidden shadow-lg w-[90%] md:w-[80%] transition-colors duration-300 ${
            darkMode ? "bg-[#3a3a3a]" : "bg-white"
          }`}
        >
          <img
            src={nftImage}
            alt="NFT Artwork"
            className="w-full h-[350px] object-cover"
          />
          <div className="p-4">
            <h3 className={darkMode ? "text-xl font-bold text-white" : "text-xl font-bold text-black"}>Space Walking</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-700"}>Anima kid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
