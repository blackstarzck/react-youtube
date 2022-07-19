import React from 'react'
import styles from "./video_item.module.css"

const VideoItem = ({ video: { snippet } }) => { 
    // Deconstructing:
    // 1. props.video -> { video }
    // 2. props.video.snippet -> { video: { snippet } }

    return (
        <li className={styles.container}>
            <div className={styles.video}>
                <img  className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
                <div>
                    <p className={styles.title} >{snippet.title}</p>
                    <p className={styles.channel} >{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default VideoItem