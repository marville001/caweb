import React from 'react'

const Title = ({ title, variant }) => {
    return (
        <h2 className="title" style={{ color: variant === "primary" ? "#fff" : "#173355" }}>
            {title}
        </h2>
    )
}

export default Title
