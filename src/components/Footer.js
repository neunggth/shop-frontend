import React from 'react'

const Footer = ({ companyName, age}) => {

    // const { companyName }= props;
    return (
        <>
            <p>{companyName} {new Date().getFullYear()} {age}</p>
        </>
    )
}

export default Footer
