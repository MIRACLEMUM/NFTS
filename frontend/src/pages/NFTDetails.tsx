import { useRef, useState, useEffect } from "react";
import { Globe, Clock, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

const NFTDetailPage = () => {
  const { darkMode } = useTheme();
  const [isBidModalOpen, setBidModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  const nft = {
    image: "/nft-1.png",
    name: "Galactic Cat",
    mintedAt: "2025-08-01T14:00:00Z",
    creator: { name: "Jack Smith", avatar: "/avat.png" },
    description: `A unique digital collectible from the Galactic series. This NFT represents the cosmic spirit of creativity and curiosity.`,
    details: { etherscan: "https://etherscan.io/", original: "/nft-1.png" },
    tags: ["Art", "Cat", "Galactic", "Collectible"],
    auctionEnds: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 45),
  };

  const mintedDate = new Date(nft.mintedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const imgRef = useRef<HTMLImageElement>(null);

  // Tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * 10;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * -10;
    imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    imgRef.current.style.transition = "transform 0.3s";
    setTimeout(() => {
      if (imgRef.current) imgRef.current.style.transition = "";
    }, 300);
  };

  // Auction timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = nft.auctionEnds.getTime() - now;
      if (distance < 0) {
        setTimeLeft("Auction ended");
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [nft.auctionEnds]);

  const handlePlaceBid = () => {
    alert(`Bid placed: ${bidAmount} ETH`);
    setBidAmount("");
    setBidModalOpen(false);
  };

  // Dummy NFTs for "More from this artist" with creator info
  const moreNFTs = [
    { image: '/nft-2.png', title: 'Galactic Dog', creatorImage: '/avat.png', creatorName: 'Jack Smith', price: '1.5 ETH', highestBid: '1.1 ETH' },
    { image: '/nft-3.png', title: 'Galactic Bird', creatorImage: '/avat.png', creatorName: 'Jack Smith', price: '2.0 ETH', highestBid: '1.7 ETH' },
    { image: '/nft-1.png', title: 'Galactic Fish', creatorImage: '/avat.png', creatorName: 'Jack Smith', price: '1.1 ETH', highestBid: '0.9 ETH' },
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode ? "bg-[#2A2A2A] text-white" : "bg-white text-black"}`}>
      <Navbar />

      {/* NFT Banner */}
      <div
        className={`w-full h-80 md:h-[420px] flex items-center justify-center select-none mt-20 rounded-2xl shadow-xl relative overflow-hidden transition-colors duration-300 ${darkMode ? "bg-[#2A2A2A]" : "bg-gray-200"}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={nft.image}
          alt={nft.name}
          className="h-60 md:h-80 rounded-2xl shadow-xl object-contain z-10 bg-white/10 p-2 transition-transform duration-200 will-change-transform"
          draggable={false}
        />
      </div>

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto mt-10 flex flex-col md:flex-row gap-10 px-4 flex-1">
        {/* Left */}
        <div className="flex-1 min-w-0">
          <h1 className={`text-3xl md:text-4xl font-extrabold mb-2 ${darkMode ? "text-white" : "text-black"}`}>{nft.name}</h1>
          <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm mb-4`}>Minted on {mintedDate}</div>

          {/* Creator */}
          <div className="flex items-center gap-3 mb-6">
            <img src={nft.creator.avatar} alt={nft.creator.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>{nft.creator.name}</div>
              <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs`}>Creator</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-lg font-bold mb-1`}>Description</h2>
            <p className={`${darkMode ? "text-white" : "text-black"} text-base leading-relaxed`}>{nft.description}</p>
          </div>

          {/* Details */}
          <div className="mb-6">
            <h2 className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-lg font-bold mb-1`}>Details</h2>
            <div className="flex flex-col gap-2">
              <a href={nft.details.etherscan} target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-white hover:text-purple-500" : "text-black hover:text-purple-500"} flex items-center gap-2`}>
                <Globe size={16} className={`${darkMode ? "text-gray-400" : "text-gray-600"}`} /> View on Etherscan
              </a>
              <a href={nft.details.original} target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-white hover:text-purple-500" : "text-black hover:text-purple-500"} flex items-center gap-2`}>
                <Globe size={16} className={`${darkMode ? "text-gray-400" : "text-gray-600"}`} /> View Original
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h2 className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-lg font-bold mb-1`}>Tags</h2>
            <div className="flex flex-wrap gap-2">
              {nft.tags.map((tag) => (
                <span key={tag} className={`${darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-700"} px-3 py-1 rounded-full text-xs font-semibold`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Auction */}
        <div className="w-full md:w-80 flex-shrink-0">
          <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} rounded-2xl shadow-lg p-6 flex flex-col items-center transition-colors duration-300`}>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className={`${darkMode ? "text-gray-400" : "text-gray-600"}`} />
              <span className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>Auction ends in</span>
            </div>
            <div className="text-xl mb-4">{timeLeft}</div>
            <button className={`${darkMode ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"} w-full font-semibold py-2 rounded-full transition`} onClick={() => setBidModalOpen(true)}>
              Place Bid
            </button>

            {isBidModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
                <div className={`${darkMode ? "bg-[#2A2A2A]" : "bg-white"} rounded-2xl p-6 w-80 flex flex-col gap-4 transition-colors duration-300`}>
                  <h2 className={`${darkMode ? "text-white" : "text-black"} text-lg font-bold`}>Place Your Bid</h2>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter ETH amount"
                    className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} w-full p-2 rounded-md outline-none`}
                  />
                  <button
                    className={`${darkMode ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"} w-full font-semibold py-2 rounded-full`}
                    onClick={handlePlaceBid}
                  >
                    Submit
                  </button>
                  <button
                    className={`${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-300 hover:bg-gray-400 text-black"} w-full font-semibold py-2 rounded-full mt-2`}
                    onClick={() => setBidModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* More from this artist section */}
      <div className={`container max-w-5xl mx-auto mt-20 mb-10 ${darkMode ? "text-white" : "text-black"}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">More from this artist</h2>
          <a href="#" className="flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition">
            Go to Artist Page <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {moreNFTs.map((item, index) => (
            <div key={index} className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} rounded-2xl p-4 flex flex-col items-center transition hover:scale-105`}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-2xl mb-3" />
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <div className="flex items-center gap-2 mb-1">
                <img src={item.creatorImage} alt={item.creatorName} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-sm">{item.creatorName}</span>
              </div>
              <p className="text-sm mb-1">Price: {item.price}</p>
              <p className="text-sm">Highest Bid: {item.highestBid}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NFTDetailPage;
