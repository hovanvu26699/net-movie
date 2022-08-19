import React from 'react'

import './headerPage.scss'

const HeaderPage = (props) => {
    return (
        <div className='page-header'>
            <h2>{props.children}</h2>
        </div>
    )
}

export default HeaderPage