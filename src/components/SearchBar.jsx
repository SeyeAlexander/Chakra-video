import { useState } from "react";
import { Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <Box mx='auto' maxW='lg' p={2} mb={8}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel fontSize='md'>Get a Video</FormLabel>
          <InputGroup size='md'>
            <Input type='text' required placeholder='Please enter a title' variant='filled' value={term} onChange={(e) => setTerm(e.target.value)} />

            <InputRightElement>
              <IconButton colorScheme='teal' size='xs' icon={<SearchIcon />} type='submit' />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchBar;
