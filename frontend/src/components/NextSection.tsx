import React from "react"; 
import { useTheme } from "../context/ThemeContext"; // ✅ get darkMode

const NextSection: React.FC = () => {
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <section className={`px-6 md:px-16 py-16 transition-colors duration-300 ${darkMode ? "bg-[#2b2b2b] text-white" : "bg-white text-black"}`}>
      <div className="overflow-hidden shadow-lg"> 
        <img
          src="/highlight.png"
          alt="Next section visual"
          className="w-full h-auto object-cover"
        />
       </div>
    </section>
  );
};

export default NextSection;
