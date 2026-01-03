import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiArrowRight,
} from "react-icons/hi2";
import { BiSolidBrush, BiSolidPalette, BiSolidHeart } from "react-icons/bi";

const About = () => {
  const curators = [
    {
      name: "Elena Rodriguez",
      role: "Chief Curator",
      img: "https://i.pravatar.cc/150?u=9",
    },
    {
      name: "Marcus Valez",
      role: "Art Director",
      img: "https://i.pravatar.cc/150?u=12",
    },
    {
      name: "Sofia Chen",
      role: "Digital Strategist",
      img: "https://i.pravatar.cc/150?u=5",
    },
  ];
  const stats = [
    {
      id: 1,
      label: "Active Artists",
      value: "2.5K+",
      icon: <HiOutlineUserGroup />,
    },
    {
      id: 2,
      label: "Artworks Featured",
      value: "10K+",
      icon: <HiOutlineSparkles />,
    },
    {
      id: 3,
      label: "Creative Ideas",
      value: "500+",
      icon: <HiOutlineLightBulb />,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 pb-20 overflow-hidden">
      <section className="relative py-12 lg:py-20 border-b border-base-200">
        <div className="absolute top-0 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Fade direction="down" triggerOnce>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-base-200 rounded-full border border-base-300 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="text-primary font-bold tracking-widest uppercase text-xs">
                  Our Story
                </p>
              </div>
            </Fade>

            <Fade triggerOnce>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] uppercase tracking-tighter mb-8">
                Redefining the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Digital Art Gallery
                </span>
              </h1>
            </Fade>

            <Fade direction="up" delay={200} triggerOnce>
              <p className="text-neutral/70 text-base md:text-lg max-w-2xl mx-auto leading-snug border-l-2 border-primary/50 pl-4 text-left md:text-center italic">
                Artify is more than just a showcase; it's a vibrant community
                dedicated to the spirit of Latin American creativity. Founded in
                2024, we aim to connect visionaries through a seamless, modern
                experience.
              </p>
            </Fade>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Decorative Frame */}
          <Fade direction="left" triggerOnce>
            <div className="relative group max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-2 border border-primary/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative z-10 overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Artistic Work"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </Fade>

          <div className="space-y-10">
            <Fade direction="right" triggerOnce>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                  Our Core <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Mission
                  </span>
                </h2>
                <p className="text-neutral/70 text-base leading-relaxed max-w-lg italic border-l-2 border-secondary pl-4">
                  We believe that art should be accessible to everyone. Our
                  platform provides artists with the tools they need to share
                  their passion while giving collectors a clean, intuitive space
                  to explore.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="p-5 bg-base-100 border border-base-200 rounded-2xl hover:border-primary/40 transition-all group shadow-sm hover:shadow-md"
                  >
                    <div className="text-primary text-2xl mb-2 group-hover:scale-110 transition-transform inline-block">
                      {stat.icon}
                    </div>
                    <h4 className="text-2xl font-black tracking-tighter leading-none">
                      {stat.value}
                    </h4>
                    <p className="text-[10px] uppercase font-bold text-neutral/40 tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                  Why us
                </p>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                Why Artify{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Exist
                </span>
              </h2>
            </div>

            <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-secondary pl-4 italic">
              We bridge the gap between creative minds shaping the future of
              digital and traditional Latin American art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Fade direction="up" delay={100} triggerOnce>
              <div className="relative group">
                <div className="absolute -inset-1.5 border border-secondary/20 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative z-10 bg-base-100 border border-base-200 rounded-2xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 mb-6 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <BiSolidBrush size={28} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors">
                    Showcase Art
                  </h3>
                  <p className="text-neutral/60 text-sm leading-relaxed italic">
                    Upload and display your creative works to a global audience
                    with full control.
                  </p>
                </div>
              </div>
            </Fade>

            {/* Feature 2 */}
            <Fade direction="up" delay={300} triggerOnce>
              <div className="relative group">
                <div className="absolute -inset-1.5 border border-primary/20 rounded-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative z-10 bg-base-100 border border-base-200 rounded-2xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 mb-6 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <BiSolidPalette size={28} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-3 group-hover:text-secondary transition-colors">
                    Explore Gallery
                  </h3>
                  <p className="text-neutral/60 text-sm leading-relaxed italic">
                    Discover new artists and find inspiration in diverse styles
                    and mediums.
                  </p>
                </div>
              </div>
            </Fade>

            {/* Feature 3 */}
            <Fade direction="up" delay={500} triggerOnce>
              <div className="relative group">
                <div className="absolute -inset-1.5 border border-secondary/20 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative z-10 bg-base-100 border border-base-200 rounded-2xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 mb-6 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <BiSolidHeart size={28} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors">
                    Connect Now
                  </h3>
                  <p className="text-neutral/60 text-sm leading-relaxed italic">
                    Like and interact with artworks while building meaningful
                    connections.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <section className="container mx-auto pt-30">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                  Newly Added
                </p>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                The Minds{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Artworks
                </span>
              </h2>
            </div>

            <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-secondary pl-4 italic">
              Fresh arrivals and recently uploaded masterpieces from our
              creative community.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {curators.map((curator, idx) => (
              <Fade key={idx} direction="up" delay={idx * 200} triggerOnce>
                <div className="relative group">
                  <div className="absolute -inset-1.5 border border-primary/20 rounded-3xl -rotate-1 group-hover:rotate-0 transition-all duration-500"></div>
                  <div className="relative z-10 bg-base-100 border border-base-200 p-6 rounded-2xl shadow-sm flex items-center gap-5">
                    <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-primary/20">
                      <img
                        src={curator.img}
                        alt={curator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-black uppercase tracking-tighter leading-tight">
                        {curator.name}
                      </h3>
                      <p className="text-[10px] font-bold text-primary tracking-widest uppercase opacity-70">
                        {curator.role}
                      </p>
                    </div>
                    <button className="ml-auto p-2 bg-base-200 rounded-lg hover:bg-primary hover:text-white transition-colors">
                      <HiArrowRight />
                    </button>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
