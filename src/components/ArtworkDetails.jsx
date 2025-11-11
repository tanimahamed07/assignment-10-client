
import { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BiSolidLike } from 'react-icons/bi';
import { FaHeart, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hook/useAxiosSecure';
import { useAxios } from '../hook/useAxios';

const ArtworkDetails = () => {
    const { user } = use(AuthContext);
    console.log(user)
    const axiosSecure = useAxiosSecure()
    const axiosInstance = useAxios();
    const { id } = useParams();
    console.log(id);
    const [details, setDetails] = useState(null)
    const [allArtByArtist, setAllArtByArtist] = useState([])
    useEffect(() => {
        axiosSecure.get(`/art-details/${id}`)
            .then(res => {
                setDetails(res.data.result)
                setAllArtByArtist(res.data.allArtByArtist)
                console.log(res.data.allArtByArtist)
            })
    }, [id, axiosSecure])
    const handleLikes = () => {
        axiosInstance.put(`/art-details/${id}/like`)
            .then(res => {
                console.log(res)
                setDetails(prev => ({
                    ...prev,
                    likes: prev.likes + 1
                }))
            })
    }
    console.log(details)

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
        }
        axiosInstance.post('/fevorites', {
            userEmail: user.email,
            ...favorite
        })
            .then(res => {
                if (res.data.result.insertedId) {
                    toast.success('Added to Favorites List')
                }
            })
    }
    return (
        <div className="max-w-conteiner mx-auto p-8">
            <div className="flex flex-col lg:flex-row gap-12 ">
                <div className="lg:w-1/2 w-full">
                    <img
                        src={details?.imageUrl}
                        alt={details?.title || 'Artwork'}
                        className="rounded-lg shadow-lg w-full h-auto object-cover lg:max-h-[600px] border-2 border-gray-500"
                    />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col gap-6">
                    <h1 className="text-4xl lg:text-5xl font-bold">{details?.title}</h1>
                    <p className="text-lg lg:text-xl text-gray-600">
                        by <span className="font-medium">{details?.artistName}</span>
                    </p>
                    <p className="text-lg"><strong>Medium:</strong> {details?.medium}</p>
                    <p className="text-lg"><strong>Dimensions:</strong> {details?.dimensions}</p>
                    <p className="text-lg"><strong>Price:</strong> {details?.price || 0} </p>
                    <p className="text-lg text-gray-700">{details?.description}</p>
                    <div className="flex gap-4 items-center mt-4">
                        <button onClick={handleLikes}

                            className="btn btn-outline border-2 border-primary px-6 py-3 text-lg"
                        >
                            <span>{details?.likes}</span>  <BiSolidLike size={24} className="text-blue-500" />
                        </button>
                        <button onClick={handleFevorites} className="btn btn-outline border-[#b89e4f] text-primary hover:bg-secondary hover:text-white px-6 py-3 text-lg btn-primary flex items-center gap-2">
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