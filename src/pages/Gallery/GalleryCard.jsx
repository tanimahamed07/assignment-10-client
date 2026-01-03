import { Fade } from "react-awesome-reveal";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router";

const GalleryCard = ({ art, handleDelete }) => {
  return (
    <div className="relative group">
      {/* Decorative frame */}
      <div className="absolute -inset-1.5 border border-primary/20 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>

      <div className="card card-compact bg-base-100 border border-base-200 rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative z-10">
        <Fade triggerOnce>
          {/* Image */}
          <figure className="relative h-48 overflow-hidden">
            <img
              src={art?.imageUrl}
              alt={art?.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Category badge */}
            <div className="absolute top-3 left-3 px-3 py-1 bg-base-100/80 backdrop-blur-md rounded-full border border-base-300 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                {art.category}
              </p>
            </div>
          </figure>

          {/* Body */}
          <div className="card-body space-y-3">
            <Fade direction="down" triggerOnce>
              <h2 className="text-xl font-black uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                {art.title}
              </h2>

              <p className="text-sm text-neutral/70 border-l-2 border-primary/30 pl-3 italic">
                by <span className="font-medium text-neutral">{art.artistName}</span>
              </p>
            </Fade>

            <Fade direction="up" triggerOnce>
              <div className="flex items-center justify-between pt-4 border-t border-base-200">
                {/* Likes */}
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                    <BiSolidLike size={18} />
                  </div>
                  <span className="text-sm font-bold">
                    {art.likes ?? 0}
                    <span className="ml-1 text-[10px] text-neutral/50 uppercase">
                      Likes
                    </span>
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(art._id)}
                    className="btn btn-outline btn-sm border-[#b89e4f] hover:bg-secondary hover:text-white"
                  >
                    Delete
                  </button>

                  <Link
                    to={`/Update/${art._id}`}
                    className="btn btn-primary btn-sm shadow-md hover:scale-105 transition-transform"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GalleryCard;
