import React, { useEffect, useState } from "react";
import { useAxios } from "../../hook/useAxios";
import CommunityHighlights from "./CommunityHighlights";
import ArtsCard from "../../components/ArtsCard";
import Loader from "../../components/Loader";

const FeaturedArtworks = () => {
  const axiosInstance = useAxios();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/latest-artworks")
      .then((res) => {
        setArtworks(res.data.result);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [axiosInstance]);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto p-4 space-y-12">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

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
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Artworks
              </span>
            </h2>
          </div>

          <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-secondary pl-4 italic">
            Fresh arrivals and recently uploaded masterpieces from our creative
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((art) => (
            <ArtsCard key={art._id} art={art} />
          ))}
        </div>
      </section>

      <CommunityHighlights></CommunityHighlights>
    </div>
  );
};

export default FeaturedArtworks;
