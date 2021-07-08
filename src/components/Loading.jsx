import React from 'react'
import BounceLoader from "react-spinners/BounceLoader"
const Loading = () => {
    return (
        <div style={{
            background:"#eee",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column-reverse"
        }}>
            <h4>Loading....</h4>
            <BounceLoader color="crimson" loading={true} size={100} />
        </div>
    )
}

export default Loading
