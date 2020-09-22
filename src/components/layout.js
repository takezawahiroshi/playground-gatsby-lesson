//rafce

import React from 'react'
import Navibar from "./Navibar"

const layout = ({children}) => {
    return (
        <div>
            <Navibar />
                <main>{children}</main>
            <Navibar />
        </div>
    )
}

export default layout
