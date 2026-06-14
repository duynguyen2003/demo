"use client"
import { useEffect, useRef, useState } from "react";
import { mockVideo } from "../mock/videos";
import VideoCard from "./VideoCard";
import styles from "../css/VideoFeed.module.css";

export default function VideoFeed() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = entry.target.getAttribute("data-id");
            if (videoId) {
              setActiveVideoId(videoId);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    if (containerRef.current) {
      const children = containerRef.current.querySelectorAll("[data-id]");
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`${styles.feedContainer} no-scrollbar`}
    >
      {mockVideo.map((video) => (
        <div 
          key={video.id} 
          data-id={video.id} 
          className={styles.videoWrapper}
        >
          <VideoCard 
            video={video} 
            isActive={video.id === activeVideoId}
          />
        </div>
      ))}
    </div>
  );
}

