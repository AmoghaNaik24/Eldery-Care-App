import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eldermemory1 from "../assets/eldermemory1.png";
import eldermemory2 from "../assets/eldermemory2.png";
import eldermemory3 from "../assets/eldermemory3.png";

const PhotosPage = () => {
  // Load stored photos from localStorage or use default images
  const initialPhotos = JSON.parse(localStorage.getItem("photos")) || [
    { id: 1, src: eldermemory1 },
    { id: 2, src: eldermemory2 },
    { id: 3, src: eldermemory3 },
  ];

  const [photos, setPhotos] = useState(initialPhotos);

  // Save photos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photos));
  }, [photos]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhoto = { id: Date.now(), src: URL.createObjectURL(file) };
      setPhotos([...photos, newPhoto]);
    }
  };

  const handleDelete = (id) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Memories & Moments</h2>

      {/* Add Photo Section */}
      <div className="text-center mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>

      {/* Display Photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative group">
            <img
              src={photo.src}
              alt="Memory"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(photo.id)}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-6">
        <Link to="/" className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PhotosPage;
