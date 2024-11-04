import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const imgSources = [
  'https://www.danguyen.site/_next/image?url=%2Fassets%2Fhome%2Fimage2.jpg&w=3840&q=75',
  'https://www.danguyen.site/_next/image?url=%2Fassets%2Fhome%2Fimage2.jpg&w=3840&q=75',
  'https://www.danguyen.site/_next/image?url=%2Fassets%2Fhome%2Fimage2.jpg&w=3840&q=75',
  'https://www.danguyen.site/_next/image?url=%2Fassets%2Fhome%2Fimage2.jpg&w=3840&q=75',
];

const StyledBox = styled('div')<{ imgSrc: string }>(({ theme, imgSrc }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(4),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  backgroundImage: `url(${imgSrc})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 512,
  },
}));

export default function Hero() {
  const goToContactSection = () => {
    const el = document.querySelector('#contact-info');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(134 76% 82%), transparent)',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Lưới&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Đức Hải
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Tự hào là nhà sản xuất lưới nông nghiệp hàng đầu tại Việt Nam với trên 20 năm kinh
            nghiệm. Chúng tôi cam kết mang đến các sản phẩm chất lượng cao, bền bỉ, giúp bà con nông
            dân canh tác an toàn và hiệu quả hơn.
          </Typography>
          <Stack
            direction="column"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px', md: '512px' } }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={goToContactSection}
              sx={{ minWidth: 'fit-content' }}
            >
              Liên hệ ngay
            </Button>
          </Stack>
        </Stack>
        <Swiper
          navigation
          loop
          centeredSlides
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          style={{ width: '100%' }}
        >
          {imgSources.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <StyledBox className="image" imgSrc={imgSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
