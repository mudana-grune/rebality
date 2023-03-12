import Cookies from "js-cookie";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from '../next-i18next.config';
import TocModal from "./TocModal";
import { APP_NAME } from "@/utils/constants";
import Image from "next/image";


export default function Nav() {
    const { t } = useTranslation();
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(i18n.language === 'en');
    const [showNavbar, setShowNavbar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const btn = useRef();


    const closeMenu = () => {
        btn.current.click();
    }

    const handleShowModal = (e) => {
        e.preventDefault();
        closeMenu();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    useEffect(() => {
        if (router.asPath === '/') {
            setShowNavbar(false);
        }
    }, [router.asPath]);

    useEffect(() => {
        if (router.asPath === '/') {
            function handleScroll() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 50) {
                    setShowNavbar(true);
                } else {
                    setShowNavbar(false);
                }
            }

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, [router.asPath]);

    useEffect(() => {
        const curLang = Cookies.get('rebality-lang') || 'en';
        const checked = curLang === 'en';
        setIsChecked(!checked);
    }, []);

    const changeLanguageHandler = useCallback(() => {
        closeMenu();
        setIsChecked(prevCheck => !prevCheck);
        const locale = isChecked ? 'en' : 'id';
        Cookies.set('rebality-lang', locale);
        router.push(router.pathname, router.asPath, { locale });
    }, [isChecked, router]);

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-top bg-transparent ${showNavbar ? 'navbar-show' : ''}`} tabIndex={-1}>
                <div className="mu-logo-area">
                    <Link href={'/'}>
                        <Image src="/assets/images/logo.png" alt="logo img" width={60} height={60} />
                    </Link>
                    <Link className='mu-logo' href={'/'}>
                        {APP_NAME}
                        <span>Discover the Authentic Bali</span>
                    </Link>
                </div>
                <button
                    ref={btn}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className='nav-link' href={'/'} onClick={closeMenu}>{t('home')}</Link>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="about-us"
                                smooth={true}
                                duration={500}
                                href={'#about-us'}
                                offset={-80}
                                onClick={closeMenu}
                            >
                                {t('about-us')}
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="why-us"
                                smooth={true}
                                duration={500}
                                href={'#why-us'}
                                offset={-100}
                                onClick={closeMenu}
                            >
                                {t('advantages')}
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="mu-featured-tours"
                                smooth={true}
                                duration={500}
                                href={'#mu-featured-tours'}

                                onClick={closeMenu}
                            >
                                {t('tour_navlink')}
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                className="nav-link"
                                to="contact"
                                smooth={true}
                                duration={500}
                                href={'#contact'}
                                offset={-80}
                                onClick={closeMenu}
                            >
                                {t('contact.contact_us')}
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' href={'#'} onClick={handleShowModal}>{t('toc')}</Link>
                        </li>
                        <li className='nav-item'>
                            <div className="switch mt-1">
                                <input id="language-toggle" checked={isChecked} onChange={changeLanguageHandler} className="check-toggle check-toggle-round-flat" type="checkbox" />
                                <label htmlFor="language-toggle"></label>
                                <span className="on">EN</span>
                                <span className="off">ID</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <TocModal show={showModal} onHide={handleCloseModal} />
        </>

    )
}