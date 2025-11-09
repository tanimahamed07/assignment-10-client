import React from 'react';

const CommunityHighlights = () => {
    return (
            <section>
                <h2 className="text-3xl font-bold mb-6">Community Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                alt="Sunset Bliss"
                                className="h-56 w-full object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-lg font-bold">Sunset Bliss</h3>
                            <p className="text-sm text-gray-500">by Alice Johnson</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="badge badge-info">Landscape</span>
                                <button className="btn btn-primary btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                                alt="Mountain Escape"
                                className="h-56 w-full object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-lg font-bold">Mountain Escape</h3>
                            <p className="text-sm text-gray-500">by John Doe</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="badge badge-info">Adventure</span>
                                <button className="btn btn-primary btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                                alt="Ocean Calm"
                                className="h-56 w-full object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-lg font-bold">Ocean Calm</h3>
                            <p className="text-sm text-gray-500">by Emma Williams</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="badge badge-info">Seascape</span>
                                <button className=" btn btn-outline-primary btn-primary btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default CommunityHighlights;