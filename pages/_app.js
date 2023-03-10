
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import '@/public/style.css';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { getMeta } from '@/utils/constants';

function MyApp({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  const locale = Cookies.get('rebality-lang') || 'en';
  const { title, desc } = getMeta(locale);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="google-site-verification" content="Re3_VCnz63Fs9An8w1aorGsVYJtAzVe4NPqbiIYsMg0" />
        <meta name="description" content={desc} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);