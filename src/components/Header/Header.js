import { Icon, Flex, Heading, Box, Spacer, Button } from '@chakra-ui/react';
import { HiOutlineBookmarkAlt } from 'react-icons/hi';

const Header = () => {
  return (
    <Flex
      borderBottom="2px"
      borderColor="gray.200"
      p={4}
      rounder="md"
      marginTop={2}
    >
      <Flex p="2" alignItems={'center'}>
        <Icon color="teal" as={HiOutlineBookmarkAlt} w={8} h={8} />
        <Heading size="md" color="gray.600">
          Notes App
        </Heading>
      </Flex>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Sign in</Button>
      </Box>
    </Flex>
  );
};

export default Header;