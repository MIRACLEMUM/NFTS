import type { FC } from "react";
import { useTheme } from "../context/ThemeContext"; // ✅ get darkMode

interface Category {
  title: string;
  image: string;
  icon: string;
}

const categories: Category[] = [
  { title: "Art", image: "/art.png", icon: "/Paintbrush.png" },
  { title: "Collectibles", image: "/collectibles.png", icon: "/collect.png" },
  { title: "Music", image: "/guitar.png", icon: "/music_notes.png" },
  { title: "Photography", image: "/photography.png", icon: "/Camera.png" },
  { title: "Video", image: "/video.png", icon: "/VideoCamera.png" },
  { title: "Utility", image: "/utility.png", icon: "/MagicWand.png" },
  { title: "Sport", image: "/sports.png", icon: "/Basketball.png" },
  { title: "Virtual Worlds", image: "/virtual.png", icon: "/Planet.png" },
];

const Categories: FC = () => {
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <section
      className={`py-16 px-6 md:px-12 transition-colors duration-300 ${
        darkMode ? "bg-[#2B2B2B] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
          Browse Categories
        </h2>
        <p className={`text-lg mb-10 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Explore a variety of categories in the NFT Marketplace.
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`relative group rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl ${
                darkMode ? "bg-[#3B3B3B]" : "bg-white"
              }`}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Icon overlay (only visible on hover) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <img
                  src={cat.icon}
                  alt={`${cat.title} icon`}
                  className="w-14 h-14 md:w-16 md:h-16 filter brightness-0 invert"
                />
              </div>

              {/* Category title bar */}
              <div
                className={`absolute bottom-0 left-0 w-full py-4 px-6 transition-colors duration-300 ${
                  darkMode ? "bg-[#3B3B3B]" : "bg-gray-200"
                }`}
              >
                <h3 className={`${darkMode ? "text-white" : "text-black"} text-lg font-semibold`}>
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
