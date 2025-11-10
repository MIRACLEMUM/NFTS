import React from "react";
import { Trophy } from "lucide-react";

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RankingModal: React.FC<RankingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const rankingItems = [
    { title: "Top Creators", desc: "Highest performing creators" },
    { title: "Trending", desc: "Currently trending NFTs" },
    { title: "Top Buyers", desc: "Most active buyers" },
    { title: "Volume Leaders", desc: "Highest volume collections" },
    { title: "Top Collections", desc: "Highest performing collections" },
    { title: "Top Sellers", desc: "Best performing sellers" },
    { title: "Activity", desc: "Recent marketplace activity" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#111] text-white rounded-2xl shadow-xl w-11/12 max-w-3xl p-6 md:p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-xl"
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-purple-600 p-2 rounded-lg mr-3">
            <Trophy className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold">Rankings</h2>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Two-column list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {rankingItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm ml-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingModal;
