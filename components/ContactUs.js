import { APP_NAME, WA_URL } from '@/utils/constants';
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t } = useTranslation('common');
    const [successSubmit, setSuccessSubmit] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [inputValid, setInputValid] = useState(false);

    const composeMessage = () => {
        const header = `*##${APP_NAME}*`;
        const line1 = `${t('contact.hello', { target: name })}`;
        const line2 = message;
        const fullMessage = `${header}\n\n${line1}\n\n${line2}`;
        return encodeURIComponent(fullMessage);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const message = composeMessage();
        const uri = `${WA_URL}?text=${message}`;
        setSuccessSubmit(true);
        setTimeout(() => {
            window.open(uri, '_blank').focus()
        }, 2000);

    }
    const validate = useCallback(() => {
        return name.length & message.length;
    }, [name, message]);

    useEffect(() => {
        const isValid = validate();
        setInputValid(isValid);
    }, [name, message, validate])


    if (successSubmit) {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-contact-area">
                                <h2>{t('contact.thank_you')}</h2>
                                <p>{t('contact.thank_you_body')}</p>
                                <i className='fa fa-check fa-3x text-success'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-contact-area">
                            <h2>{t('contact.contact_us')}</h2>
                            <p>
                                {t('contact.contact_us_body')}
                            </p>
                            {/* Start Contact Content */}
                            <div className="mu-contact-content">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mu-contact-form-area">
                                            <div id="form-messages" />
                                            <form
                                                id="ajax-contact"
                                                className="mu-contact-form"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder={t('contact.name_ph')}
                                                                id="name"
                                                                name="name"
                                                                value={name}
                                                                required=""
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder={t('contact.message_ph')}
                                                        id="message"
                                                        name="message"
                                                        value={message}
                                                        required=""
                                                        onChange={(e) => setMessage(e.target.value)}
                                                    />
                                                </div>
                                                <button type="submit" className="mu-send-msg-btn" disabled={!inputValid} >
                                                    <span>{t('contact.submit').toUpperCase()}</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Contact Content */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs