import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Flex,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import GoogleAuth from '../Buttons/GoogleAuth';

const LoginCard = props => {
  const { handler } = props;
  const [invalid, setInvalid] = React.useState(false);
  const validateEmail = email => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };

  const validationHandler = e => setInvalid(!validateEmail(e.target.value));

  return (
    <Stack spacing={2}>
      <FormControl
        id="email"
        isInvalid={invalid}
        focusBorderColor={invalid ? 'crimson' : ''}
        onChange={validationHandler}
        isRequired
      >
        <FormLabel>Email address</FormLabel>
        <Input
          placeholder="Enter a valid email"
          variant="flushed"
          type="email"
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input placeholder="***" variant="flushed" type="password" />
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
          <Flex justify="space-evenly">
            <Button colorScheme="teal">Sign in</Button>
            <GoogleAuth
              label="Sign In"
              operation="login"
              toolTipPlaceholder="bottom"
            />
            <Button colorScheme="teal" onClick={handler}>
              New? Sign Up!
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginCard;
