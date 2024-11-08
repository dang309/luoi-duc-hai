import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  status: string;
  coverUrl: string;
  colors: string[];
  priceSale: number | null;
};

export function ProductItem({ product }: { product: ProductItemProps }) {
  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.coverUrl}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  return (
    <Card>
      <CardActionArea LinkComponent={RouterLink} href={`/san-pham/${product.name}`}>
        <Box sx={{ pt: '100%', position: 'relative' }}>{renderImg}</Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
            {product.name}
          </Link>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
