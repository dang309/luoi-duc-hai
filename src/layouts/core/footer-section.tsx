import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/X';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { RouterLink } from 'src/routes/components';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link
        component={RouterLink as React.ElementType}
        color="text.secondary"
        href="https://www.linkedin.com/in/dangn309"
        target="_blank"
      >
        Dang Nguyen
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export function FooterSection() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 4, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'center' }}
        spacing={4}
        sx={{ width: '100%' }}
      >
        <Typography variant="h3" component="h3" sx={{ color: 'grey.600', width: '100%' }}>
          Cơ sở lưới cước Đức Hải
        </Typography>

        <Stack
          direction="row"
          spacing={{ sm: 16 }}
          justifyContent={{
            xs: 'space-between',
            sm: 'flex-end',
          }}
          sx={{ width: '100%' }}
        >
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Chính sách
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Chính sách giao hàng
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Dành cho đại lý
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Tin tức - Kiến thức
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Lợi ích của nhà lưới
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Kỹ thuật của nhà lưới
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Khách hàng
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Hội nhà lưới
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Hội nông nghiệp
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
