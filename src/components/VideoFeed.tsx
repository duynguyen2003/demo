"use client"
import { mockVideo } from "../mock/videos";
import VideoCard from "./VideoCard";
import styles from "../css/VideoFeed.module.css";


export default function VideoFeed() {
    return(
        <div className={`${styles.feedContainer} no-scrollbar`}>
             {mockVideo.map((video)=> ( 
                <div key = {video.id} className={styles.videoWrapper}>
                    <VideoCard video={video}/>
                </div>
             ))} 
        </div>
    );
}

