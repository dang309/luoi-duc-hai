import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { Box, Stack, Button, Container, Typography } from '@mui/material';

export function Contact() {
  return (
    <Container id="contact-info" sx={{ py: 4 }}>
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        color="primary"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Thông tin liên hệ
      </Typography>
      <Stack spacing={2}>
        <Button variant="text" color="info" startIcon={<LocalPhoneRoundedIcon />}>
          0903 965 919 (Zalo)
        </Button>
        <Box sx={{ height: { xs: '512px' } }}>
          <iframe
            title="Cơ sở Lưới cước Đức Hải"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3988530033444!2d106.58684777481916!3d10.857237757698378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b94c3196149%3A0xaf595680021c483d!2zQ8ahIHPhu58gbMaw4bubaSDEkOG7qWMgaOG6o2k!5e0!3m2!1svi!2s!4v1723688632171!5m2!1svi!2s"
            loading="lazy"
            style={{ height: '100%', width: '100%', border: 0, borderRadius: '16px' }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
