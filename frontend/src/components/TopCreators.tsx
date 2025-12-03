import { Trophy } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // ✅ import theme hook

const creators = [
  { id: 1, name: "Anima Kid", sales: "34.53 ETH", image: "/public/okay.png" },
  { id: 2, name: "Crypto Queen", sales: "28.10 ETH", image: "/public/okay.png" },
  { id: 3, name: "Pixel Pro", sales: "25.00 ETH", image: "/public/okay.png" },
  { id: 4, name: "NFT Ninja", sales: "22.45 ETH", image: "/public/okay.png" },
  { id: 5, name: "Dream Lord", sales: "21.05 ETH", image: "/public/okay.png" },
  { id: 6, name: "Meta Sage", sales: "20.85 ETH", image: "/public/okay.png" },
  { id: 7, name: "Art Wizard", sales: "19.70 ETH", image: "/public/okay.png" },
  { id: 8, name: "Vision Code", sales: "18.45 ETH", image: "/public/okay.png" },
  { id: 9, name: "Vision Code", sales: "18.45 ETH", image: "/public/okay.png" },
  { id: 10, name: "Vision Code", sales: "18.45 ETH", image: "/public/okay.png" },
  { id: 11, name: "Vision Code", sales: "18.45 ETH", image: "/public/okay.png" },
  { id: 12, name: "Vision Code", sales: "18.45 ETH", image: "/public/okay.png" },
];

export default function TopCreators() {
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <section
      className={`px-6 md:px-16 py-12 transition-colors duration-300 ${
        darkMode ? "bg-[#2e2e2e] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <h2 className={`text-4xl font-extrabold ${darkMode ? "text-white" : "text-black"}`}>
            Top Creators
          </h2>
          <p className={darkMode ? "text-gray-300 text-lg" : "text-gray-700 text-lg"}>
            Checkout Top Rated Creators on the NFT Marketplace.
          </p>
        </div>
        <button
          className={`flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 rounded-lg transition ${
            darkMode
              ? "bg-[#2b2b2b] text-white hover:bg-[#2e2e2e]"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          <Trophy size={18} /> View Rankings
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className={`rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all ${
              darkMode ? "bg-[#2e2e2e]" : "bg-white"
            }`}
          >
            <div className="relative inline-block">
              <span
                className={`absolute -top-3 -left-3 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center ${
                  darkMode ? "bg-[#333] text-white" : "bg-gray-300 text-black"
                }`}
              >
                {creator.id}
              </span>
              <img
                src={creator.image}
                alt={creator.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
            </div>
            <h3 className={darkMode ? "text-xl font-semibold text-white" : "text-xl font-semibold text-black"}>
              {creator.name}
            </h3>
            <p className={darkMode ? "text-gray-400 text-sm mt-1" : "text-gray-700 text-sm mt-1"}>
              Total Sales:{" "}
              <span className={darkMode ? "text-white font-medium" : "text-black font-medium"}>
                {creator.sales}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
