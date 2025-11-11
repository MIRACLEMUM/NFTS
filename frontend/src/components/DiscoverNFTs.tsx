import React from "react";
import { Eye } from "lucide-react"; // 👈 Added back since your button uses it
import { useNavigate } from "react-router-dom";

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

  return (
    <section className="bg-[#2b2b2b] text-white px-6 md:px-16 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Discover More NFTs
          </h2>
          <p className="text-gray-400 text-lg">Explore New Trending NFTs</p>
        </div>

        <button className="flex items-center gap-2 border border-[#A259FF] text-white px-5 py-2 rounded-xl hover:bg-[#A259FF] hover:text-white transition">
          <Eye className="w-5 h-5" />
          <span className="font-semibold">See All</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-[#2e2e2e] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
          >
            {/* Image click → navigate */}
            <img
              src={nft.img}
              alt={nft.title}
              className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => navigate(`/nft/${nft.id}`)}
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{nft.title}</h3>

              {/* ✅ Updated avatar image here */}
              <p className="flex items-center text-sm text-gray-400 mb-4">
                <img
                  src="/avat.png" // 👈 your avatar image file (place it in /public)
                  alt={nft.creator}
                  className="w-6 h-6 rounded-full mr-2 object-cover border border-[#A259FF]"
                />
                {nft.creator}
              </p>

              <div className="flex justify-between text-sm text-gray-400">
                <div>
                  <p>Price</p>
                  <p className="text-white font-medium">{nft.price}</p>
                </div>
                <div>
                  <p>Highest Bid</p>
                  <p className="text-white font-medium">{nft.bid}</p>
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
