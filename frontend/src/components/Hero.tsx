import type { FC } from "react";
import nftImage from "/hero_img.svg"; 

const Hero: FC = () => {
  return (
    <section className="bg-[#2e2e2e] text-white py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Discover digital <br /> art & Collect <br />
          <span className="text-[#8B5CF6]">NFTs</span>
        </h1>
        <p className="text-gray-300 mb-8 max-w-lg">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art
          from more than <span className="text-white font-semibold">20k NFT artists</span>.
        </p>

        <button className="bg-[#8B5CF6] px-8 py-3 rounded-md font-semibold hover:bg-[#7c3aed] transition-all">
          Get Started
        </button>

        {/* Stats */}
        <div className="flex gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p className="text-gray-400 text-sm">Total Sale</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p className="text-gray-400 text-sm">Auctions</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p className="text-gray-400 text-sm">Artists</p>
          </div>
        </div>
      </div>

      {/* Right NFT Card */}
      <div className="flex-1 flex justify-center">
        <div className="bg-[#3a3a3a] rounded-2xl overflow-hidden shadow-lg w-[90%] md:w-[80%]">
          <img
            src={nftImage}
            alt="NFT Artwork"
            className="w-full h-[350px] object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Space Walking</h3>
            <p className="text-gray-400">Anima kid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
