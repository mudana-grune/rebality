import React from 'react'

function Map() {
    return (
        <div id="mu-google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.632973362144!2d115.1708210147431!3d-8.631188590125758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239372436b333%3A0x1e9c8309a76731d9!2sReBALIty%20tour%20and%20travel!5e0!3m2!1sen!2sjp!4v1678497967414!5m2!1sen!2sjp"
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