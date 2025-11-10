import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Trophy,
  BookOpen,
  Sun,
  Menu,
  X,
} from "lucide-react";
import MarketplaceModal from "./modals/MarketplaceModal";
import RankingModal from "./modals/RankingModal";
import ResourcesModal from "./modals/ResourcesModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [showRankings, setShowRankings] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#2e2e2e]/95 backdrop-blur-sm text-white shadow-lg">
        <div className="flex items-center justify-between px-4 md:px-10 py-4 relative">
          {/* ✅ Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-8 h-8 flex items-center justify-center font-bold text-white">
              N
            </div>
            <h1 className="font-semibold text-lg">NFTMarket</h1>
          </div>

          {/* ✅ Center Search Box (mobile) */}
          <div className="flex-1 flex justify-center md:hidden">
            <a
              href="/search"
              className="flex items-center gap-2 border border-gray-500 rounded-md px-3 py-1 hover:bg-gray-700 transition"
            >
              <Search className="w-4 h-4 text-gray-300" />
            </a>
          </div>

          {/* ✅ Right side (Login + Theme + Menu on mobile) */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="/login"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1.5 rounded-xl font-semibold text-sm hover:opacity-90 transition"
            >
              Login
            </a>
            <Sun className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <button
              className="text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/search"
              className="flex items-center gap-2 border border-gray-500 rounded-md px-3 py-1 hover:bg-gray-700 transition"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm text-gray-300">
                Ctrl <span className="text-white">K</span>
              </span>
            </a>

            <div className="flex items-center gap-6 text-gray-300">
              <button
                onClick={() => setShowMarketplace(true)}
                className="flex items-center gap-1 hover:text-white transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Marketplace</span>
              </button>

              <button
                onClick={() => setShowRankings(true)}
                className="flex items-center gap-1 hover:text-white transition"
              >
                <Trophy className="w-4 h-4" />
                <span>Rankings</span>
              </button>

              <button
                onClick={() => setShowResources(true)}
                className="flex items-center gap-1 hover:text-white transition"
              >
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
              </button>
            </div>
          </div>

          {/* ✅ Desktop Right Side */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="/login"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Login
            </a>
            <Sun className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#2e2e2e] border-t border-gray-700 px-6 py-4 space-y-4 text-gray-300">
            {/* 🔍 Search */}
            <a
              href="/search"
              className="flex items-center gap-2 border border-gray-600 rounded-md px-3 py-2 hover:bg-gray-700 transition w-full"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </a>

            {/* 🛍️ Marketplace */}
            <button
              onClick={() => {
                setShowMarketplace(true);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 hover:text-white transition w-full"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Marketplace</span>
            </button>

            {/* 🏆 Rankings */}
            <button
              onClick={() => {
                setShowRankings(true);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 hover:text-white transition w-full"
            >
              <Trophy className="w-4 h-4" />
              <span>Rankings</span>
            </button>

            {/* 📘 Resources */}
            <button
              onClick={() => {
                setShowResources(true);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 hover:text-white transition w-full"
            >
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </button>

            {/* 🧾 Sign Up */}
            <a
              href="/signup"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition w-full"
            >
              <span>Sign Up</span>
            </a>
          </div>
        )}
      </nav>

      {/* ✅ Modals */}
      <MarketplaceModal
        isOpen={showMarketplace}
        onClose={() => setShowMarketplace(false)}
      />
      <RankingModal
        isOpen={showRankings}
        onClose={() => setShowRankings(false)}
      />
      <ResourcesModal
        isOpen={showResources}
        onClose={() => setShowResources(false)}
      />
    </>
  );
};

export default Navbar;
