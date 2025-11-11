import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  // scrollToTop function
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2E2E2E] text-white px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-600 pb-8">
        {/* Left Section - Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-8 h-8 flex items-center justify-center font-bold text-white">
              N
            </div>
            <h1 className="font-semibold text-lg">NFTMarket</h1>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Discover, collect, and sell extraordinary NFTs on the world’s first &
            largest NFT marketplace.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-2">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Middle Section - Marketplace Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Marketplace</h3>
          <ul className="space-y-2 text-gray-300">
            {["Explore", "Rankings", "Collections", "Blog"].map((item) => (
              <li
                key={item}
                onClick={handleScrollToTop}
                className="hover:text-purple-400 transition-colors duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <p className="text-gray-300 mb-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="flex items-center w-full bg-white rounded-2xl overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#A855F7] hover:bg-[#9333EA] text-white font-semibold px-5 py-3 rounded-2xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm pt-6">
        © 2025 NFT Market. All rights reserved.
      </div>
    </footer>
  );
}
