import type Swiper from 'swiper';

import { useState } from 'react';
import { Thumbs, FreeMode } from 'swiper/modules';
import { SwiperSlide, Swiper as ReactSwiper } from 'swiper/react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Stack, Divider, Container } from '@mui/material';

// ----------------------------------------------------------------------

export function ProductDetailView() {
  const [thumb, setThumb] = useState<Swiper | null>(null);

  return (
    <Container sx={{ pt: { xs: 14, sm: 16 }, pb: { xs: 8, sm: 12 } }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Chi tiết sản phẩm
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={4}>
          <Stack spacing={2}>
            <ReactSwiper
              spaceBetween={10}
              thumbs={{ swiper: thumb && !thumb.destroyed ? thumb : null }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </ReactSwiper>
            <ReactSwiper
              onSwiper={setThumb}
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </ReactSwiper>
          </Stack>
        </Grid>

        <Divider />

        <Grid xs={12} sm={6} md={6} lg={6}>
          <Stack spacing={1} divider={<Divider />}>
            <Typography variant="h6" component="h6">
              Product&apos;s name
            </Typography>
            <Typography variant='subtitle2' color='grey.600'>
              Kích thước: - Chiều rộng khổ: 1.0m, 1.2m, 1.4m, 1.8m, 2.1m, 2.5m, 2.7m, 3.3m, 4.2m -
              Chiều dài khổ: 15m, 20m, 30m (Điều chỉnh theo yêu cầu) Quy cách: ưới chắn công trùng
              16 mesh : khoảng 40 ô/cm2 Lưới chắn côn trùng 18 mesh : khoảng 45 ô/cm2 Lưới chắn côn
              trùng 24 mesh : khoảng 60 ô/cm2 Lưới chắn công trùng 32 mesh : khoảng 80 ô/cm2 Lưới
              chắn côn trùng 50 mesh : khoảng 200 ô/cm2
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
