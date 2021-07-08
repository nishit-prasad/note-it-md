import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Copyright } from './Copyright';
import { Logo } from './Logo';
import { SocialMediaLinks } from './SocialMediaLinks';

const Footer = () => (
  <Box
    as="footer"
    borderTop="2px"
    borderColor="gray.200"
    role="contentinfo"
    w="100%"
    p={4}
    marginBottom={2}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright
        color="gray.600"
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      />
    </Stack>
  </Box>
);

export default Footer;
