// rafce

import React from 'react'
import { Link } from 'gatsby'

const Navibar = () => {
    return (
        <nav>
            <ul>
                <li>this is nav bar</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog/">Blog</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navibar
