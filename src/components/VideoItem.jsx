import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const handleClick = () => {
    onVideoSelect(video);
  };

  return (
    <Flex
      w={{ base: "xs", md: "370px" }}
      align='center'
      onClick={handleClick}
      p='1'
      mb='2'
      borderBottom='1px'
      borderColor='gray.400'
    >
      <Image
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.description}
        pr='1'
        w='100px'
      />
      <Text fontSize='xs'>{video.snippet.title}</Text>
    </Flex>
  );
};

export default VideoItem;
