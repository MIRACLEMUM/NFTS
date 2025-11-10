import type { FC } from "react";
import nftImage from "/hero_img.svg";
import profileImg from "/avat.png"; // Replace with your actual profile image

const TrendingCollections: FC = () => {
  return (
    <section className="bg-[#2e2e2e] text-white py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center md:text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Trending Collections
        </h2>
        <p className="text-gray-400 mt-2">
          Checkout our weekly updated trending collections.
        </p>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-[#3a3a3a] p-4 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Main Image */}
            <img
              src={nftImage}
              alt="NFT Collection"
              className="w-full h-[300px] object-cover rounded-xl"
            />

            {/* Thumbnails Row */}
            <div className="flex justify-between mt-4 gap-2">
              <img
                src={nftImage}
                alt="thumb1"
                className="w-[80px] h-[80px] object-cover rounded-md"
              />
              <img
                src={nftImage}
                alt="thumb2"
                className="w-[80px] h-[80px] object-cover rounded-md"
              />
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-[#8B5CF6] rounded-md font-bold text-lg">
                80+
              </div>
            </div>

            {/* Title + Author */}
            <div className="mt-4">
              <h3 className="font-bold text-lg">Collection Two</h3>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={profileImg}
                  alt="Creator"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-gray-400 text-sm">Jake Sanders</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCollections;
