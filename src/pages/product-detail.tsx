import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProductDetailView } from 'src/sections/product-detail/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Products - ${CONFIG.appName}`}</title>
      </Helmet>

      <ProductDetailView />
    </>
  );
}
