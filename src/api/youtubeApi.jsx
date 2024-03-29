export const API_KEY = "AIzaSyDpo1dINQgWbGRloNyuad6sJPgDUy_MJVM";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const YOUTUBE_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=${API_KEY}`;
