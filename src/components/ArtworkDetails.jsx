import React, { use, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router"; // useNavigate যোগ করা হয়েছে
import { BiSolidLike } from "react-icons/bi";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useAxios } from "../hook/useAxios";
import Loader from "./Loader";
import { Fade } from "react-awesome-reveal";

const ArtworkDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate(); // রিডাইরেক্ট করার জন্য
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [allArtByArtist, setAllArtByArtist] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/art-details/${id}`)
      .then((res) => {
        setLoading(false);
        setDetails(res.data.result);
        setAllArtByArtist(res.data.allArtByArtist || []);
      })
      .catch(() => setLoading(false));
  }, [id, axiosInstance]);

  const handleLikes = () => {
    if (!user) {
      toast.error("Please login to appreciate this art!");
      return navigate("/login");
    }
    
    axiosInstance.put(`/art-details/${id}/like`).then((res) => {
      setDetails((prev) => ({ ...prev, likes: (prev.likes || 0) + 1 }));
      toast.success("Appreciated!");
    });
  };

  const handleFevorites = () => {
    // সেফটি চেক
    if (!user) return;

    const favorite = {
      artworkId: details._id,
      artistEmail: details.artistEmail,
      artistName: details.artistName,
      category: details.category,
      imageUrl: details.imageUrl,
      title: details.title,
      likes: details.likes,
      price: details.price,
    };
    axiosInstance
      .post("/fevorites", { userEmail: user.email, ...favorite })
      .then((res) => {
        if (res.data.result.insertedId) {
          toast.success("Added to Favorites List");
        }
      });
  };

  if (loading) return <Loader />;

  return (
    <div className="relative bg-base-100 py-12 lg:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT: Image Section */}
          <div className="lg:w-1/2 w-full sticky top-24">
            <Fade triggerOnce>
              <div className="relative group">
                <div className="absolute -inset-3 border border-primary/20 rounded-[2rem] rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl bg-base-200">
                  <img
                    src={details?.imageUrl}
                    alt={details?.title}
                    className="w-full object-cover max-h-[700px] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Fade>
          </div>

          {/* RIGHT: Content Section */}
          <div className="lg:w-1/2 w-full space-y-8">
            <Fade direction="up" cascade triggerOnce damping={0.1}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-base-200 rounded-full border border-base-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                    {details?.category}
                  </p>
                </div>

                <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1]">
                  {details?.title}
                </h1>

                <p className="text-lg md:text-xl text-neutral/70 italic border-l-4 border-primary pl-6 py-1">
                  Crafted by{" "}
                  <span className="text-neutral font-black">
                    {details?.artistName}
                  </span>
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-base-200/50 p-4 rounded-2xl border border-base-200">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Medium</p>
                  <p className="font-bold text-lg">{details?.medium}</p>
                </div>
                <div className="bg-base-200/50 p-4 rounded-2xl border border-base-200">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Price Tag</p>
                  <p className="font-bold text-lg text-secondary">${details?.price || "0"}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral/40">Description</h3>
                <p className="text-neutral/70 leading-relaxed text-lg italic italic">"{details?.description}"</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                {/* Like Button (Always clickable but checks user inside function) */}
                <button
                  onClick={handleLikes}
                  className="btn btn-outline btn-primary btn-lg rounded-2xl gap-3 px-8 border-2 hover:scale-105 transition-transform"
                >
                  <BiSolidLike size={24} />
                  <span className="font-black text-xl">{details?.likes || 0}</span>
                </button>

                {/* Favorite Button (Disabled if no user) */}
                <button
                  onClick={handleFevorites}
                  disabled={!user}
                  title={!user ? "Please login to add favorites" : "Add to your collection"}
                  className={`btn btn-lg rounded-2xl gap-3 px-8 shadow-xl transition-all text-white
                    ${!user 
                        ? "bg-neutral/20 border-none cursor-not-allowed opacity-50" 
                        : "bg-secondary shadow-secondary/20 hover:scale-105 hover:shadow-secondary/40"
                    }`}
                >
                  <FaHeart size={20} />
                  {user ? "Add to Favorites" : "Login to Favorite"}
                </button>
              </div>

              {/* Artist Profile Card */}
              <div className="mt-12 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur opacity-30"></div>
                  <img
                    src={details?.artistImage || "https://i.ibb.co/mJR7z8f/user.png"}
                    className="relative w-24 h-24 rounded-2xl object-cover border-2 border-white shadow-lg"
                    alt="Artist"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <p className="text-[10px] font-black uppercase text-primary tracking-[0.3em]">About the Artist</p>
                  <h4 className="text-2xl font-black uppercase tracking-tight">{details?.artistName}</h4>
                  <p className="text-sm text-neutral/60">{details?.artistEmail}</p>
                  <div className="badge badge-outline mt-2 font-bold">{allArtByArtist.length} Masterpieces</div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetails;