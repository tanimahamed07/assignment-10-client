import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useNavigate } from "react-router";

const AddArtWorks = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleAddArtwork = (event) => {
    event.preventDefault();

    const artwork = {
      imageUrl: event.target.imageUrl.value,
      title: event.target.title.value,
      category: event.target.category.value,
      medium: event.target.medium.value,
      description: event.target.description.value,
      dimensions: event.target.dimensions.value || "",
      price: event.target.price?.value || "",
      visibility: event.target.visibility.value === "true",
      artistName: user?.displayName,
      artistEmail: user?.email,
      createdAt: new Date(),
      artistImage: user?.photoURL,
      likes: 0,
    };

    axiosSecure.post("/add-artworks", artwork).then((res) => {
      if (res.data.result.insertedId) {
        toast.success("Artwork Added Successfully!");
        navigate("/dashboard/my-gallery");
      } else {
        toast.error("Failed to Add Artwork!");
      }
    });

    event.target.reset();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-base-100 border border-base-200 rounded-2xl shadow-sm p-8 lg:p-10">
        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-6 text-center">
          Add New Artwork
        </h2>

        <form className="space-y-5" onSubmit={handleAddArtwork}>
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
          <select
            name="category"
            className="input input-bordered w-full"
            defaultValue="Watercolor"
          >
            <option value="Watercolor">Watercolor</option>
            <option value="Acrylic">Acrylic</option>
            <option value="Oil Painting">Oil Painting</option>
          </select>
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
            className="input input-bordered w-full h-28"
            required
          />
          <input
            type="text"
            placeholder="Dimensions (optional)"
            name="dimensions"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Price (optional)"
            name="price"
            className="input input-bordered w-full"
          />
          <select
            name="visibility"
            className="input input-bordered w-full"
            defaultValue="true"
          >
            <option value="true">Public</option>
            <option value="false">Private</option>
          </select>
          <input
            type="text"
            value={user?.displayName || ""}
            className="input input-bordered w-full bg-base-200"
            readOnly
          />
          <input
            type="email"
            value={user?.email || ""}
            className="input input-bordered w-full bg-base-200"
            readOnly
          />
          <button
            type="submit"
            className="btn btn-primary w-full text-lg font-bold"
          >
            Add Artwork
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtWorks;
