import React from "react";

// Placeholder for social icons - consider using a library like react-icons
const SocialIcon = ({ platform }) => (
  <a
    href="#"
    className="text-gray hover:text-primary transition-colors duration-300"
  >
    {/* Replace with actual icon component or SVG */}
    <span className="text-2xl">
      {platform === "facebook" && "FB"}
      {platform === "instagram" && "IG"}
      {platform === "pinterest" && "P"}
      {platform === "vimeo" && "V"}
    </span>
  </a>
);

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-black border-t border-gray border-opacity-20">
      <div className="container mx-auto px-4 text-center">
        {/* Logo or Brand Name */}
        <div className="text-3xl font-bold font-title mb-6">T</div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <SocialIcon platform="facebook" />
          <SocialIcon platform="instagram" />
          <SocialIcon platform="pinterest" />
          <SocialIcon platform="vimeo" />
        </div>

        {/* Copyright Information */}
        <p className="text-gray font-subtitle text-sm">
          © {new Date().getFullYear()}. All rights reserved by themepress.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
