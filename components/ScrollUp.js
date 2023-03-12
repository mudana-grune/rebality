import Link from 'next/link'
import React from 'react'

const ScrollUp = () => {
    return (
        <Link className="scrollToTop" href="#">
            <i className="fa fa-angle-up" />
        </Link>
    )
}

export default ScrollUp