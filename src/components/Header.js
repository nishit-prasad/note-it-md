import { Flex, Heading, Box, Spacer, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex boxShadow={'lg'} p={4} rounder={'md'} my={2}>
      <Box p="2">
        <Heading size="md">Notes App</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
      </Box>
    </Flex>
  );
};

export default Header;
