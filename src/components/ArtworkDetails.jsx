
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAxios } from '../hook/useAxios';
import { BiSolidLike } from 'react-icons/bi';
import { FaHeart, FaUserAlt } from 'react-icons/fa';

const ArtworkDetails = () => {
    const axiosInstance = useAxios()
    const { id } = useParams();
    const [details, setDetails] = useState(null)
    const [allArtByArtist, setAllArtByArtist] = useState([])
    useEffect(() => {
        axiosInstance.get(`/art-details/${id}`)
            .then(res => {
                setDetails(res.data.result)
                setAllArtByArtist(res.data.allArtByArtist)
            })
    }, [id, axiosInstance])

    return (
        <div className="max-w-conteiner mx-auto p-8">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 w-full">
                    <img
                        src={details?.imageUrl}
                        alt={details?.title || 'Artwork'}
                        className="rounded-lg shadow-lg w-full h-auto object-cover lg:max-h-[600px]"
                    />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col gap-6">
                    <h1 className="text-4xl lg:text-5xl font-bold">{details?.title}</h1>
                    <p className="text-lg lg:text-xl text-gray-600">
                        by <span className="font-medium">{details?.artistName}</span>
                    </p>
                    <p className="text-lg"><strong>Medium:</strong> {details?.medium}</p>
                    <p className="text-lg"><strong>Dimensions:</strong> {details?.dimensions}</p>
                    <p className="text-lg text-gray-700">{details?.description}</p>
                    <div className="flex gap-4 items-center mt-4">
                        <button

                            className="btn btn-outline border-2 border-primary px-6 py-3 text-lg"
                        >
                            <BiSolidLike size={24} className="text-blue-500" />
                        </button>
                        <button className="btn btn-outline border-[#b89e4f] text-primary hover:bg-secondary hover:text-white px-6 py-3 text-lg btn-primary flex items-center gap-2">
                            <FaHeart className="text-red-400 text-3xl" />
                            <span>Add to Favorites</span>
                        </button>
                    </div>
                    <div className="mt-8 p-6 border rounded-lg shadow-sm">
                        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Artist Info</h2>
                        {details?.artistImage ? (
                            <img
                                src={details.artistImage}
                                alt={details?.artistName || 'Artist'}
                                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                            />
                        ) : (
                            <FaUserAlt className="w-24 h-24 rounded-full mb-4 shadow-md text-gray-400" />
                        )}
                        <p className="text-lg"><strong>Name:</strong> {details?.artistName}</p>
                        <p className="text-lg"><strong>Email:</strong> {details?.artistEmail}</p>
                        <p className="text-lg"><strong>Total Artworks:</strong> {allArtByArtist.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetails;