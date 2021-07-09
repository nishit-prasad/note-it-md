import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  ScaleFade,
  IconButton,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';

const AuthCard = props => {
  const { isOpen } = props;

  return (
    <ScaleFade initialScale={0.8} in={isOpen}>
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.600')}
      >
        <Stack bg="gray.100" spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={10}
          >
            <Stack spacing={2}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input variant="flushed" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input variant="flushed" type="password" />
              </FormControl>
              <Stack fontSize="md" spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  justify={'space-around'}
                >
                  <Checkbox colorScheme="teal">Remember me</Checkbox>
                  <Link color="blue.400" _hover={{ color: 'blue.600' }}>
                    Forgot password?
                  </Link>
                </Stack>
                <Stack>
                  <Flex justify="space-around">
                    <Button colorScheme="teal">Sign Up</Button>
                    <Button colorScheme="teal">Sign in</Button>
                    <IconButton
                      colorScheme="teal"
                      size="md"
                      rounded="lg"
                      variant="outline"
                      as="a"
                      target="_blank"
                      href="#"
                      aria-label="Google Sign-In"
                      icon={<FcGoogle />}
                    />
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ScaleFade>
  );
};

export default AuthCard;
