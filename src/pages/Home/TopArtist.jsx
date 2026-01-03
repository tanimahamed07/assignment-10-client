import React from "react";
import { Fade } from "react-awesome-reveal";
import { HiArrowRight } from "react-icons/hi2";

const TopArtist = () => {
  const artists = [
    {
      name: "Alice Johnson",
      arts: 12,
      category: "Landscape",
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "John Doe",
      arts: 8,
      category: "Modern",
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Emma Williams",
      arts: 15,
      category: "Portrait",
      img: "https://i.pravatar.cc/150?u=3",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <p className="text-secondary font-bold tracking-widest uppercase text-[10px]">
                Rising Stars
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Top Artists <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Of The Week
              </span>
            </h2>
          </div>
          <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-primary pl-4 italic leading-relaxed">
            Meet the creative minds shaping the future of digital and
            traditional Latin American art.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {artists.map((artist, idx) => (
            <Fade key={idx} direction="up" delay={idx * 200} triggerOnce>
              <div className="relative group">
                <div className="absolute -inset-1.5 border border-primary/20 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

                {/* Main Card */}
                <div className="relative z-10 bg-base-100 border border-base-200 p-6 rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-5">
                    {/* Avatar with Rank Badge */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-base-200 group-hover:ring-primary/20 transition-all duration-500">
                        <img
                          src={artist.img}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -left-2 bg-neutral text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-lg font-black shadow-lg">
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Artist Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors leading-tight">
                        {artist.name}
                      </h3>
                      <p className="text-[10px] font-bold text-primary tracking-widest uppercase opacity-70">
                        {artist.category} Specialist
                      </p>
                    </div>
                  </div>

                  {/* Stats & Action */}
                  <div className="mt-8 flex items-center justify-between pt-5 border-t border-dashed border-base-300">
                    <div className="flex flex-col">
                      <span className="text-2xl font-black tracking-tighter leading-none">
                        {artist.arts}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-neutral/40 tracking-widest">
                        Artworks
                      </span>
                    </div>

                    <button className="group/btn flex items-center justify-center bg-base-200 hover:bg-primary hover:text-white h-12 w-12 hover:w-32 rounded-xl transition-all duration-500 overflow-hidden relative">
                      <div className="flex items-center gap-2 px-2">
                        <span className="max-w-0 overflow-hidden group-hover/btn:max-w-[80px] transition-all duration-500 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                          Profile
                        </span>
                        <HiArrowRight className="text-lg flex-shrink-0" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArtist;
