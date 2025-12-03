import React from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // ✅ import theme hook

interface NFT {
  id: number;
  title: string;
  creator: string;
  img: string;
  price: string;
  bid: string;
}

const nfts: NFT[] = [
  {
    id: 1,
    title: "Distant Galaxy",
    creator: "MoonDancer",
    img: "/nft-1.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    id: 2,
    title: "Life On Edena",
    creator: "NebulaKid",
    img: "/video.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
  {
    id: 3,
    title: "AstroFiction",
    creator: "Spaceone",
    img: "/nft-3.png",
    price: "1.63 ETH",
    bid: "0.33 wETH",
  },
];

const DiscoverNFTs: React.FC = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <section
      className={`px-6 md:px-16 py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#2b2b2b] text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-2`}>
            Discover More NFTs
          </h2>
          <p className={darkMode ? "text-gray-400 text-lg" : "text-gray-700 text-lg"}>
            Explore New Trending NFTs
          </p>
        </div>

        <button
          className={`flex items-center gap-2 border px-5 py-2 rounded-xl transition
            ${
              darkMode
                ? "border-[#A259FF] text-white hover:bg-[#A259FF] hover:text-white"
                : "border-purple-500 text-black hover:bg-purple-500 hover:text-white"
            }`}
        >
          <Eye className="w-5 h-5" />
          <span className="font-semibold">See All</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className={`rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform ${
              darkMode ? "bg-[#2e2e2e]" : "bg-white"
            }`}
          >
            {/* Image click → navigate */}
            <img
              src={nft.img}
              alt={nft.title}
              className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => navigate(`/nft/${nft.id}`)}
            />

            <div className="p-5">
              <h3 className={darkMode ? "text-lg font-semibold mb-2 text-white" : "text-lg font-semibold mb-2 text-black"}>
                {nft.title}
              </h3>

              <p
                className={`flex items-center text-sm mb-4 ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                <img
                  src="/avat.png"
                  alt={nft.creator}
                  className="w-6 h-6 rounded-full mr-2 object-cover border border-[#A259FF]"
                />
                {nft.creator}
              </p>

              <div className="flex justify-between text-sm">
                <div>
                  <p>Price</p>
                  <p className={darkMode ? "text-white font-medium" : "text-black font-medium"}>
                    {nft.price}
                  </p>
                </div>
                <div>
                  <p>Highest Bid</p>
                  <p className={darkMode ? "text-white font-medium" : "text-black font-medium"}>
                    {nft.bid}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverNFTs;
