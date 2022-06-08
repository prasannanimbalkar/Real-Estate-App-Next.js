import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>

      <Box maxWidth='1280px' m='auto'>

        <header>
          <Navbar />
        </header>

        <main>{children}</main>
        {/* children prop passed on in layout function */}
        {/* whatever we pass in <Layout> <H1></H1> </Layout> will be rendered in childern */}

        <footer>
          <Footer />
        </footer>
        
      </Box>
    </>
  );
}
