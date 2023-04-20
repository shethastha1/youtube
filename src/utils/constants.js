const GOOGLE_API_KEY = "AIzaSyCKKVc4koM1-kjhJ3_07gksvQ91GRmlxvA";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEO_DETAILS = (searchString) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchString}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_DETAILS = (searchString) =>
  `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchString}`;
