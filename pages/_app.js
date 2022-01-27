import { Provider } from 'next-auth/client';
import Head from 'next/head';
import Navbar from '../components/Navigation/Navbar';

import PageWrapper from '../layout/PageWrapper';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider session={pageProps.session}>
    <Navbar />
    <PageWrapper>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </PageWrapper>
  </Provider>

}

export default MyApp
