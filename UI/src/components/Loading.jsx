import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <div style={{
            height:"60vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}> <CircularProgress size={100} /></div>
    )
}

export default Loading
