import { useColorMode, Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems='center' justify='space-between' w='full'>
      <Box p='2'>
        <Heading size='md'>Chakra Video</Heading>
      </Box>
      <Box p='1'>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon w={4} h={4} /> : <SunIcon w={4} h={4} />}
          onClick={toggleColorMode}
          variant='ghost'
          colorScheme='teal'
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
