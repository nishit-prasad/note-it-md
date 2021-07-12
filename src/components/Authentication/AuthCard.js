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
  CloseButton,
  Tooltip,
} from '@chakra-ui/react';
import LoginCard from './LoginCard';
import React from 'react';
import SignUpCard from './SignUpCard';

const AuthCard = props => {
  const { isCardOpen, closeCardHandler } = props;
  const [showLogin, setShowLogin] = React.useState(true);

  const showLoginHandler = () => setShowLogin(!showLogin);

  return (
    <ScaleFade initialScale={0.8} in={isCardOpen}>
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.600')}
        width={showLogin ? 'lg' : '5xl'}
      >
        <Stack bg="gray.100" width="inherit" px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'}>
              {`${showLogin ? 'Sign in to' : "Let's create"} your account`}
            </Heading>
            <Tooltip label="Close pop-up" placement="right">
              <CloseButton onClick={closeCardHandler} />
            </Tooltip>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={10}
          >
            {showLogin ? (
              <LoginCard handler={showLoginHandler} />
            ) : (
              <SignUpCard handler={showLoginHandler} isOpen={isCardOpen} />
            )}
          </Box>
        </Stack>
      </Flex>
    </ScaleFade>
  );
};

export default AuthCard;
