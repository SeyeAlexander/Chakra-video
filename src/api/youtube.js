import axios from "axios";

const KEY = "AIzaSyAuJy6lAlArSU-QYUiij-5mFBb2YCrTHZE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
