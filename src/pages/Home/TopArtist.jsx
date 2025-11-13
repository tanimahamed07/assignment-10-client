import React from "react";
import { Fade } from "react-awesome-reveal";

const TopArtist = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-end">
        Top Artists of the Week
      </h2>
      <Fade cascade damping={0.2} triggerOnce={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card card-compact bg-base-100 shadow-xl  transition-shadow border border-gray-200 p-4  transform hover:scale-102 hover:shadow-lg duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="Alice Johnson"
                className="w-16 h-16 object-cover rounded-full border-2 border-primary"
              />
              <div>
                <h3 className="text-lg font-bold">Alice Johnson</h3>
                <p className="text-sm text-gray-500">Artworks: 5</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="badge badge-info">Landscape</span>
              <button className="btn btn-primary btn-sm">View Profile</button>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl transition-shadow border border-gray-200 p-4 transform hover:scale-102 hover:shadow-lg duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                alt="John Doe"
                className="w-16 h-16 object-cover rounded-full border-2 border-primary"
              />
              <div>
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-sm text-gray-500">Artworks: 3</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="badge badge-info">Adventure</span>
              <button className="btn btn-primary btn-sm">View Profile</button>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl transition-shadow border border-gray-200 p-4  transform hover:scale-102 hover:shadow-lg duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="Emma Williams"
                className="w-16 h-16 object-cover rounded-full border-2 border-primary"
              />
              <div>
                <h3 className="text-lg font-bold">Emma Williams</h3>
                <p className="text-sm text-gray-500">Artworks: 4</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="badge badge-info">Seascape</span>
              <button className="btn btn-primary btn-sm">View Profile</button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default TopArtist;
