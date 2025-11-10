import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const NFTDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">NFT Details Page</h1>
      <p className="text-gray-400 mb-6">You opened NFT #{id}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-5 py-2 bg-[#A259FF] rounded-lg font-semibold hover:bg-[#8a3fe9] transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default NFTDetails;
