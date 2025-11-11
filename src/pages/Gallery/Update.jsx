import React, {  useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../hook/useAxiosSecure';
import toast from 'react-hot-toast';

const Update = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    // console.log(id)
    const axiosSecure = useAxiosSecure();
    const [art, setArts] = useState([]);
    // console.log(art)
    useEffect(() => {
        axiosSecure.get(`/update/${id}`)
            .then(res => {
                console.log(res.data.result);
                setArts(res.data.result);
            })
            .catch(err => console.error(err));
    }, [id, axiosSecure]);

    const updateArtwork = (e) => {
        e.preventDefault();
        const imageUrl = e.target.imageUrl.value;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const medium = e.target.medium.value;
        const description = e.target.description.value;
        const dimensions = e.target.dimensions.value;
        const price = e.target.price.value;
        const visibility = e.target.visibility.value === "true"

        const updatedArtWork = {
            category,
            description,
            dimensions,
            imageUrl,
            medium,
            price,
            title,
            visibility
        }
        console.log(updatedArtWork)
        console.log(updateArtwork)
        axiosSecure.patch(`/update-art/${id}`, updatedArtWork)
            .then(res => {
                console.log(res?.data?.result);
                toast.success('Updated done')
                setArts(res.data?.result);
                navigate('/my-gallary')
            })
    }
    return (
        <div className="flex justify-center items-center py-10">
            <div className="w-full max-w-lg p-6  rounded-lg shadow-md border-2 border-gray-500">
                <h2 className="text-2xl font-bold text-center mb-6">Update Artwork</h2>
                <form onSubmit={updateArtwork} className="space-y-4">
                    <label htmlFor="">Photo Url</label>
                    <input defaultValue={art.imageUrl} type="text" placeholder="Image URL" name="imageUrl" className="input input-bordered w-full" required />
                    <label>Title</label>
                    <input defaultValue={art.title} type="text" placeholder="Title" name="title" className="input input-bordered w-full" required />
                    <label>Category</label>
                    <select name="category" className="input input-bordered w-full" defaultValue="Watercolor">
                        <option value="Watercolor">Watercolor</option>
                        <option value="Acrylic">Acrylic</option>
                        <option value="Oil Painting">Oil Painting</option>
                    </select>
                    <label>Medium/Tools</label>
                    <input defaultValue={art.medium} type="text" placeholder="Medium / Tools" name="medium" className="input input-bordered w-full" required />
                    <label>Description</label>
                    <textarea defaultValue={art.description} placeholder="Description" name="description" className="input input-bordered w-full h-24" required />
                    <label>Dimensions</label>
                    <input defaultValue={art.dimensions} type="text" placeholder="Dimensions (optional)" name="dimensions" className="input input-bordered w-full" />
                    <label>Price</label>
                    <input defaultValue={art.price} type="text" placeholder="Price (optional)" name="price" className="input input-bordered w-full" />
                    <label htmlFor="">Visibility</label>
                    <select name="visibility" className="input input-bordered w-full">
                        <option value="true">Public</option>
                        <option value="false">Private</option>
                    </select>

                    <button type="submit" className="btn btn-primary w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;