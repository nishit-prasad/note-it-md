import { ButtonGroup, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialMediaLinks = props => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      color="teal"
      as="a"
      target="_blank"
      href="https://www.linkedin.com/in/nishitprasad/"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="24px" />}
    />
    <IconButton
      color="teal"
      as="a"
      target="_blank"
      href="https://github.com/nishit-prasad/"
      aria-label="GitHub"
      icon={<FaGithub fontSize="24px" />}
    />
  </ButtonGroup>
);
