// rafc  
import React from 'react';
import logo from '../logo512.png';

const Header = () => {
    const title = ' ยินดีต้อนรับคุณ';
    const logoHeader =< img onMouseOver={ () => alert('logo') } src={logo} width='100' alt='logo'/>;
    const subtitle =(
        <>
            <h3> React 2020 </h3>
            <p> Make happy </p>
        </>

    )

    const displayDate = () => {
        return <p> {new Date().toLocaleDateString('th-TH')} </p>
    }

return (
        <div>
            {logoHeader}
            {subtitle}
            {displayDate()}
            <h3>{title}</h3>
        </div>
    )
}

export default Header