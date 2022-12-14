import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // this is a default search term, homepage loads up with default term
    handleTermSubmit("Drake");
  }, []);

  const handleTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    if (res) {
      setVideos(res.data.items);
      setSelectedVideo(res.data.items[0]);
      console.log(res.data.items);
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Box>
      <SearchBar onSearchSubmit={handleTermSubmit} />
      <Flex
        py='5'
        pl={{ base: "8", md: "0" }}
        direction={{ base: "column", md: "row" }}
        overflow='hidden'
      >
        {selectedVideo ? <VideoDetail video={selectedVideo} /> : null}
        {videos.length > 0 ? <VideoList videos={videos} onVideoSelect={handleVideoClick} /> : null}
      </Flex>
    </Box>
  );
};

export default Home;
