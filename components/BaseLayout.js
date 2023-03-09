import React from 'react'
import Navbar from './Navbar';

export default function BaseLayout(props) {

    return (
        <>
            <Navbar />
            <main>
                {props.preContainer && props.preContainer}
                {props.children}
            </main>
        </>
    )
}