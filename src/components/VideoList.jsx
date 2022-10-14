import { VStack, Text } from "@chakra-ui/react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <VStack align='flexStart' p={{ base: "0", md: "2" }} w={{ base: "xs", md: "md" }} spacing='1'>
      <Text fontSize='md' fontWeight='medium'>
        Results
      </Text>
      {videos.map((video) => (
        <VideoItem video={video} onVideoSelect={onVideoSelect} />
      ))}
    </VStack>
  );
};

export default VideoList;
