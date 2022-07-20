import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = useCallback(query => { // 많이 사용하는 것은 좋지 않다. 메모리에 계속보관하기 때문에 메모리에 영향이 간다.
    setSelectedVideo(null); // 초기화

    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  }, []);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]); // 두번째 인자에 빈배열을 넣음으로써 1회 렌더링 된다.
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />

      <section className={styles.content}>
        {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>
        )}
        <div className={styles.list}>
            <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? "list" : "grid"}/>
        </div>
      </section>
    </div>
  );
}

export default App;
