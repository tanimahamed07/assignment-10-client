import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Fade } from "react-awesome-reveal";
import { 
  HiOutlineChartBar, 
  HiOutlineHeart, 
  HiOutlinePhoto, 
  HiOutlineStar 
} from "react-icons/hi2";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // State management
  const [stats, setStats] = useState({});
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data from API
  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        // Getting both overview stats and gallery items at once
        const [overviewRes, galleryRes] = await Promise.all([
          axiosSecure.get(`/dashboard-overview?email=${user.email}`),
          axiosSecure.get(`/my-gallery?email=${user.email}`),
        ]);

        setStats(overviewRes.data.data);
        setArtworks(galleryRes.data.result);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, axiosSecure]);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // Formatting data for the Pie Chart
  const pieData = [
    { name: "Likes", value: stats.totalLikes || 0 },
    { name: "Favorites", value: stats.favorites || 0 },
  ];
  const PIE_COLORS = ["#6366f1", "#f59e0b"]; 

  return (
    <div className="space-y-10 py-4 max-w-7xl mx-auto">
      
      {/* 1. PAGE HEADER */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-base-200 pb-8">
        <div className="space-y-3">
          <Fade direction="down" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <HiOutlineChartBar className="text-primary" size={16} />
              <span className="text-primary font-bold tracking-widest uppercase text-[10px]">
                Analytics Dashboard
              </span>
            </div>
          </Fade>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
          </h2>
          <p className="text-neutral/50 italic text-sm">Welcome, {user?.displayName}. Here's how your art is performing.</p>
        </div>
      </header>

      {/* 2. STATS CARDS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          label="Total Artworks" 
          value={stats.totalArtworks} 
          icon={<HiOutlinePhoto size={24}/>} 
          theme="indigo" 
        />
        <StatCard 
          label="Total Likes" 
          value={stats.totalLikes} 
          icon={<HiOutlineHeart size={24}/>} 
          theme="amber" 
        />
        <StatCard 
          label="Favorites" 
          value={stats.favorites} 
          icon={<HiOutlineStar size={24}/>} 
          theme="indigo" 
        />
      </section>

      {/* 3. CHARTS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart Box */}
        <ChartContainer title="Engagement per Artwork" subtitle="Likes distribution">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={artworks}>
              <XAxis dataKey="title" hide />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} 
              />
              <Bar dataKey="likes" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Pie Chart Box */}
        <ChartContainer title="Interaction Mix" subtitle="Likes vs Favorites">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={pieData} 
                innerRadius={60} 
                outerRadius={100} 
                paddingAngle={5} 
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} stroke="none" />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </section>

      {/* 4. RECENT ARTWORKS TABLE */}
      <section className="bg-base-100 border border-base-200 rounded-[2rem] shadow-xl overflow-hidden">
        <div className="p-8 border-b border-base-200 bg-base-200/20 flex justify-between items-center">
          <h3 className="text-xl font-black uppercase tracking-tighter">Recent Submissions</h3>
          <div className="badge badge-primary badge-outline text-[10px] font-bold">LIVE FEED</div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-primary uppercase text-[10px] tracking-widest border-base-200">
                <th className="pl-8">Artwork</th>
                <th>Category</th>
                <th>Likes</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              {artworks.map((art) => (
                <tr key={art._id} className="hover:bg-base-200/50 border-base-100 transition-colors">
                  <td className="pl-8 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={art.imageUrl} 
                        className="w-10 h-10 rounded-lg object-cover border border-base-300" 
                        alt={art.title} 
                      />
                      <span className="font-bold text-neutral">{art.title}</span>
                    </div>
                  </td>
                  <td>
                    <span className="bg-base-200 text-[10px] font-bold px-2 py-1 rounded">
                      {art.category}
                    </span>
                  </td>
                  <td className="font-bold text-primary">
                    <div className="flex items-center gap-1">
                      <HiOutlineHeart /> {art.likes || 0}
                    </div>
                  </td>
                  <td className="text-neutral/50 text-xs">
                    {new Date(art.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {artworks.length === 0 && (
            <div className="p-20 text-center text-neutral/30 italic">No artworks to display.</div>
          )}
        </div>
      </section>
    </div>
  );
};



const StatCard = ({ label, value, icon, theme }) => {
  const isIndigo = theme === "indigo";
  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r ${isIndigo ? 'from-primary/20' : 'from-secondary/20'} to-transparent rounded-[1.5rem] blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
      
      <div className="relative bg-base-100 border border-base-200 p-6 rounded-[1.5rem] shadow-sm flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-neutral/40 mb-1">{label}</p>
          <h3 className="text-4xl font-black tracking-tighter">{value || 0}</h3>
        </div>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isIndigo ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const ChartContainer = ({ title, subtitle, children }) => (
  <div className="bg-base-100 border border-base-200 rounded-[2rem] p-8 shadow-lg">
    <div className="mb-6">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">{title}</h3>
      <p className="text-[10px] text-neutral/40 uppercase font-bold">{subtitle}</p>
    </div>
    {children}
  </div>
);

export default Overview;