import { Tooltip, Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

const GoogleAuth = ({ label, operation, toolTipPlaceholder }) => {
  return (
    <Tooltip
      label={`${
        operation === 'create' ? 'Create' : 'Login'
      } using your existing Google account`}
      placement={toolTipPlaceholder}
    >
      <Button
        mx={2}
        colorScheme="teal"
        rounded="lg"
        variant="outline"
        as="a"
        href="#"
        aria-label={`Google ${label}`}
        leftIcon={<FcGoogle />}
      >
        {`Google ${label}`}
      </Button>
    </Tooltip>
  );
};

export default GoogleAuth;
