import React from 'react'
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"


const GalleryContainer = ({photos}) => {
    return (
        <div>
            <GridList cellHeight={300} cols={3}>
                {photos.map((photo, idx)=>(
                    <GridListTile style={{
                        flexGrow:"1"
                    }} cols={(photo.width/1000/3.9).toFixed(0)}>
                        <img src={photo.urls.regular} alt={photo.alt_description} srcset="" />
                        <GridListTileBar title={photo.description} subtitle={photo.user.name} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default GalleryContainer
