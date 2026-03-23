"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { FiImage, FiLoader, FiRefreshCw, FiTrash2, FiX } from "react-icons/fi";

interface CloudinaryImage {
  publicId: string;
  url: string;
  secureUrl: string;
  format: string;
  width: number;
  height: number;
  createdAt: string;
}

const getGridSpan = (index: number): string => {
  const patterns = [
    "row-span-2",
    "row-span-1",
    "row-span-1",
    "row-span-2",
    "row-span-1",
    "row-span-1",
    "row-span-2",
    "row-span-1",
    "row-span-1",
    "row-span-2",
  ];
  return patterns[index % patterns.length];
};

const GalleryPage = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [authToken, setAuthToken] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(
    null,
  );
  const [deletingImage, setDeletingImage] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const router = useRouter();

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

  const handleDelete = async (publicId: string) => {
    if (!authToken || authToken !== "iamabhishekicandelete") {
      setDeleteError("Invalid authorization token");
      return;
    }
    setDeletingImage(publicId);
    setDeleteError(null);

    try {
      const response = await fetch(`/api/images/${publicId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Delete failed");
      }

      setImages((prev) => prev.filter((img) => img.publicId !== publicId));
      setSelectedImage(null);
      setConfirmDelete(null);
      router.refresh();
    } catch (err: any) {
      setDeleteError(err.message);
      console.error("Delete error:", err);
    } finally {
      setDeletingImage(null);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchImages(nextCursor!, true);
    }
  };

  if (confirmDelete) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/20 max-w-md w-full mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <FiTrash2 className="text-red-400 text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Confirm Delete</h2>
              <p className="text-[#87928f] text-sm">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <p className="text-white mb-6 text-center">
            Are you sure you want to delete this image from Cloudinary?
          </p>

          <div className="flex gap-3">
            <ShimmerButton
              onClick={() => handleDelete(confirmDelete)}
              disabled={!!deletingImage}
              className="flex-1"
              background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(239,68,68,0.3), rgba(0,0,0,0.00)), #12191B"
            >
              {deletingImage ? (
                <>
                  <FiLoader className="animate-spin mr-2 w-4 h-4" />
                  Deleting...
                </>
              ) : (
                "Delete Image"
              )}
            </ShimmerButton>
            <ShimmerButton
              onClick={() => setConfirmDelete(null)}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white"
            >
              Cancel
            </ShimmerButton>
          </div>

          {deleteError && (
            <p className="text-red-400 text-sm mt-4 text-center">
              {deleteError}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen w-full pt-24 pb-28 relative bg-gradient-to-r from-[#000] to-[#2196F352] bg-[#12191b]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Image{" "}
              <span className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-[#87928f] text-lg font-semibold max-w-2xl mx-auto">
              Browse all uploaded images
              {authToken === "iamabhishekicandelete" ? (
                <span className="ml-2 inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  Admin Mode Active
                </span>
              ) : (
                <span
                  className="ml-2 inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-500/40 transition-all"
                  onClick={() => {
                    const token = prompt("Enter admin token to enable delete:");
                    if (token === "iamabhishekicandelete") {
                      setAuthToken(token);
                    } else if (token !== null) {
                      alert("Invalid token! Use: iamabhishekicandelete");
                    }
                  }}
                >
                  Enable Admin
                </span>
              )}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl max-w-md mx-auto">
              <p className="text-red-400 text-center">{error}</p>
              <button
                onClick={() => fetchImages()}
                className="mt-2 text-red-300 hover:text-red-200 flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg border border-red-400"
              >
                <FiRefreshCw className="animate-spin" /> Try Again
              </button>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
              <FiLoader className="text-5xl text-[#42A5F5] animate-spin mb-4" />
              <p className="text-[#87928f] text-lg">Loading images...</p>
            </div>
          )}

          {!loading && images.length === 0 && !error && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <FiImage className="text-4xl text-[#42A5F5]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                No Images Yet
              </h2>
              <p className="text-[#87928f] mb-6 max-w-md mx-auto">
                Upload your first image to get started with the gallery
              </p>
              <a
                href="/upload"
                className="inline-flex items-center gap-2 bg-[#42A5F5] hover:bg-[#2196F3] text-white px-6 py-3 rounded-lg transition-all font-medium"
              >
                <FiImage className="w-5 h-5" />
                Go to Upload
              </a>
            </div>
          )}

          {!loading && images.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] mb-10">
                {images.map((image, index) => (
                  <div
                    key={image.publicId}
                    className={`
                      relative group rounded-xl overflow-hidden border border-white/10 hover:border-[#42A5F5]/50
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#42A5F5]/25
                      ${getGridSpan(index)}
                    `}
                  >
                    <Image
                      src={image.secureUrl}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {/* View overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    />

                    {/* Delete Button - only admin */}
                    {authToken === "iamabhishekicandelete" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setConfirmDelete(image.publicId);
                        }}
                        disabled={!!deletingImage}
                        className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-red-500/95 hover:bg-red-600 text-white p-1.5 rounded-lg shadow-lg hover:scale-105 border-2 border-white/30 flex items-center justify-center w-9 h-9 text-sm font-medium"
                        title="Delete image from Cloudinary"
                      >
                        {deletingImage === image.publicId ? (
                          <FiLoader className="animate-spin w-4 h-4" />
                        ) : (
                          <FiTrash2 className="w-4 h-4" />
                        )}
                      </button>
                    )}

                    {/* Image info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white text-xs font-medium truncate">
                        {image.format.toUpperCase()} • {image.width}×
                        {image.height}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="mt-10 flex justify-center">
                  <ShimmerButton
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="px-8 py-3"
                    borderRadius="10px"
                    background="radial-gradient(97.27% 224.15% at 47.97% 100%, #2196F3, transparent), radial-gradient(42.95% 98.98% at 50% 100%, #42A5F5, transparent), #12191B "
                  >
                    {loadingMore ? (
                      <>
                        <FiLoader className="animate-spin" />
                        Loading more...
                      </>
                    ) : (
                      <>
                        <FiImage className="text-xl" />
                        Load More Images ({images.length} loaded)
                      </>
                    )}
                  </ShimmerButton>
                </div>
              )}

              {!hasMore && images.length > 0 && (
                <div className="mt-12 text-center py-12">
                  <p className="text-[#87928f] text-lg font-medium">
                    You've seen all {images.length} images!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center text-white text-xl font-bold transition-all duration-200 z-10 backdrop-blur-sm border border-white/30 hover:scale-105"
            onClick={() => setSelectedImage(null)}
          >
            <FiX />
          </button>
          <div
            className="relative max-w-6xl max-h-[95vh] w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.secureUrl}
              alt="Selected image"
              fill
              className="object-contain rounded-2xl shadow-2xl max-h-[90vh]"
              priority
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20 text-center text-white text-sm font-medium">
              <div className="flex items-center gap-4 justify-center">
                <span>{selectedImage.format.toUpperCase()}</span>
                <span>•</span>
                <span>
                  {selectedImage.width} × {selectedImage.height}px
                </span>
              </div>
              <a
                href={selectedImage.secureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-2 bg-blue-500/80 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-colors border border-blue-400/50"
              >
                Open Full Size
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
