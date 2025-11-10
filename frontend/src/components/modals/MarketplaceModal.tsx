import { X, ShoppingBag } from "lucide-react";

interface MarketplaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { name: "Art", desc: "Digital art and illustrations" },
  { name: "Music", desc: "Music and audio NFTs" },
  { name: "Video", desc: "Video and animation NFTs" },
  { name: "Sports", desc: "Sports collectibles and moments" },
  { name: "Collectibles", desc: "Unique collectibles and assets" },
  { name: "Photography", desc: "Professional photography NFTs" },
  { name: "Utility", desc: "NFTs with utility and function" },
  { name: "Virtual Worlds", desc: "Metaverse and virtual assets" },
];

const MarketplaceModal = ({ isOpen, onClose }: MarketplaceModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
      <div className="bg-[#2e2e2e] w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-purple-400 w-6 h-6" />
            <h2 className="text-white text-xl font-semibold">
              Marketplace Categories
            </h2>
          </div>
          <button onClick={onClose}>
            <X className="text-gray-400 hover:text-white w-6 h-6" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-6 text-gray-300">
          {categories.map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">•</span>
                <h3 className="text-white font-semibold">{cat.name}</h3>
              </div>
              <p className="text-sm text-gray-400 ml-5">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceModal;
