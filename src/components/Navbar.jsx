import { useColorMode, Box, Flex, Spacer, Heading, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box maxW='7xl' mx='auto' py='4'>
      <Flex alignItems='center' gap='2'>
        <Box p='1'>
          <Heading size='md'>Video Chakra</Heading>
        </Box>
        <Spacer />
        <Box p='1'>
          <IconButton
            icon={colorMode === "light" ? <MoonIcon w={4} h={4} /> : <SunIcon w={4} h={4} />}
            onClick={toggleColorMode}
            variant='ghost'
            colorScheme='teal'
            boxSize='35px'
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
