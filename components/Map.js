import React from 'react'

function Map() {
    return (
        <div id="mu-google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.53959266276587!2d115.17306125151636!3d-8.631139860744415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239605e2e8d75%3A0x4cdf73df4d9f5f69!2sWarung%20Buk%20Eka!5e0!3m2!1sid!2sid!4v1678278303118!5m2!1sid!2sid"
                width={850}
                height={450}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}

export default Map