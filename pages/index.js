import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import ContactUs from '@/components/ContactUs';
import Map from '@/components/Map';
import Tour from '@/components/Tour';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import WhyUs from '@/components/WhyUs';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { APP_NAME, WA_NUM } from '@/utils/constants';


const Home = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [waOpen, setWaOpen] = useState(false);

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
      <FloatingWhatsApp
        accountName={`${APP_NAME} - Admin`}
        phoneNumber={WA_NUM}
        darkMode={true}
        notification={true}
        notificationLoop={1}
        notificationDelay={20}
        notificationSound={false}
        allowClickAway={true}
        allowEsc={true}
        statusMessage={t('wa_status')}
        placeholder={t('wa_placeholder')}
        chatMessage={t('wa_chat')}
        avatar={'/assets/images/logo.png'}
        buttonStyle={{ left: '2rem' }}
        chatboxClassName={`${waOpen ? 'open' : 'close'} chatbox`}
        onClick={() => setWaOpen(true)}
        onClose={() => setWaOpen(false)}
      />
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