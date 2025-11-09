import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { Link } from 'react-router';

const ArtsCard = ({ art }) => {
    return (

       <div>
         <div key={art._id} className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={art.imageUrl} alt={art.title} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{art.title}</h2>
                <p>Artist: {art.artistName}</p>
                <p>Category: {art.category}</p>
                <p className="flex items-center gap-2 text-lg font-medium">
                    <BiSolidLike size={24} className="text-blue-500" />
                    Likes: {art.likes ?? 0}
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/art-details/${art._id}`} className="btn btn-primary btn-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ArtsCard;