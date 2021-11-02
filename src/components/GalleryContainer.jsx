import React from 'react'
import {ImageListItem,ImageList,ImageListItemBar} from "@mui/material"

const GalleryContainer = ({photos}) => {
    return (
        <div>
            <ImageList cellHeight={300} cols={3}>
                {photos.map((photo, idx)=>(
                    <ImageListItem style={{
                        flexGrow:"1"
                    }} cols={(photo.width/1000/3.9).toFixed(0)}>
                        <img src={photo.urls.regular} alt={photo.alt_description} srcset="" />
                        <ImageListItemBar title={photo.description} subtitle={photo.user.name} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default GalleryContainer
