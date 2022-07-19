import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=AIzaSyDOXdIZUbW33bukkiyR18yCfNLmlW4p_c8", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items) )
      .catch(error => console.log('error', error));


  }, []);
  // 1. useEffect의 두번째 인자값이 있을때
  // 인자값인 state가 업데이트될 때 마다 호출된다.
  // 인자값이 공백, 빈배열일때 1회성으로 호출된다.

  // 2. useEffect의 두번째 인자값이 없을때
  // mound, update될때 마다 호출된다.

  return (
    <VideoList videos={videos}/>
  );
}

export default App;
