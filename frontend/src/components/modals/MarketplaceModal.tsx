import React from "react";
import { Trophy } from "lucide-react";
import { useTheme } from "../../context/ThemeContext"; // ✅ add this

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RankingModal: React.FC<RankingModalProps> = ({ isOpen, onClose }) => {
  const { darkMode } = useTheme(); // ✅ get darkMode

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
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-colors duration-300 ${
        darkMode ? "bg-black/70" : "bg-gray-200/60"
      }`}
    >
      <div
        className={`rounded-2xl shadow-xl w-11/12 max-w-3xl p-6 md:p-8 relative transition-colors duration-300 ${
          darkMode ? "bg-[#111] text-white border border-gray-700" : "bg-white text-black border border-gray-300"
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-xl transition-colors duration-300 ${
            darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
          }`}
        >
          &times;
        </button>

        <div className="flex items-center mb-6">
          <div className="bg-purple-600 p-2 rounded-lg mr-3">
            <Trophy className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold">{darkMode ? "Rankings" : "Rankings"}</h2>
        </div>

        <hr className={`border-b mb-6 ${darkMode ? "border-gray-700" : "border-gray-300"}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {rankingItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <h3 className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>{item.title}</h3>
              </div>
              <p className={`text-sm ml-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingModal;
