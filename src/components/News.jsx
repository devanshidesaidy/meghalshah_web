import React from "react";

const NewsCard = ({ imgSrc, tag, date, author, title, description }) => {
  return (
    <div className="bg-opacity-5 bg-white rounded-lg overflow-hidden shadow-lg group">
      <div className="w-full h-56 md:h-64 overflow-hidden relative">
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
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-subtitle px-3 py-1 rounded">
          {tag}
        </span>
      </div>
      <div className="p-6 text-left">
        <p className="text-gray font-subtitle text-xs mb-2">
          {date} <span className="text-primary mx-1">•</span> By {author}
        </p>
        <h3 className="text-lg md:text-xl font-bold font-title mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-gray font-subtitle text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const News = () => {
  const newsData = [
    {
      imgSrc: null, // Replace with actual image path
      tag: "DESIGNER",
      date: "25 Dec. 2023",
      author: "Marilou",
      title: "Helpful tips for become a successful designer",
      description:
        "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    },
    {
      imgSrc: null, // Replace with actual image path
      tag: "FASION", // Corrected from image, assuming "FASHION"
      date: "22 Dec.2023", // Corrected from image
      author: "Aliza",
      title: "Master These Awesome New Skills in May 2023", // Title from image
      description:
        "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    },
    {
      imgSrc: null, // Replace with actual image path
      tag: "DEVELOPER",
      date: "15 Dec.2023", // Corrected from image
      author: "Konal",
      title: "We provide solutions growin your business", // Title from image
      description:
        "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-black">
      {" "}
      {/* Changed id to "blog" to match nav */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-subtitle mb-2 text-sm">Latest Blog</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-12 md:mb-16">
          My Latest News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {newsData.map((newsItem, index) => (
            <NewsCard
              key={index}
              imgSrc={newsItem.imgSrc}
              tag={newsItem.tag}
              date={newsItem.date}
              author={newsItem.author}
              title={newsItem.title}
              description={newsItem.description}
            />
          ))}
        </div>
        <div className="mt-12 md:mt-16">
          <button className="bg-primary text-white font-subtitle px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            View All Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
