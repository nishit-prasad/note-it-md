import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import GoogleAuth from '../Buttons/GoogleAuth';

const SignUpCard = props => {
  const { handler } = props;
  const [invalid, setInvalid] = React.useState(false);
  const validateEmail = email => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };

  const validationHandler = e => setInvalid(!validateEmail(e.target.value));

  const formFields = [
    {
      id: 'email',
      isInvalid: invalid,
      focusBorderColor: invalid ? 'crimson' : '',
      onChange: validationHandler,
      isRequired: true,
      marginRight: '5',
      children: {
        formLabel: {
          label: 'Email Address',
        },
        input: {
          placeholder: 'Enter a valid email',
          variant: 'flushed',
          type: 'email',
        },
      },
    },
    {
      id: 'name',
      marginLeft: '5',
      children: {
        formLabel: {
          label: 'Full Name',
        },
        input: {
          placeholder: 'Joe Smith',
          variant: 'flushed',
        },
      },
    },
    {
      id: 'password',
      marginRight: '5',
      children: {
        formLabel: {
          label: 'Password',
        },
        input: {
          placeholder: '***',
          variant: 'flushed',
          type: 'password',
        },
      },
    },
    {
      id: 're-password',
      marginLeft: '5',
      children: {
        formLabel: {
          label: 'Re-Enter Password',
        },
        input: {
          placeholder: '***',
          variant: 'flushed',
          type: 'password',
        },
      },
    },
  ];

  const dobFields = [
    {
      id: 'year',
      marginRight: 5,
      children: {
        formLabel: {
          label: 'YYYY',
        },
        input: {
          min: 1950,
          max: new Date().getFullYear(),
        },
      },
    },
    {
      id: 'month',
      marginRight: 5,
      children: {
        formLabel: {
          label: 'MM',
        },
        input: {
          min: 1,
          max: 12,
        },
      },
    },
    {
      id: 'day',
      width: 'fit-content',
      minHeight: 'fit-content',
      children: {
        formLabel: {
          label: 'DD',
        },
        input: {
          min: 1,
          max: 31,
        },
      },
    },
  ];

  const getFields = fieldsArr =>
    formFields
      .filter(field => fieldsArr.includes(field.id))
      .map(field => {
        return (
          <FormControl key={field.id} {...field}>
            <FormLabel my={0}>{field.children.formLabel.label}</FormLabel>
            <Input {...field.children.input} />
          </FormControl>
        );
      });

  return (
    <Stack spacing={2}>
      <Flex>{getFields(['email', 'name'])}</Flex>
      <Flex>{getFields(['password', 're-password'])}</Flex>
      <Flex>{getFields(['password', 're-password'])}</Flex>

      <Stack>
        <Flex marginTop={5}>
          <Button mx={2} colorScheme="teal">
            Submit
          </Button>
          <GoogleAuth
            label="Sign Up"
            operation="create"
            toolTipPlaceholder="bottom"
          />
          <Button mx={2} colorScheme="teal" onClick={handler}>
            Existing Account? Sign in.
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default SignUpCard;
