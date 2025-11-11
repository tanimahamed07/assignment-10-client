import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import GalleryCard from './GalleryCard';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Loader from '../../components/Loader';

const Gallery = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axiosSecure.get(`/my-gallery?email=${user.email}`)
            .then(res => {
                setArts(res.data?.result);
                setLoading(false)

            })
            .catch(err => console.error(err));
    }, [user, axiosSecure]);
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-artwork?id=${id}`)
                    .then(res => {
                        setArts(prevArts => prevArts.filter(art => art._id !== id));
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <section className="container mx-auto p-4 space-y-12 ">
            <h2 className="text-3xl font-bold mb-6 text-center">My Gallery</h2>

            {arts.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">
                    You haven’t added any artworks yet 🎨
                </p>
            )
             : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {arts.map((art) => (
                        <GalleryCard key={art._id} art={art} handleDelete={handleDelete} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Gallery;
