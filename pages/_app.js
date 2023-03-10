
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import '@/public/style.css';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { getMeta } from '@/utils/constants';
import { DefaultSeo } from 'next-seo';

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
      <DefaultSeo
        title={title}
        description={desc}
      />
      <Head>
        <meta name="google-site-verification" content="Re3_VCnz63Fs9An8w1aorGsVYJtAzVe4NPqbiIYsMg0" />
      </Head>
      <Component {...pageProps} />
    </>

  )
}

export default appWithTranslation(MyApp);