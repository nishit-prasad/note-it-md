import { Flex, Center } from '@chakra-ui/react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Flex w="full" h="100vh" direction="column" justifyContent="space-between">
      <Header />
      <Center bg="gray.100" h="100%" color="gray.600" fontSize="4xl">
        Welcome to Notes App!
      </Center>
      <Footer />
    </Flex>
  );
};

export default App;
