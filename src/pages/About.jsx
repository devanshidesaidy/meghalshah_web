import React from "react";
import ContactSection from "../components/ContactSection";
import AwardsCarousel from "../components/AwardsCarousel";

const AboutPage = () => {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "Prioritizing honesty, transparency, and ethical practices in all dealings",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      title: "Excellence",
      description:
        "Delivering the highest standard of financial advice for optimal outcomes",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      ),
    },
    {
      title: "Personalization",
      description:
        "Tailoring solutions to address individual business needs and challenges",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Commitment",
      description:
        "Providing ongoing support to help clients meet their financial goals",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      ),
    },
    {
      title: "Innovation",
      description:
        "Seeking innovative approaches to solve complex financial problems",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
  ];

  const testimonials = [
    {
      text: "CA Meghal Shah's expertise was crucial in securing our funding and streamlining our financial operations. A true game-changer for our business.",
      author: "John Doe",
      position: "CEO of ABC Tech Solutions",
    },
    {
      text: "His advice on debt restructuring and cash flow management transformed our financial health. Highly recommend!",
      author: "Rajesh Kumar",
      position: "Founder of XYZ Manufacturing",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5 pattern-grid"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-center mb-6">
            About <span className="text-primary">CA Meghal Shah</span>
          </h1>
          <p className="text-gray text-center font-subtitle max-w-3xl mx-auto">
            A seasoned Chartered Accountant with over two decades of experience
            in strategic financial solutions
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Image Section */}
              <div className="md:w-1/3 relative flex justify-center">
                {/* Dot Pattern Background */}
                <div className="absolute -right-8 -bottom-8 z-0">
                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(35)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full bg-primary ${
                          // Create diamond pattern by hiding some dots
                          (i < 7 && (i < 2 || i > 4)) ||
                          (i >= 28 && (i < 30 || i > 32)) ||
                          (i % 7 === 0 && i !== 14 && i !== 21) ||
                          (i % 7 === 6 && i !== 20 && i !== 27)
                            ? "opacity-0"
                            : "opacity-40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Vertical Line with Dots */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-0">
                  <div className="w-0.5 h-24 bg-primary/40"></div>
                  <div className="w-2 h-2 rounded-full bg-primary absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-2 h-2 rounded-full bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 backdrop-blur-sm"></div>

                {/* Image container */}
                <div className="w-72 h-96 rounded-2xl overflow-hidden relative z-10 bg-gradient-to-b from-primary to-primary/50 border-4 border-primary p-1 group hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>

                    {/* Image with hover effect */}
                    <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-110">
                      <img
                        src="/images/DSC00074-2.JPG"
                        alt="CA Meghal Shah"
                        className="w-full h-full object-cover"
                      />

                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20"></div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Dots */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-primary opacity-40"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold font-title mb-8">
                  Introduction
                </h2>
                <div className="space-y-6 text-gray font-subtitle leading-relaxed">
                  <p>
                    I am CA Meghal Shah, a seasoned Chartered Accountant with
                    over two decades of experience in the world of finance.
                    Throughout my career, I have been committed to providing
                    businesses with strategic financial solutions that foster
                    growth, optimize operations, and ensure long-term financial
                    success. My experience spans across diverse industries,
                    enabling me to deliver tailor-made solutions that cater to
                    the unique needs of each client.
                  </p>
                  <p>
                    Having worked with startups, small-medium enterprises
                    (SMEs), and large corporations, I understand the intricacies
                    of financial challenges that businesses face at different
                    stages of growth. Whether it's corporate finance, tax
                    planning, or restructuring debt, my approach combines
                    in-depth analysis with practical strategies that yield real
                    results.
                  </p>
                  <p>
                    My philosophy is rooted in personalized service—I believe
                    that every business is unique and deserves a solution that
                    is crafted specifically for its needs. Over the years, I've
                    built strong relationships with my clients, earning their
                    trust by consistently delivering effective financial
                    strategies and solutions.
                  </p>
                  <p>
                    As I continue to help businesses navigate the complexities
                    of the financial world, my goal remains clear: to empower
                    businesses to achieve financial independence, stability, and
                    growth that lasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-opacity-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-opacity-5 bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold font-title mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-gray font-subtitle leading-relaxed">
                My mission is to empower businesses with strategic financial
                advice that maximizes growth, optimizes performance, and builds
                lasting financial stability. I strive to provide solutions that
                are not only effective but sustainable, ensuring that businesses
                can thrive in an ever-evolving financial landscape.
              </p>
            </div>
            <div className="bg-opacity-5 bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold font-title mb-6">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-gray font-subtitle leading-relaxed">
                To be a trusted advisor and financial partner for businesses
                across industries, helping them unlock their full potential and
                achieve financial independence and success. I aim to deliver
                high-quality, tailor-made financial solutions that exceed
                expectations and drive measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-title text-center mb-12">
            Core <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-opacity-5 bg-white p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-title mb-2">
                  {value.title}
                </h3>
                <p className="text-gray font-subtitle">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Philosophy Section */}
      <section className="py-16 md:py-24 bg-opacity-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-title text-center mb-12">
              Approach & <span className="text-primary">Philosophy</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-title mb-4">Approach</h3>
                <p className="text-gray font-subtitle leading-relaxed">
                  I adopt a holistic approach to financial advisory, which means
                  I look at every aspect of a business's financial health—from
                  day-to-day operations to long-term growth plans. My goal is to
                  provide practical, sustainable solutions that drive
                  efficiency, reduce costs, and ensure financial stability.
                  Through regular assessments and strategic planning, I work
                  closely with clients to ensure their financial strategies
                  align with their overall business objectives.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-title mb-4">
                  Philosophy
                </h3>
                <p className="text-gray font-subtitle leading-relaxed">
                  At the heart of my work is a deep commitment to personalized
                  service. I believe in building strong, long-term relationships
                  with my clients based on trust and mutual respect. My
                  philosophy revolves around making finance simple and
                  accessible for businesses, regardless of size or complexity. I
                  take pride in providing clear, actionable insights that
                  empower my clients to make informed decisions for sustained
                  success. Above all, my focus is always on delivering
                  value—ensuring that every financial strategy contributes
                  directly to the growth and success of the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-title text-center mb-12">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-opacity-5 bg-white p-8 rounded-lg">
                <svg
                  className="w-8 h-8 text-primary mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray font-subtitle mb-6 italic">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-title font-bold">{testimonial.author}</p>
                  <p className="text-primary font-subtitle text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-title text-center mb-4">
            A Legacy of <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-gray font-subtitle text-center mb-12 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized through various
            awards and accolades
          </p>

          <AwardsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default AboutPage;
