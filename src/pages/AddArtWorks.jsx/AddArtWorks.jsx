import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';


const AddArtWorks = () => {
    const { user } = use(AuthContext);
console.log(user?.displayName)
    const handleAddArtwork = (event) => {
        event.preventDefault();

        const artwork = {
            imageUrl: event.target.imageUrl.value,
            title: event.target.title.value,
            category: event.target.category.value,
            medium: event.target.medium.value,
            description: event.target.description.value,
            dimensions: event.target.dimensions.value,
            price: event.target.price.value,
            visibility: event.target.visibility.value,
            userName: user?.displayName,
            userEmail: user?.email,
        };

        console.log('Artwork added:', artwork);
;

        event.target.reset();
    };

    return (
        <div className="flex justify-center items-center py-10">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Artwork</h2>
                <form className="space-y-4" onSubmit={handleAddArtwork}>
                    <input
                        type="text"
                        placeholder="Image URL"
                        name="imageUrl"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        name="category"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Medium / Tools"
                        name="medium"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        placeholder="Description"
                        name="description"
                        className="input input-bordered w-full h-24"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Dimensions (optional)"
                        name="dimensions"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="number"
                        placeholder="Price (optional)"
                        name="price"
                        className="input input-bordered w-full"
                    />
                    <select
                        name="visibility"
                        className="input input-bordered w-full"
                        defaultValue="public"
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                    <input
                        type="text"
                        value={user?.displayName || ''}
                        className="input input-bordered w-full bg-gray-100"
                        readOnly
                    />
                    <input
                        type="email"
                        value={user?.email || ''}
                        className="input input-bordered w-full bg-gray-100"
                        readOnly
                    />

                    <button type="submit" className="btn btn-primary w-full">
                        Add Artwork
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddArtWorks;