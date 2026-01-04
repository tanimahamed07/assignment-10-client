import React from "react";
import bannerPng from "../../assets/banner.png";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="relative bg-base-100 w-full overflow-hidden py-8 lg:py-12 border-b border-base-200">
      {/* Background Glows - sized down */}
      <div className="absolute top-0 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-16">
          {/* Content Section */}
          <div className="space-y-5 text-center lg:text-left">
            <Fade direction="down" triggerOnce>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-base-200 rounded-full border border-base-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="text-primary font-bold tracking-widest uppercase text-xs">
                  August 20, 2024
                </p>
              </div>
            </Fade>

            <div className="space-y-3">
              <Fade triggerOnce>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] uppercase tracking-tighter">
                  Rojo{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    y Negro!
                  </span>{" "}
                  <br />
                  <span className="italic font-light">Latin American</span> Art
                </h1>
              </Fade>

              <Fade direction="up" delay={200} triggerOnce>
                <p className="text-neutral/70 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-snug border-l-2 border-primary/50 pl-4">
                  The exhibition is made possible by the{" "}
                  <span className="text-neutral font-medium">
                    Douglas Foundation
                  </span>
                  .
                </p>
              </Fade>
            </div>

            <Fade direction="up" delay={400} triggerOnce>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link to='/all-artworks' className="btn btn-primary btn-md shadow-md hover:scale-105 transition-transform">
                 Explore Gallery
                </Link>
              </div>
            </Fade>
          </div>

          {/* Image Section - Sized down to reduce overall height */}
          {/* Image Section */}
          <div className=" relative lg:ml-auto">
            <Fade triggerOnce>
              <div className="relative group max-w-sm lg:max-w-md">
                {/* Decorative Frame */}
                <div className="absolute -inset-2 border border-primary/20 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>

                {/* Main Image */}
                <img
                  src={bannerPng}
                  className="relative z-10 w-full rounded-xl shadow-lg transform group-hover:scale-[1.01] transition-transform duration-500"
                  alt="Art Exhibition Banner"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
