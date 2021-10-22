import { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Fragment>
  ) 
}

export default MyApp
