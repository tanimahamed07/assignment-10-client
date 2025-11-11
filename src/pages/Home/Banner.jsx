import React from 'react';
import bannerPng from '../../assets/banner.png'
import { Fade } from 'react-awesome-reveal';
const Banner = () => {
  return (
    <div className="bg-base-200 w-full overflow-x-hidden py-10">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-10 container mx-auto space-y-2.5 px-4">
        <div>
          <Fade triggerOnce>
            <img
              src={bannerPng}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
              alt="Art Exhibition Banner"
            />
          </Fade>
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <Fade direction="down" triggerOnce>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xl">
              <p className="text-primary">August 20</p>
              <hr className="border-secondary flex-1 border-t hidden sm:block" />
            </div>
          </Fade>
          <div>
            <Fade triggerOnce>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                ROJO Y NEGRO! LATIN <br /> AMERICAN ART
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p className="text-gray-500 max-w-md mx-auto lg:mx-0">
                The exhibition is made possible by the Laurn & C. Arnoled Douglas Foundation
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;