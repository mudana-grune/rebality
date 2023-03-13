import { APP_NAME, WA_URL } from '@/utils/constants'
import { tours } from '@/utils/tours'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import TourPlanner from './TourPlanner'

const Tour = () => {
    const { t } = useTranslation('common');

    const composeMessage = (tour) => {
        const header = `##*${APP_NAME}*`;
        const line1 = `${t('hello')} ${APP_NAME}`;
        const line2 = t('booking_body', { target: tour.name });
        const fullMessage = `${header}\n\n${line1}\n${line2}`;
        return encodeURIComponent(fullMessage);
    }

    const sendBooking = (e, tour) => {
        e.preventDefault();
        const message = composeMessage(tour);
        const uri = `${WA_URL}?text=${message}`;
        window.open(uri, '_blank').focus()
    }
    return (
        <section id="mu-featured-tours">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-featured-tours-area">
                            <h2>{t('tour')}</h2>
                            <p className="mu-title-content">
                                {t('tour_desc')}
                            </p>
                            {/* Start Featured Tours content */}
                            <div className="mu-featured-tours-content">
                                <div className="row">
                                    {tours.map((tour, index) => {
                                        return (
                                            <div className="col-md-6 col-lg-4" key={index}>
                                                <div className="mu-featured-tours-single">
                                                    <figure className='figure'>
                                                        <Image src={`/assets/images/tours/${tour.image ?? '/assets/images/dubai.jpg'}`} alt="img" width={350} height={260} />
                                                        <figcaption className='figure-caption text-left' dangerouslySetInnerHTML={{ __html: tour.imageCredit }} />
                                                    </figure>
                                                    <div className="mu-featured-tours-single-info">
                                                        <h3>{`${tour.name} Tour`}</h3>
                                                        <ul className='pt-2'>
                                                            {tour.destinations.map((dest, idx) => {
                                                                return (
                                                                    <li key={idx}>{dest}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>

                                                    <h4 className="mu-price-tag" style={{ fontWeight: 'bold' }}>{tour.price}</h4>
                                                    <Link href={'#'} className="mu-book-now-btn" onClick={(e) => sendBooking(e, tour)}>
                                                        {t('book-now')}
                                                    </Link>

                                                </div>

                                            </div>

                                        );
                                    })}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="mu-featured-tours-single">

                                            <div className='more-tour-package'>
                                                <div className='center'>
                                                    <h4>{t('more_package')}</h4>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* End Featured Tours content */}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <TourPlanner />
                </div>
            </div>
        </section>
    )
}

export default Tour