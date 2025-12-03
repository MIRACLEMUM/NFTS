import { useState } from "react";
import { Search, ShoppingBag, Trophy, BookOpen, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import MarketplaceModal from "./modals/MarketplaceModal";
import RankingModal from "./modals/RankingModal";
import ResourcesModal from "./modals/ResourcesModal";
import { Link } from "react-router-dom"; // <-- import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [showRankings, setShowRankings] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm shadow-lg transition-colors duration-300 ${darkMode ? "bg-[#2e2e2e]/95 text-white" : "bg-white text-black"}`}>
        <div className="flex items-center justify-between px-4 md:px-10 py-4 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2"> {/* <-- wrapped in Link */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-8 h-8 flex items-center justify-center font-bold text-white">
              N
            </div>
            <h1 className="font-semibold text-lg">NFTMarket</h1>
          </Link>

          {/* Mobile Search */}
          <div className="flex-1 flex justify-center md:hidden">
            <a
              href="/search"
              className={`flex items-center gap-2 border rounded-md px-3 py-1 transition ${darkMode ? "border-gray-600 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"}`}
            >
              <Search className="w-4 h-4" />
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="/login"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1.5 rounded-xl font-semibold text-sm hover:opacity-90 transition"
            >
              Login
            </a>

            {/* Dark/Light Toggle */}
            <div onClick={toggleTheme} className="cursor-pointer">
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </div>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/search"
              className={`flex items-center gap-2 border rounded-md px-3 py-1 transition ${darkMode ? "border-gray-600 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"}`}
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">{`Ctrl K`}</span>
            </a>

            <div className="flex items-center gap-6">
              <button onClick={() => setShowMarketplace(true)} className="flex items-center gap-1 hover:text-indigo-400 transition">
                <ShoppingBag className="w-4 h-4" />
                <span>Marketplace</span>
              </button>

              <button onClick={() => setShowRankings(true)} className="flex items-center gap-1 hover:text-indigo-400 transition">
                <Trophy className="w-4 h-4" />
                <span>Rankings</span>
              </button>

              <button onClick={() => setShowResources(true)} className="flex items-center gap-1 hover:text-indigo-400 transition">
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
              </button>
            </div>
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="/login"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Login
            </a>

            {/* Dark/Light Toggle */}
            <div onClick={toggleTheme} className="cursor-pointer">
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className={`md:hidden px-6 py-4 space-y-4 transition-colors duration-300 ${darkMode ? "bg-[#2e2e2e] text-white border-t border-gray-700" : "bg-white text-black border-t border-gray-300"}`}>
            {/* Dropdown items unchanged */}
          </div>
        )}
      </nav>

      {/* Modals */}
      <MarketplaceModal isOpen={showMarketplace} onClose={() => setShowMarketplace(false)} />
      <RankingModal isOpen={showRankings} onClose={() => setShowRankings(false)} />
      <ResourcesModal isOpen={showResources} onClose={() => setShowResources(false)} />
    </>
  );
};

export default Navbar;
