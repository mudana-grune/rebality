import React from 'react'
import { useTranslation } from 'react-i18next'

const RecentVideo = () => {
    const { t } = useTranslation('common');

    return (
        <section id="mu-video">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-video-area">
                            <h2>{t('recent_video_title')}</h2>
                            <p className="mu-title-content">
                                {t('recent_video_desc')}
                            </p>

                            <div className="mu-video-content">
                                <iframe width="854" height="480" src="https://www.youtube.com/embed/mSAeDs-hEZY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentVideo