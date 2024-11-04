import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png',
  'https://upload.wikimedia.org/wikipedia/vi/9/9d/Logo_Vietinbank.png',
  'https://upload.wikimedia.org/wikipedia/vi/8/85/Vietcombank_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asia_Commercial_Bank_logo.svg/1200px-Asia_Commercial_Bank_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/vi/thumb/3/3d/Argibank_logo.svg/440px-Argibank_logo.svg.png',
];

const logoStyle = {
  width: '128px',
  height: 'auto',
  margin: '0 32px',
};

export default function LogoCollection() {
  return (
    <Stack id="logoCollection" spacing={2} sx={{ py: 4 }}>
      <Typography
        component="h6"
        variant="h6"
        align="center"
        gutterBottom
        sx={{ color: 'text.secondary' }}
      >
        Đối tác của chúng tôi
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.7 }}>
        {logos.map((logo, index) => (
          <Grid key={index} xs={6} sm={4} lg={2}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ height: '100%', width: '100%' }}
            >
              <img src={logo} alt={`Fake company number ${index + 1}`} style={logoStyle} />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
