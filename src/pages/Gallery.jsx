import React, { useEffect, useState } from "react";
import axios from "axios";
import galleryBg from "../images/gallery-header-bg.jfif";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import GalleryContainer from "../components/GalleryContainer";

const api = "XXMOUIbL6mbtyIgGj5W2v7RR54ZEMeZvzc0pX7L9PLA";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (page) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=office&client_id=${api}`
    );

    const data = await response.data;
    console.log(data);

    setPhotos(data.results)
    
    setLoading(false);
  };


  useEffect(() => {
    fetchData();
  },[]);

  if (loading) return <Loading/>;

  return (
    <div className="gallery">
      <PageHeader image={galleryBg} title="GALLERY" subtitle="our" />
      <div style={{
          display:"flex",
          justifyContent:"center",
          margin:"1rem 0px"
      }}>
      </div>
      <div className="container">
        <GalleryContainer photos={photos} />
      </div>
    </div>
  );
};

export default Gallery;
