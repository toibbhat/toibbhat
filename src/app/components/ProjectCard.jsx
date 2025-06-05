import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="group rounded-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.3),0_0_35px_10px_rgba(147,51,234,0.25)]">
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] bg-opacity-60 backdrop-blur-sm px-4 py-6 transition-all duration-300">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
