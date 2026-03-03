"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { FiImage, FiLoader, FiRefreshCw } from "react-icons/fi";

interface CloudinaryImage {
  publicId: string;
  url: string;
  secureUrl: string;
  format: string;
  width: number;
  height: number;
  createdAt: string;
}

// Masonry grid item sizes for varied layout
const getGridSpan = (index: number): string => {
  const patterns = [
    "row-span-2", // tall
    "row-span-1", // normal
    "row-span-1", // normal
    "row-span-2", // tall
    "row-span-1", // normal
    "row-span-1", // normal
    "row-span-2", // tall
    "row-span-1", // normal
    "row-span-1", // normal
    "row-span-2", // tall
  ];
  return patterns[index % patterns.length];
};

const GalleryPage = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(
    null,
  );

  const IMAGES_PER_PAGE = 10;

  const fetchImages = useCallback(
    async (cursor?: string, append: boolean = false) => {
      try {
        if (append) {
          setLoadingMore(true);
        } else {
          setLoading(true);
        }
        setError(null);

        // Fetch from our API route
        let apiUrl = `/api/images?limit=${IMAGES_PER_PAGE}`;
        if (cursor) {
          apiUrl += `&cursor=${cursor}`;
        }

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();

        const fetchedImages: CloudinaryImage[] = data.images.map(
          (img: CloudinaryImage) => ({
            publicId: img.publicId,
            url: img.url,
            secureUrl: img.secureUrl,
            format: img.format,
            width: img.width,
            height: img.height,
            createdAt: img.createdAt,
          }),
        );

        if (append) {
          setImages((prev) => [...prev, ...fetchedImages]);
        } else {
          setImages(fetchedImages);
        }

        // Check if there are more images
        setHasMore(data.hasMore);
        setNextCursor(data.nextCursor || undefined);
      } catch (err) {
        setError("Failed to load images. Please try again.");
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchImages();
  }, []);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchImages(nextCursor, true);
    }
  };

  return (
    <main className="min-h-screen w-full pt-24 pb-10 relative bg-gradient-to-r from-[#000] to-[#2196F352] bg-[#12191b]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Image{" "}
            <span className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-[#87928f] text-lg font-semibold">
            Browse all uploaded images
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl max-w-md mx-auto">
            <p className="text-red-400 text-center">{error}</p>
            <button
              onClick={() => fetchImages()}
              className="mt-2 text-red-300 hover:text-red-200 flex items-center justify-center gap-2 w-full"
            >
              <FiRefreshCw /> Try Again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <FiLoader className="text-5xl text-[#42A5F5] animate-spin mb-4" />
            <p className="text-[#87928f]">Loading images...</p>
          </div>
        )}

        {/* Gallery Grid */}
        {!loading && images.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {images.map((image, index) => (
                <div
                  key={image.publicId}
                  className={`
                    relative group cursor-pointer rounded-xl overflow-hidden border border-white/10
                    transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#42A5F5]/20
                    ${getGridSpan(index)}
                  `}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.secureUrl}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium truncate">
                        {image.format.toUpperCase()} • {image.width}x
                        {image.height}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-10 flex justify-center">
                <ShimmerButton
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-8 py-3"
                  borderRadius="10px"
                  background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(33, 150, 243, 0.20), rgba(0, 0, 0, 0.00)), radial-gradient(42.95% 98.98% at 47.97% 100%, rgba(33, 150, 243, 0.50), rgba(0, 0, 0, 0.00)), #12191B"
                >
                  <span className="flex items-center justify-center gap-2">
                    {loadingMore ? (
                      <>
                        <FiLoader className="animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        <FiImage className="text-xl" />
                        Load More Images
                      </>
                    )}
                  </span>
                </ShimmerButton>
              </div>
            )}

            {/* No More Images */}
            {!hasMore && images.length > 0 && (
              <div className="mt-10 text-center">
                <p className="text-[#87928f]">You&apos;ve seen all images!</p>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && images.length === 0 && !error && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <FiImage className="text-4xl text-[#42A5F5]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              No Images Yet
            </h2>
            <p className="text-[#87928f] mb-6">
              Upload your first image to get started
            </p>
            <a
              href="/upload"
              className="inline-flex items-center gap-2 bg-[#42A5F5] hover:bg-[#2196F3] text-white px-6 py-3 rounded-lg transition-colors"
            >
              <FiImage />
              Go to Upload
            </a>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.secureUrl}
              alt="Selected image"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              priority
            />
            <div className="mt-4 text-center">
              <p className="text-white">
                {selectedImage.format.toUpperCase()} • {selectedImage.width} ×{" "}
                {selectedImage.height}
              </p>
              <a
                href={selectedImage.secureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#42A5F5] hover:underline mt-2 inline-block"
              >
                Open Full Size
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
