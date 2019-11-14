import React from 'react';
import './NavInner.css';
import gnc from '../../images/gnc.png'
import liveNation from '../../images/live-nation.png'

const NavInner = (props) => {
    return (
        <div className="NavInner">
            <img src={gnc} alt="GNC logo" className="gnc-logo"/>
            <img src={liveNation} alt="GNC logo" className="live-nation"/>
        </div>
    )
}

export default NavInner;