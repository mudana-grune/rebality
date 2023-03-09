import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';



function ToCModal({ show, onHide }) {
    const { t } = useTranslation('common');

    return (
        <Modal show={show} onHide={onHide} size="lg" className='modal-fullscreen'>
            <Modal.Header>
                <Modal.Title>{t('toc_modal.title')}</Modal.Title>
                <Button variant="light" onClick={onHide}>
                    <AiOutlineClose />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <ol start={1}>
                    <li><strong>{t('toc_modal.payment.title')}</strong>
                        <ol start={1} type={'a'}>
                            <li>{t('toc_modal.payment.line1')}</li>
                            <li>{t('toc_modal.payment.line2')}</li>
                            <li>{t('toc_modal.payment.line3')}</li>
                            <li>{t('toc_modal.payment.line4')}</li>
                        </ol>
                    </li>
                    <li><strong>{t('toc_modal.cancellation.title')}</strong>
                        <ol start={1} type={'a'}>
                            <li>{t('toc_modal.cancellation.line1')}</li>
                            <li>{t('toc_modal.cancellation.line2')}</li>
                            <li>{t('toc_modal.cancellation.line3')}</li>
                            <li>{t('toc_modal.cancellation.line4')}</li>
                        </ol>
                    </li>
                    <li><strong>{t('toc_modal.responsibility.title')}</strong>
                        <ol start={1} type={'a'}>
                            <li>{t('toc_modal.responsibility.line1')}</li>
                            <li>{t('toc_modal.responsibility.line2')}</li>
                            <li>{t('toc_modal.responsibility.line3')}</li>
                        </ol>
                    </li>
                    <li><strong>{t('toc_modal.change_of_itinerary.title')}</strong>
                        <ol start={1} type={'a'}>
                            <li>{t('toc_modal.change_of_itinerary.line1')}</li>
                            <li>{t('toc_modal.change_of_itinerary.line2')}</li>
                            <li>{t('toc_modal.change_of_itinerary.line3')}</li>
                        </ol>
                    </li>
                </ol>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-6 col-md-8 col-sm-12'>
                        <div className='text-center'>
                            <h5>{t('toc_modal.footer')}</h5>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );


}

export default ToCModal