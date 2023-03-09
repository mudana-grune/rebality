import { APP_NAME, WA_NUM, WA_URL } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
    const { t } = useTranslation('common');

    const composeMessage = () => {
        const header = `*##${APP_NAME}*`;
        const line1 = t('hello');
        const message = `${header}\n\n${line1} `;
        return encodeURIComponent(message);
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const message = composeMessage();
        const uri = `${WA_URL}?text=${message}`;
        window.open(uri, '_blank').focus()
    }

    return (
        <header id="mu-hero">
            <div className="container">
                <div className="mu-hero-area px-3">
                    <div className="mu-hero-top">
                        {/* Start center Logo */}
                        <div className="mu-logo-area">
                            <Link className="" href="/" />
                            <Image src="/assets/images/logo.png" alt="logo img" width={80} height={80} />
                            <Link className="mu-logo" href="/">
                                {APP_NAME}
                                <span>Discover the Authentic Bali</span>
                            </Link>
                        </div>
                        {/* End center Logo */}
                        <div className="mu-hero-top-info">
                            <ul>
                                <li>
                                    <div className="mu-telephone">
                                        <Link href={'#'} onClick={sendMessage}>
                                            <i className="fa fa-whatsapp" aria-hidden="true" />
                                            <span className='pl-1'>{WA_NUM}</span>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Start hero featured area */}
                    <div className="mu-hero-featured-area">
                        <div className="mu-hero-featured-content">
                            <h2>{t('welcome', { target: APP_NAME })}</h2>
                            <h1>{t('hero.title')}</h1>
                            <p>
                                {t('hero.body')}
                            </p>
                            <a href="#" className="mu-book-now-btn">
                                {t('book-now').toUpperCase()}
                            </a>
                            <div className="mu-scrolldown-area">
                                <ScrollLink
                                    className="mu-scrolldown"
                                    id="mu-scrolldown"
                                    to="about-us"
                                    smooth={true}
                                    duration={500}
                                    href={'#about-us'}
                                >
                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                    {/* End hero featured area */}
                </div>
            </div>
        </header>
    )
}

export default Header