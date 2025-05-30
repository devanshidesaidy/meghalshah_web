import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-title mb-6">
            Get Started with Expert Financial Advisory
          </h2>
          <p className="text-gray font-subtitle mb-8">
            Schedule a consultation with CA Meghal Shah today and take your
            business to the next level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-opacity-5 bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold font-title mb-4">Contact Us</h3>
              <div className="space-y-4">
                <p className="text-gray font-subtitle">
                  <span className="text-primary">Email:</span>{" "}
                  info@meghalshah.com
                </p>
                <p className="text-gray font-subtitle">
                  <span className="text-primary">Phone:</span> +91 98765 43210
                </p>
                <p className="text-gray font-subtitle">
                  <span className="text-primary">Address:</span> 123 Business
                  Hub, Mumbai, India
                </p>
              </div>
            </div>
            <div className="bg-opacity-5 bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold font-title mb-4">
                Business Hours
              </h3>
              <div className="space-y-4">
                <p className="text-gray font-subtitle">
                  <span className="text-primary">Mon - Fri:</span> 9:00 AM -
                  6:00 PM
                </p>
                <p className="text-gray font-subtitle">
                  <span className="text-primary">Saturday:</span> 9:00 AM - 2:00
                  PM
                </p>
                <p className="text-gray font-subtitle">
                  <span className="text-primary">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
