import React from "react";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {[
        { title: "Total Artworks", value: "12" },
        { title: "Total Likes", value: "248" },
        { title: "Favorites", value: "7" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="relative bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
        >
          <div className="absolute -inset-1 border border-primary/20 rounded-2xl -rotate-1"></div>
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-neutral/50 mb-2">
              {item.title}
            </p>
            <h3 className="text-3xl font-black tracking-tighter">
              {item.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
