import React from 'react'
import { useTranslation } from 'react-i18next'

const WhyUs = () => {
    const { t } = useTranslation('common');
    return (
        <section id="why-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-why-us-area">
                            <h2>{t('our-advantages.title')}</h2>
                            <div className="mu-why-us-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">
                                                <i className="fa fa-thumbs-up" aria-hidden="true" />
                                            </div>
                                            <h3>{t('our-advantages.service.title')}</h3>
                                            <p>
                                                {t('our-advantages.service.body')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">
                                                <i className="fa fa-plane" aria-hidden="true" />
                                            </div>
                                            <h3>{t('our-advantages.experience.title')}</h3>
                                            <p>
                                                {t('our-advantages.experience.body')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mu-why-us-single">
                                            <div className="my-why-us-single-icon">
                                                <i className="fa fa-usd" aria-hidden="true" />
                                            </div>
                                            <h3>{t('our-advantages.price.title')}</h3>
                                            <p>
                                                {t('our-advantages.price.body')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3' >
                                    <h4>
                                        {t('our-advantages.footer1')}<br />
                                        {t('our-advantages.footer2')}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs