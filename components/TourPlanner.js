import React, { useCallback, useState } from 'react'
import DatePicker from "react-datepicker";
import { useTranslation } from 'react-i18next'
import "react-datepicker/dist/react-datepicker.css";
import { APP_NAME, WA_URL } from '@/utils/constants';
import { format } from 'date-fns';

const TourPlanner = () => {
    const { t } = useTranslation('common');
    const [startDate, setStartDate] = useState();
    const [name, setName] = useState('');
    const [pax, setPax] = useState('');
    const [dest, setDest] = useState('');
    const [note, setNote] = useState('');
    const [successSubmit, setSuccessSubmit] = useState(false);


    const composeMessage = () => {
        const formattedDate = format(startDate, 'd MMM y');
        const header = `*##${APP_NAME}*`;
        const line1 = `${t('contact.hello', { target: name })}`;
        const line2 = `${t('inquiry.body_message', { date: formattedDate, pax, dest, note })}`
        const fullMessage = `${header}\n\n${line1}\n${line2}`;
        return encodeURIComponent(fullMessage);
    }

    const validate = () => {
        if ((name != null || name !== '') && (startDate != null) && (typeof pax === 'string' && parseInt(pax) > 0)) {
            return true;
        }
        return false;
    };

    const handlePaxChange = (e) => {
        !isNaN(e.nativeEvent?.data) && setPax(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const message = composeMessage();
            const uri = `${WA_URL}?text=${message}`;
            setSuccessSubmit(true);
            setTimeout(() => {
                window.open(uri, '_blank').focus()
            }, 1600);
        }
    }

    if (successSubmit) {
        return (
            <div className="tour-planner">
                <div className='tour-planner-area'>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <h2>{t('inquiry.thank_you')}</h2>
                            <p>{t('inquiry.thank_you_body')}</p>
                            <i className='fa fa-check fa-3x text-success'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="tour-planner">
            <div className='tour-planner-area'>
                <div className='tour-planner-header'>
                    <h2>{t('inquiry.title')}</h2>
                    <p>{t('inquiry.subtitle')}</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
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
                                                placeholder={t('inquiry.name_ph')}
                                                id="name"
                                                name="name"
                                                value={name}
                                                required=""
                                                autoComplete='off'
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <DatePicker id='tourDate'
                                                showIcon
                                                placeholderText={t('inquiry.date_ph')}
                                                className="form-control"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                dateFormat='dd MMM yyyy'
                                                autoComplete='off'
                                                minDate={new Date()}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="string"
                                                pattern="[0-9]*"
                                                className="form-control"
                                                placeholder={t('inquiry.pax_ph')}
                                                id="pax"
                                                name="pax"
                                                value={pax}
                                                autoComplete='off'
                                                min={1}
                                                required=""
                                                onChange={handlePaxChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={t('inquiry.dest_ph')}
                                                id="dest"
                                                name="dest"
                                                value={dest}
                                                autoComplete='off'
                                                required=""
                                                onChange={(e) => setDest(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                placeholder={t('inquiry.note_ph')}
                                                id="note"
                                                name="note"
                                                value={note}
                                                autoComplete='off'
                                                required=""
                                                onChange={(e) => setNote(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="mu-send-msg-btn" disabled={!validate()} >
                                    <span>{t('inquiry.submit').toUpperCase()}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourPlanner