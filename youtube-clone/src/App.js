import './App.css';
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('youtubeData :',youtubeData);
  console.log('영상 아이디 : ', youtubeData['data'][1]['id']);
  console.log('채널 아이디 : ', youtubeData['data'][1]['channelId']);
  console.log('업로드 날짜 : ', youtubeData['data'][1]['date']);
  console.log('영상 제목 : ', youtubeData['data'][1]['title']);
  console.log('영상 썸네일 : ', youtubeData['data'][1]['thumbnail']);
  console.log('영상 정보 : ', youtubeData['data'][1]['description']);
  console.log('채널명 : ', youtubeData['data'][1]['channelTitle']);
  console.log('카테고리 : ', youtubeData['data'][1]['category']);
  console.log('조회수 : ', youtubeData['data'][1]['viewCount']);
  console.log('좋아요수 : ', youtubeData['data'][1]['likeCount']);
  console.log('채널 주소 : ', youtubeData['data'][1]['channelUrl']);
  console.log('채널 썸네일 : ', youtubeData['data'][1]['channelThumbnail']);
  return <div>리액트로 데이터 불러오기</div>;
}

export default App;
