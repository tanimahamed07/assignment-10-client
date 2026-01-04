import React, { useEffect, useState } from "react";
import { useAxios } from "../../hook/useAxios";
import ArtsCard from "../../components/ArtsCard";
import Loader from "../../components/Loader";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { HiOutlineMagnifyingGlass, HiOutlineFunnel, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import toast from "react-hot-toast";

const AllArtworks = () => {
  const [text] = useTypewriter({
    words: ["Featured Artworks", "Explore Stunning Creativity", "Discover Your Next Inspiration"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const axiosInstance = useAxios();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search, Filter & Pagination States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8; 

  const categories = ["Watercolor", "Acrylic", "Oil Painting"];

  // ডেটা ফেচ করার ফাংশন (সব প্যারামিটার সহ)
  const fetchArtworks = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(
        `/all-artworks?page=${currentPage}&limit=${itemsPerPage}&search=${search}&category=${category}&sort=${sortOrder}`
      );
      if (res.data.success) {
        setArtworks(res.data.result);
        setTotalPages(res.data.totalPages);
      }
    } catch (err) {
      toast.error("Failed to load artworks");
    } finally {
      setLoading(false);
    }
  };

  // যখনই কোনো ফিল্টার বা পেজ পরিবর্তন হবে, ডাটা ফেচ হবে
  useEffect(() => {
    fetchArtworks();
  }, [currentPage, category, sortOrder, axiosInstance]);

  // সার্চ হ্যান্ডলার (টাইপ করার সময় ডাটা আনতে চাইলে সার্চ ডিপেন্ডেন্সি হিসেবে দিতে পারেন)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchArtworks();
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      
      {/* 1. Header Area */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          <span>{text}</span>
          <Cursor cursorStyle="_" cursorColor="#FF6F61" />
        </h2>
        <p className="text-neutral/40 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
          The Global Creative Directory
        </p>
      </div>

      {/* 2. Controls */}
      <div className="bg-base-100 border border-base-200 rounded-[2.5rem] p-6 lg:p-8 shadow-sm space-y-6">
        <div className="flex flex-col xl:flex-row gap-6 items-center">
          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="relative w-full xl:w-2/5">
            <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
            <input
              type="text"
              placeholder="Search artist or title..."
              className="input input-bordered w-full pl-12 rounded-2xl bg-base-200/30 border-none focus:ring-2 focus:ring-primary/20 font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => {setCategory(""); setCurrentPage(1);}}
              className={`btn btn-sm rounded-xl font-bold uppercase text-[10px] ${!category ? 'btn-primary' : 'btn-ghost bg-base-200'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => {setCategory(cat); setCurrentPage(1);}}
                className={`btn btn-sm rounded-xl font-bold uppercase text-[10px] ${category === cat ? 'btn-primary' : 'btn-ghost bg-base-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selection */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-[10px] font-black uppercase text-neutral/40 tracking-widest whitespace-nowrap">Sort By:</span>
            <select 
              className="select select-bordered select-sm rounded-xl font-bold text-xs focus:outline-none"
              value={sortOrder}
              onChange={(e) => {setSortOrder(e.target.value); setCurrentPage(1);}}
            >
              <option value="newest">Newest Art</option>
              <option value="popular">Most Popular</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="min-h-[300px]">
        {artworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {artworks.map((art, index) => (
              <Fade key={art._id} direction="up" delay={index * 50} triggerOnce>
                <ArtsCard art={art} />
              </Fade>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-20 opacity-30">
            <HiOutlineFunnel size={60} />
            <p className="mt-4 font-black uppercase tracking-widest">No matching art found</p>
          </div>
        )}
      </div>

      {/* 4. Pagination UI */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-10">
          <button 
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="btn btn-circle btn-outline btn-sm disabled:opacity-20"
          >
            <HiOutlineChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded-xl font-black transition-all ${currentPage === i + 1 ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-base-200 hover:bg-base-300'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
            className="btn btn-circle btn-outline btn-sm disabled:opacity-20"
          >
            <HiOutlineChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AllArtworks;