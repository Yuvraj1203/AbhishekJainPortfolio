"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
  FiUploadCloud,
  FiImage,
  FiX,
  FiCheck,
  FiLock,
  FiUnlock,
} from "react-icons/fi";

const CLOUDINARY_CLOUD_NAME = "dsbesmuuh";
const CLOUDINARY_UPLOAD_PRESET = "AbhishekGallery";
const UPLOAD_TOKEN = "iamabhishekicanupload";

interface UploadedImage {
  url: string;
  publicId: string;
  format: string;
  width: number;
  height: number;
}

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokenError, setTokenError] = useState<string | null>(null);

  const verifyToken = () => {
    if (token === UPLOAD_TOKEN) {
      setIsAuthenticated(true);
      setTokenError(null);
    } else {
      setTokenError("Invalid token. Please enter the correct token to upload.");
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadedImage(null);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif"],
      },
      maxFiles: 1,
    });

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setUploadProgress(0);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(progress);
        }
      });

      xhr.open(
        "POST",
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      );

      xhr.onload = () => {
        setUploading(false);
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setUploadedImage({
            url: response.secure_url,
            publicId: response.public_id,
            format: response.format,
            width: response.width,
            height: response.height,
          });
          setSelectedFile(null);
          setPreviewUrl(null);
        } else {
          setError("Upload failed. Please try again.");
        }
      };

      xhr.onerror = () => {
        setUploading(false);
        setError("Upload failed. Please try again.");
      };

      xhr.send(formData);
    } catch (err) {
      setUploading(false);
      setError("Upload failed. Please try again.");
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadedImage(null);
    setError(null);
    setUploadProgress(0);
  };

  const handleCopyUrl = () => {
    if (uploadedImage) {
      navigator.clipboard.writeText(uploadedImage.url);
    }
  };

  // Render token authentication screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen w-full pt-24 pb-10 relative bg-gradient-to-r from-[#000] to-[#2196F352] bg-[#12191b]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Upload{" "}
              <span className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] bg-clip-text text-transparent">
                Image
              </span>
            </h1>
            <p className="text-[#87928f] text-lg font-semibold">
              Upload your images to Cloudinary
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <FiLock className="text-4xl text-[#42A5F5]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Upload Access Required
              </h2>
              <p className="text-[#87928f] mb-6">
                Enter the access token to upload images
              </p>

              <div className="max-w-md mx-auto">
                <input
                  type="password"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Enter access token"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-center mb-4 focus:outline-none focus:border-[#42A5F5]"
                  onKeyDown={(e) => e.key === "Enter" && verifyToken()}
                />
                <ShimmerButton
                  onClick={verifyToken}
                  className="w-full py-3"
                  borderRadius="10px"
                  background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(33, 150, 243, 0.20), rgba(0, 0, 0, 0.00)), radial-gradient(42.95% 98.98% at 47.97% 100%, rgba(33, 150, 243, 0.50), rgba(0, 0, 0, 0.00)), #12191B"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FiUnlock className="text-xl" />
                    Verify Token
                  </span>
                </ShimmerButton>

                {tokenError && (
                  <p className="text-red-400 mt-4">{tokenError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Render upload interface after authentication
  return (
    <main className="min-h-screen w-full pt-24 pb-10 relative bg-gradient-to-r from-[#000] to-[#2196F352] bg-[#12191b]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Upload{" "}
            <span className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] bg-clip-text text-transparent">
              Image
            </span>
          </h1>
          <p className="text-[#87928f] text-lg font-semibold">
            Upload your images to Cloudinary
          </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 shadow-2xl">
          {uploadedImage ? (
            // Uploaded Success State
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <FiCheck className="text-5xl text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Upload Successful!
              </h2>
              <p className="text-[#87928f] mb-6">
                Your image has been uploaded to Cloudinary
              </p>

              <div className="relative rounded-xl overflow-hidden border border-white/10 mb-6">
                <Image
                  src={uploadedImage.url}
                  alt="Uploaded"
                  width={500}
                  height={400}
                  className="w-full h-80 object-contain bg-black/50"
                />
              </div>

              <div className="bg-black/30 rounded-xl p-4 mb-6">
                <p className="text-[#87928f] text-sm mb-2">Image URL:</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={uploadedImage.url}
                    readOnly
                    className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm overflow-hidden text-ellipsis"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className="bg-[#42A5F5] hover:bg-[#2196F3] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <ShimmerButton
                onClick={handleRemove}
                className="w-full py-4"
                borderRadius="10px"
                background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(33, 150, 243, 0.20), rgba(0, 0, 0, 0.00)), radial-gradient(42.95% 98.98% at 47.97% 100%, rgba(33, 150, 243, 0.50), rgba(0, 0, 0, 0.00)), #12191B"
              >
                <span className="flex items-center justify-center gap-2">
                  <FiImage className="text-xl" />
                  Upload Another Image
                </span>
              </ShimmerButton>
            </div>
          ) : (
            // Upload Interface
            <>
              <div
                {...getRootProps()}
                className={`
                  relative cursor-pointer border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300
                  ${
                    isDragActive
                      ? "border-[#42A5F5] bg-[#42A5F5]/10"
                      : isDragReject
                        ? "border-red-500 bg-red-500/10"
                        : "border-white/20 hover:border-[#42A5F5] hover:bg-[#42A5F5]/5"
                  }
                `}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center gap-4">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isDragActive ? "bg-[#42A5F5] scale-110" : "bg-white/10"
                    }`}
                  >
                    <FiUploadCloud
                      className={`text-4xl ${
                        isDragActive ? "text-white" : "text-[#42A5F5]"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-white text-xl font-semibold mb-2">
                      {isDragActive
                        ? "Drop the image here"
                        : "Drag & drop your image here"}
                    </p>
                    <p className="text-[#87928f]">
                      or click to select file (PNG, JPG, WEBP, GIF)
                    </p>
                  </div>
                </div>
              </div>

              {previewUrl && (
                <div className="mt-6">
                  <div className="relative inline-block w-full">
                    <div className="relative rounded-xl overflow-hidden border border-white/10">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        width={400}
                        height={300}
                        className="w-full h-64 object-contain bg-black/50"
                      />
                      <button
                        onClick={handleRemove}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <FiX className="text-white" />
                      </button>
                    </div>
                    <p className="text-[#87928f] mt-2 text-sm text-center">
                      {selectedFile?.name} (
                      {selectedFile
                        ? (selectedFile.size / 1024 / 1024).toFixed(2)
                        : "0"}{" "}
                      MB)
                    </p>
                  </div>

                  <div className="mt-6">
                    <ShimmerButton
                      onClick={handleUpload}
                      disabled={uploading}
                      className="w-full py-4 text-lg"
                      borderRadius="10px"
                      background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(33, 150, 243, 0.20), rgba(0, 0, 0, 0.00)), radial-gradient(42.95% 98.98% at 47.97% 100%, rgba(33, 150, 243, 0.50), rgba(0, 0, 0, 0.00)), #12191B"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {uploading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Uploading... {uploadProgress}%
                          </>
                        ) : (
                          <>
                            <FiUploadCloud className="text-xl" />
                            Upload to Cloudinary
                          </>
                        )}
                      </span>
                    </ShimmerButton>
                  </div>

                  {uploading && (
                    <div className="mt-4">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#42A5F5] to-[#64B5F6] transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
                  <p className="text-red-400 text-center">{error}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default UploadPage;
