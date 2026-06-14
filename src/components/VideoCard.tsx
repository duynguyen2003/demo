// src/components/VideoCard.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { VideoData } from "../mock/videos";
import styles from "../css/VideoCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faHeart, faCommentDots, faShare, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface VideoCardProps {
  video: VideoData;
  isActive: boolean;
}

export default function VideoCard({ video, isActive }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(video.likesCount);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);


  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Tự động phát bị chặn bởi chính sách trình duyệt:", error);
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Phát video thất bại:", error);
        });
    }
  };

  const toggleLike = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (isLike) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setIsLike(!isLike);
  };

  const doubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLike) {
      setLikesCount((prev) => prev + 1);
      setIsLike(true);
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 800);
  };

  return (
    <div 
      className={styles.card}
      onDoubleClick={doubleClick}
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        className={styles.videoElement}
        onClick={togglePlay}
        loop
        playsInline
        muted
      />
      <div 
        onClick={togglePlay}
        className={`${styles.playOverlay} ${isPlaying ? styles.isPlaying : ""}`}
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
        <button 
          onClick={toggleLike}
          className={styles.actionItem}
        >
          <div className={`${styles.iconHeart} ${isLike ? styles.iconHeartActive : ""}`}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <span className={styles.countLabel}>{likesCount}</span>
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

      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={styles.floatingHeart}
          style={{ left: heart.x, top: heart.y }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </span>
      ))}
    </div>
  );
}

