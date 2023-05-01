import React, { useEffect } from "react";
import Upload from "../components/upload/Upload";
import { Container } from '@mui/material';
import ImagesList from "../components/imageList/ImageList";
export const GalleryDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }} >
      <Upload />
      <ImagesList/> 
    </Container>
  );
}