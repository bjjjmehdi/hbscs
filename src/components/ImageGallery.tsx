import React, { useState } from 'react';
import { Grid, X } from 'lucide-react';
import CircularGallery from './CircularGallery';
import Masonry from './Masonry';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [isMasonryOpen, setIsMasonryOpen] = useState(false);

  const openMasonry = () => {
    setIsMasonryOpen(true);
  };

  const closeMasonry = () => {
    setIsMasonryOpen(false);
  };

  // Convert images to gallery format
  const galleryItems = images.map((image, index) => ({
    image,
    text: `${title} - View ${index + 1}`,
  }));

  // Convert images to Masonry format
  const masonryItems = images.map((image, index) => ({
    id: `image-${index}`,
    img: image,
    url: image,
    height: 400 + Math.random() * 200, // Random heights for masonry effect
  }));

  return (
    <div className="space-y-4">
      {/* Circular Gallery as Default */}
      <div className="relative">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 24px Inter, sans-serif"
          scrollSpeed={2}
          scrollEase={0.05}
        />
        
        {/* Gallery Actions */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={openMasonry}
            className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            title="View Masonry Gallery"
          >
            <Grid size={20} />
          </button>
        </div>
      </div>

      {/* Masonry Gallery Modal */}
      {isMasonryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50">
          <button
            onClick={closeMasonry}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-10"
          >
            <X size={32} />
          </button>
          <Masonry
            items={masonryItems}
            animateFrom="random"
            scaleOnHover={true}
            hoverScale={1.05}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;