import React, { useState } from "react";
import Image from "next/image";

const VideoContent = ({
  videoId,
  title,
  description,
}: {
  videoId: string;
  title: string;
  description: string;
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <h3 className="font-bold text-xl md:text-3xl text-neutral-700 dark:text-neutral-200 mb-4">
          {title}
        </h3>
        <p>{description}</p>
      </div>

      <div className="relative w-full aspect-video max-w-6xl mx-auto rounded-xl overflow-hidden">
        {!showVideo ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`${title} thumbnail`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-16 border-l-white ml-2"></div>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export const DummyContent = ({
  videoData,
}: {
  videoData?: { videoId: string; title: string; description: string };
}) => {
  // If no video data is provided, use default content
  if (!videoData || !videoData.videoId) {
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Click on the thumbnail to view video.
          </span>{" "}
          This content is a placeholder. Please provide video data to display
          the actual content.
        </p>
        <Image
          src="/api/placeholder/800/450"
          alt="Placeholder"
          height="450"
          width="800"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    );
  }

  return <VideoContent {...videoData} />;
};

export default DummyContent;
