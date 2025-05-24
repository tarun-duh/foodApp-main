import React, { useState } from "react";
import gallery1 from "../assets/photos/gallery1.jpg";
import gallery2 from "../assets/photos/gallery2.jpg";
import gallery3 from "../assets/photos/gallery3.jpg";
import gallery4 from "../assets/photos/gallery4.jpg";
import gallery5 from "../assets/photos/gallery5.jpg";
import gallery6 from "../assets/photos/gallery6.jpg";
import gallery7 from "../assets/photos/gallery7.jpg";
import gallery8 from "../assets/photos/gallery8.jpg";
import gallery9 from "../assets/photos/gallery9.jpg";
import gallery10 from "../assets/photos/gallery10.jpg";
import gallery11 from "../assets/photos/gallery11.jpg";
import gallery12 from "../assets/photos/gallery12.jpg";

const GalleryGrid = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-16 px-8 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">🍽️ Our Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Food ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400 transition"
            aria-label="Close"
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-[90vh] rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
