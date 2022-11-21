import { Container } from "@chakra-ui/react";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Container maxW='8xl' mx='auto'>
      <Navbar />
      <Home />
    </Container>
  );
};

export default App;
