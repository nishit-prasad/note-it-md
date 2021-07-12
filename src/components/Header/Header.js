import {
  Icon,
  Flex,
  Heading,
  Box,
  Spacer,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { HiOutlineBookmarkAlt } from 'react-icons/hi';

const Header = props => {
  const { buttonProps, heading, clickHandler } = props;

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
        <Heading userSelect="none" size="md" color="gray.600">
          {heading}
        </Heading>
      </Flex>
      <Spacer />
      <Box>
        <Tooltip label={`Click to ${buttonProps.buttonText}`} placement="left">
          <Button
            colorScheme="teal"
            mr="4"
            onClick={clickHandler}
            isDisabled={buttonProps.isDisabled}
          >
            {buttonProps.buttonText}
          </Button>
        </Tooltip>
      </Box>
    </Flex>
  );
};

export default Header;
