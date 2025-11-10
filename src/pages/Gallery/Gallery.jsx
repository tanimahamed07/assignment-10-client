import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useAxios } from '../../hook/useAxios';
import GalleryCard from './GalleryCard';
import Swal from 'sweetalert2';

const Gallery = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();
    const [arts, setArts] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        axiosInstance.get(`/my-gallery?email=${user.email}`)
            .then(res => {
                console.log(res?.data?.result);
                setArts(res.data?.result);
            })
            .catch(err => console.error(err));
    }, [user, axiosInstance]);
    const handleDelete = (id) => {
        console.log(id)
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
                axiosInstance.delete(`/delete-artwork?id=${id}`)
                    .then(res => {
                        console.log(res.data.result)
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
    return (

        <section className='container mx-auto p-4 space-y-12'>
            <h2 className="text-3xl font-bold mb-6 text-center">My Gallery</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {arts.map(art => <GalleryCard key={art._id} art={art} handleDelete={handleDelete} />)}
            </div>
        </section>
    );
};

export default Gallery;
