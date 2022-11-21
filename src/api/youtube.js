import axios from "axios";

// Insert Api key string here
const KEY = "AIzaSyD7kp7hViQeZGC0ond_X5jWgjp32EmlzDw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
