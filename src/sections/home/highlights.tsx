import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: '20+ năm kinh nghiệm',
    description: 'Chúng tôi mang đến sản phẩm chất lượng cao, đáng tin cậy cho khách hàng.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Giao hàng toàn quốc',
    description: 'Dịch vụ giao hàng nhanh chóng và tiện lợi trên khắp cả nước.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Chất lượng hàng đầu',
    description: 'Cam kết mang đến những sản phẩm với chất lượng tốt nhất.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Hỗ trợ khách hàng 24/7',
    description: 'Đội ngũ hỗ trợ luôn sẵn sàng phục vụ bạn bất kể thời gian nào.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Tiết kiệm tối đa chi phí',
    description: 'Giải pháp tiết kiệm chi phí tối đa mà vẫn đảm bảo hiệu quả cao.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Công nghệ hiện đại',
    description: 'Ứng dụng công nghệ tiên tiến vào quy trình sản xuất và phân phối.',
  },
];

export function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h2" gutterBottom>
            Tại sao chọn chúng tôi ?
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.600' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
