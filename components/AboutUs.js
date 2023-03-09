import Image from 'next/image';
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    const { t } = useTranslation('common');
    return (
        <section id="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-about-area">
                            {/* Start Feature Content */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mu-about-left">
                                        {/* Photo by fauxels: https://www.pexels.com/photo/photo-of-people-doing-handshakes-3183197/ */}
                                        <Image
                                            src="/assets/images/about-us.jpg"
                                            alt="img"
                                            width={640}
                                            height={427}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mu-about-right">
                                        <h2>{t('about.title')}</h2>
                                        <p>
                                            {t('about.body1')}
                                        </p>
                                        <p>
                                            {t('about.body2')}
                                        </p>
                                        <p>
                                            {t('about.body3')}
                                        </p>
                                        <p>
                                            {t('about.body4')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Content */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs