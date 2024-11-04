import { Stack, Divider } from '@mui/material';

import Hero from '../hero';
import Features from '../features';
import { Contact } from '../contact';
import { Highlights } from '../highlights';
import LogoCollection from '../logo-collection';

export function HomeView() {
  return (
    <Stack>
      <Hero />
      <Stack>
        <Highlights />

        <Divider />

        <Features />

        <Divider />

        <LogoCollection />

        <Divider />

        <Contact />
      </Stack>
    </Stack>
  );
}
