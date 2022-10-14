import { VStack, AspectRatio, Text } from "@chakra-ui/react";

const VideoDetail = ({ video }) => {
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <VStack p={{ base: "0", md: "2" }} mb={{ base: "5", md: "0" }} w={{ base: "xs", md: "full" }} spacing='2'>
      <AspectRatio w={{ base: "360px", lg: "896px" }} h={{ base: "180px", lg: "504px" }}>
        <iframe title={video.snippet.title} src={videoUrl} />
      </AspectRatio>
      <VStack
        align='flexStart'
        p={{ base: "0", md: "2" }}
        w={{ base: "xs", md: "896px" }}
        position='relative'
        _before={{ content: '""', position: "absolute", borderTop: "2px", borderColor: "gray.300", top: "0", left: "0", width: "50%" }}
        borderBottom='1px'
        borderColor='gray.300'
      >
        <Text fontSize='sm' fontWeight='medium'>
          {video.snippet.title}
        </Text>
        <Text fontSize='sm' noOfLines='2'>
          {video.snippet.description}
        </Text>
      </VStack>
    </VStack>
  );
};

export default VideoDetail;
