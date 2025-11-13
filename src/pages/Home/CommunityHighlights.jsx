import React from "react";
import { Fade } from "react-awesome-reveal";
import { BiSolidLike } from "react-icons/bi";
const CommunityHighlights = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Community Highlights</h2>
      <Fade cascade={false} delay={200} triggerOnce={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card card-compact bg-base-100 shadow-xl transition-shadow border border-gray-500 transform hover:scale-102 hover:shadow-lg duration-300 ease-in-out">
            <figure>
              <img
                src="https://www.rileystreet.com/cdn/shop/articles/shutterstock_410271079_1024x1024.jpg?v=1624398205"
                alt="Mountain Escape"
                className="h-56 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <Fade direction="down" triggerOnce={true}>
                <h2 className="card-title">Floating Flora</h2>
                <p>Artist: Mahi</p>
                <p>Category: Acrylic</p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <p className="flex items-center gap-2 text-lg font-medium">
                  <BiSolidLike size={24} className="text-blue-500" />
                  Likes: 46
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </Fade>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl transition-shadow border border-gray-500 transform hover:scale-102 hover:shadow-lg duration-300 ease-in-out">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFrrROFtBGKe0EaqzUk58uoEx54MXg3KDYJy6sIf1_32w8035RMRxDuPyhtEHneAOsIo&usqp=CAU"
                alt="Mountain Escape"
                className="h-56 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <Fade direction="down" triggerOnce={true}>
                <h2 className="card-title">Twin Blooms in the Water</h2>
                <p>Artist: Sadiya Islam</p>
                <p>Category: Watercolor</p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <p className="flex items-center gap-2 text-lg font-medium">
                  <BiSolidLike size={24} className="text-blue-500" />
                  Likes:
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </Fade>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl transition-shadow border border-gray-500 transform hover:scale-102 hover:shadow-lg duration-300 ease-in-out">
            <figure>
              <img
                src="https://i.pinimg.com/736x/8e/68/7a/8e687a252e5607f593b4d57665b3d69a.jpg"
                alt="Mountain Escape"
                className="h-56 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <Fade direction="down" triggerOnce={true}>
                <h2 className="card-title">Enchanted Forest</h2>
                <p>Artist: Eva Ahamed</p>
                <p>Category: Watercolor</p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <p className="flex items-center gap-2 text-lg font-medium">
                  <BiSolidLike size={24} className="text-blue-500" />
                  Likes:
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default CommunityHighlights;
