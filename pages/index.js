import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import ContactUs from '@/components/ContactUs';
import Map from '@/components/Map';
import Tour from '@/components/Tour';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import WhyUs from '@/components/WhyUs';

const Home = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  useEffect(() => {
    const locale = Cookies.get('rebality-lang') || 'en';
    if (locale !== router.locale) {
      router.push(router.pathname, router.asPath, { locale });
    }
  }, [router]);


  return (
    <>
      {/* Start Header */}
      <Header />
      <BaseLayout>
        <AboutUs />
        <WhyUs />
        {/* TOUR */}
        <Tour />
        <section id="mu-callto-action">
          <div className="container">
            <div className="row col-md-12">
              <div className="mu-callto-action-area">
                <h2>{t('callto_action')}</h2>
              </div>
            </div>
          </div>
        </section>
        <ContactUs />
        <Map />
      </BaseLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['common']);

  // ...

  return {
    props: {
      ...translations,
      // ...
    }
  }
}

export default Home;