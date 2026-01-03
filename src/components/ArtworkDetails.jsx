import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { BiSolidLike } from "react-icons/bi";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useAxios } from "../hook/useAxios";
import Loader from "./Loader";

const ArtworkDetails = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [allArtByArtist, setAllArtByArtist] = useState([]);
  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/art-details/${id}`).then((res) => {
      setLoading(false);
      setDetails(res.data.result);
      setAllArtByArtist(res.data.allArtByArtist);
    });
  }, [id, axiosSecure]);
  const handleLikes = () => {
    axiosInstance.put(`/art-details/${id}/like`).then((res) => {
      setDetails((prev) => ({
        ...prev,
        likes: prev.likes + 1,
      }));
    });
  };

  const handleFevorites = () => {
    const favorite = {
      artistEmail: details.artistEmail,
      artistName: details.artistName,
      category: details.category,
      dimensions: details.dimensions,
      imageUrl: details.imageUrl,
      medium: details.medium,
      title: details.title,
      likes: details.likes,
      price: details.price,
    };
    axiosInstance
      .post("/fevorites", {
        userEmail: user.email,
        ...favorite,
      })
      .then((res) => {
        if (res.data.result.insertedId) {
          toast.success("Added to Favorites List");
        }
      });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="relative bg-base-100 py-16 overflow-hidden">
      {/* Decorative Glow */}


      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full relative group">
            {/* Decorative Frame */}

            <img
              src={details?.imageUrl}
              alt={details?.title || "Artwork"}
              className="relative z-10 w-full rounded-2xl shadow-xl object-cover max-h-[600px]"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full flex flex-col gap-5">
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
              {details?.title}
            </h1>

            <p className="text-base md:text-lg text-neutral/60">
              By{" "}
              <span className="font-semibold text-neutral">
                {details?.artistName}
              </span>
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-base-200 rounded-xl px-4 py-3 text-sm">
                <span className="font-bold text-primary">Medium:</span>{" "}
                {details?.medium}
              </div>
              <div className="bg-base-200 rounded-xl px-4 py-3 text-sm">
                <span className="font-bold text-primary">Dimensions:</span>{" "}
                {details?.dimensions || "N/A"}
              </div>
              <div className="bg-base-200 rounded-xl px-4 py-3 text-sm">
                <span className="font-bold text-primary">Price:</span> $
                {details?.price || "0"}
              </div>
              <div className="bg-base-200 rounded-xl px-4 py-3 text-sm">
                <span className="font-bold text-primary">Likes:</span>{" "}
                {details?.likes}
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral/70 leading-relaxed mt-2">
              {details?.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handleLikes}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
              >
                <span>{details?.likes}</span>
                <BiSolidLike className="text-xl group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={handleFevorites}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-bold shadow-lg hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all"
              >
                <FaHeart className="text-xl group-hover:scale-110 transition-transform" />
                Add to Favorites
              </button>
            </div>

            {/* Artist Info */}
            <div className="relative mt-10">
              <div className="absolute -inset-2 border border-secondary/20 rounded-2xl -rotate-1"></div>

              <div className="relative z-10 bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">
                  Artist Info
                </h2>

                <div className="flex items-center gap-6">
                  {details?.artistImage ? (
                    <img
                      src={details.artistImage}
                      alt={details?.artistName}
                      className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                    />
                  ) : (
                    <FaUserAlt className="w-24 h-24 text-neutral/40" />
                  )}

                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-bold text-primary">Name:</span>{" "}
                      {details?.artistName}
                    </p>
                    <p>
                      <span className="font-bold text-primary">Email:</span>{" "}
                      {details?.artistEmail}
                    </p>
                    <p>
                      <span className="font-bold text-primary">
                        Total Artworks:
                      </span>{" "}
                      {allArtByArtist.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetails;
