// src/components/VideoCard.tsx
"use client";
import { useRef, useState } from "react";
import { VideoData } from "../mock/videos";
import styles from "../css/VideoCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faHeart, faCommentDots, faShare, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface VideoCardProps {
  video: VideoData;
}

export default function VideoCard({ video }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.card}>
      <video
        ref={videoRef}
        src={video.videoUrl}
        className={styles.videoElement}
        onClick={handleVideoClick}
        loop
      />
      <div 
        className={`${styles.playOverlay} ${isPlaying ? styles.isPlaying : ""}`} 
        onClick={handleVideoClick}
      >
        {isPlaying ? (
          <span className={styles.pauseIcon}>
            <FontAwesomeIcon icon={faPause} />
          </span>
        ) : (
          <span className={styles.playIcon}>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        )}
      </div>
      {/*tên tác giả và mô tả video*/}
      <div className={styles.info}>
          <h3 className={styles.author}>
            {video.authorName}
            <FontAwesomeIcon icon={faCircleCheck} className={styles.verifiedIcon} />
          </h3>
          <p className={styles.description}>{video.description}</p>
      </div>
      {/*thanh action (like, comment, share,...)*/}
      <div className={styles.actionBar}>
        <button className={styles.actionItem}>

          <div className ={styles.iconHeart}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <span className={styles.countLabel}>{video.likesCount}</span>
        </button>
        
         <div className={styles.actionItem}>
            <div className={styles.ItemComment}>
                <FontAwesomeIcon icon={faCommentDots} />
            </div>
         </div>
         
         <div className={styles.actionItem}>
            <div className={styles.ItemShare}>
                <FontAwesomeIcon icon={faShare} />
            </div>
         </div>

      </div>
    </div>
  );
}

