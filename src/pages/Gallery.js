import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <h2>Our Gallery</h2>
      {[...Array(8)].map((_, index) => (
        <ImageBox key={index}>Image {index + 1}</ImageBox>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
