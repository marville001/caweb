import React from 'react'

import "../styles/pageheader.scss"

const PageHeader = ({image, subtitle,title}) => {
    return (
        <div style={{
            backgroundImage:`url(${image})`,
            height:"40vh",
            backgroundPosition:"center",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }} className="page-header">
            <h3 style={{
                fontSize:"30px",
                color:"var(--secondary-color)",
                marginBottom:"10px"
            }}>{subtitle}</h3>
            <h1 style={{
                fontSize:"60px",
                color:"var(--primary-color)",
                textAlign:"center"
            }}>{title}</h1>
        </div>
    )
}

export default PageHeader
