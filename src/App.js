import {
  Flex,
  Center,
  useDisclosure,
  ScaleFade,
  Heading,
} from '@chakra-ui/react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthCard from './components/Authentication/AuthCard';

const App = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex w="full" h="100vh" direction="column" justifyContent="space-between">
      <Header click={onToggle} />
      <Center bg="gray.100" h="100vh" color="gray.600" fontSize="4xl">
        {isOpen ? (
          <AuthCard isOpen={isOpen} />
        ) : (
          <ScaleFade initialScale={0.8} in={!isOpen}>
            <Heading userSelect="none" fontSize={'4xl'}>
              Welcome to Notes App!
            </Heading>
          </ScaleFade>
        )}
      </Center>
      <Footer />
    </Flex>
  );
};

export default App;
