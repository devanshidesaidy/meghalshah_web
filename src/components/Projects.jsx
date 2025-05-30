import React from "react";

const ProjectCard = ({ imgSrc, category, title }) => {
  return (
    <div className="bg-opacity-5 bg-white rounded-lg overflow-hidden shadow-lg group">
      <div className="w-full h-64 md:h-80 overflow-hidden">
        {/* Placeholder for image */}
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray flex items-center justify-center">
            <span className="text-black opacity-50">Image Placeholder</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-primary font-subtitle text-xs uppercase mb-1">
          {category}
        </p>
        <h3 className="text-xl font-bold font-title mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      imgSrc: null, // Replace with actual image path
      category: "Web Design",
      title: "Business Website Design",
    },
    {
      imgSrc: null, // Replace with actual image path
      category: "Web Development", // Corrected from image
      title: "Food Website Design",
    },
    {
      imgSrc: null, // Replace with actual image path
      category: "Web Design",
      title: "Creative Website Design",
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-black">
      {" "}
      {/* Changed id to "portfolio" to match nav */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-subtitle mb-2 text-sm">My Projects</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-12 md:mb-16">
          My Latest Project
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              category={project.category}
              title={project.title}
            />
          ))}
        </div>
        <div className="mt-12 md:mt-16">
          <button className="bg-primary text-white font-subtitle px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
