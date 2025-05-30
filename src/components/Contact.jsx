import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Office Address",
      info: "A-5, Fifth Floor, Safal Profitaire, Corporate Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
      ),
      link: "https://maps.google.com/?q=Titanium+City+Center+Ahmedabad",
    },
    {
      title: "Contact Numbers",
      info: "+91 9824909200",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
      link: "tel:+919824909200",
    },
    {
      title: "Email Address",
      info: "info@msaca.co.in",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      link: "mailto:info@msaca.co.in",
    },
    {
      title: "Office Hours",
      info: "Monday - Saturday: 10:00 AM - 7:00 PM",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary opacity-5 pattern-grid"></div>
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent animate-gradient"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title mb-8 leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-gray text-lg md:text-xl font-subtitle leading-relaxed">
              We're here to help you with all your financial needs. Reach out to
              us through any of the following channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative bg-opacity-5 bg-white p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-title mb-2">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={
                            item.title === "Office Address" ? "_blank" : "_self"
                          }
                          rel="noopener noreferrer"
                          className="text-gray font-subtitle hover:text-primary transition-colors duration-300"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray font-subtitle">{item.info}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-opacity-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.38032814099!2d72.5067715!3d23.0098037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e0476f7%3A0x96e3d49fa6c53c37!2sSafal%20Profitaire!5e0!3m2!1sen!2sin!4v1748612955949!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
