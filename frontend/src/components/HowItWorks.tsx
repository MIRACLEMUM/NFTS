import React from "react";
import { useTheme } from "../context/ThemeContext"; // ✅ import your theme hook

interface Step {
  id: number;
  title: string;
  description: string;
  img: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Setup Your Wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    img: "/setup-wallet.png",
  },
  {
    id: 2,
    title: "Create Your NFT Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
    img: "/create-collection.png",
  },
  {
    id: 3,
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    img: "/start-earning.png",
  },
];

const HowItWorks: React.FC = () => {
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <section
      className={`px-6 md:px-16 py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#2b2b2b] text-white" : "bg-white text-black"
      }`}
    >
      {/* Section Header (Left-Aligned) */}
      <div className="mb-12">
        <h2 className={`text-3xl md:text-4xl font-bold mb-3`}>
          How It Works
        </h2>
        <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
          Find out how to get started with our NFT marketplace.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`rounded-2xl p-6 text-center 
              hover:scale-[1.03] hover:shadow-[0_0_25px_5px_rgba(162,89,255,0.4)] 
              shadow-none transition-all duration-300 ${
                darkMode ? "bg-[#3b3b3b] text-gray-300" : "bg-gray-100 text-gray-900"
              }`}
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-full max-w-[250px] mx-auto mb-6 object-contain"
            />
            <h3 className={`text-xl font-semibold mb-3`}>
              {step.title}
            </h3>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
