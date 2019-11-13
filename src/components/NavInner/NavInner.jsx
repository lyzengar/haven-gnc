import React from 'react';
import './NavInner.css';
import gnc from '../../images/gnc.png'

const NavInner = (props) => {
    return (
        <div className="NavInner">
            <img src={gnc} alt="GNC logo" className="gnc-logo"/>
        </div>
    )
}

export default NavInner;