import { VStack, Text } from "@chakra-ui/react";
import VideoItem from "./VideoItem";
import React from "react";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <VStack
      align='flexStart'
      p={{ base: "0", md: "2" }}
      w={{ base: "xs", md: "md" }}
      spacing='1'
      _hover={{ cursor: "pointer" }}
    >
      <Text fontSize='md' fontWeight='medium'>
        Results
      </Text>
      {videos.map((video) => (
        <React.Fragment key={video.etag}>
          <VideoItem video={video} onVideoSelect={onVideoSelect} />
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default VideoList;
