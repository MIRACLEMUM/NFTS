import React from "react";

const NextSection: React.FC = () => {
  return (
    <section className="bg-[#2b2b2b] text-white px-6 md:px-16 py-16">
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
