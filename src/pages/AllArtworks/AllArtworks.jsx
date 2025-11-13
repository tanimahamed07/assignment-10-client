import React, { useEffect, useState } from "react";
import { useAxios } from "../../hook/useAxios";
import ArtsCard from "../../components/ArtsCard";
import Loader from "../../components/Loader";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import toast from "react-hot-toast";

const AllArtworks = () => {
  const [text] = useTypewriter({
    words: [
      "Featured Artworks",
      "Explore Stunning Creativity",
      "Discover Your Next Inspiration",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  const axiosInstance = useAxios();
  const [artworks, setArtworks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const buttons = ["Watercolor", "Acrylic", "Oil Painting"];
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/all-artworks")
      .then((res) => {
        const publicArtworks = res.data.result.filter(
          (art) => art.visibility === true || "true"
        );
        setArtworks(publicArtworks);
        setLoading(false);
      })
      .catch((err) => toast.error(err));
  }, [axiosInstance]);
  const filteredArtworks = artworks.filter((art) =>
    art.artistName?.toLowerCase().includes(search.toLowerCase())
  );
  const categoryFilteredArtworks = artworks.filter((art) =>
    category ? art.category === category : true
  );
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="container mx-auto p-4 space-y-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#FF6F61" />
        </h2>
        <p className="mt-4 text-gray-400">
          . Handpicked creations from talented artists around the world 🌎
        </p>
      </div>
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by artist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
      </div>
      <div className="mb-6 text-center flex flex-wrap justify-center gap-2 sm:space-x-4">
        {buttons.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded font-medium text-sm sm:text-base ${
              category === cat
                ? "bg-[#FF6F61] text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-[#FF6F61] hover:text-white transition`}
          >
            {cat}
          </button>
        ))}

        {category && (
          <button
            onClick={() => setCategory("")}
            className={`px-4 py-2 rounded font-medium text-sm sm:text-base ${
              category === ""
                ? "bg-[#FF6F61] text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-[#FF6F61] hover:text-white transition`}
          >
            All
          </button>
        )}
      </div>

      {search && (
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Search Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.length > 0 ? (
              filteredArtworks.map((art) => (
                <ArtsCard key={art._id} art={art} />
              ))
            ) : (
              <p className="text-gray-500">No artworks found for "{search}"</p>
            )}
          </div>
        </div>
      )}
      {category && (
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">{category} Artworks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryFilteredArtworks.length > 0 ? (
              categoryFilteredArtworks.map((art) => (
                <ArtsCard key={art._id} art={art} />
              ))
            ) : (
              <p className="text-gray-500">No artworks found in {category}</p>
            )}
          </div>
        </div>
      )}
      {!search && !category && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((art, index) => (
            <ArtsCard index={index} key={art._id} art={art} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArtworks;
