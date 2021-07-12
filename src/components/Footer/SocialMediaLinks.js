import { ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialMediaLinks = props => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <Tooltip label="LinkedIn Profile" placement="top">
      <IconButton
        color="teal"
        as="a"
        target="_blank"
        href="https://www.linkedin.com/in/nishitprasad/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="24px" />}
      />
    </Tooltip>
    <Tooltip label="Github Profile" placement="top">
      <IconButton
        color="teal"
        as="a"
        target="_blank"
        href="https://github.com/nishit-prasad/"
        aria-label="GitHub"
        icon={<FaGithub fontSize="24px" />}
      />
    </Tooltip>
  </ButtonGroup>
);
