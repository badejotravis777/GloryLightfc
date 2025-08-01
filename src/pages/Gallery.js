import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";

// Fade-in animation for images
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GalleryContainer = styled.div`
  padding: 60px 20px;
  background: linear-gradient(to bottom, #000, #222);
  color: #ffcc00;
  font-family: "Arial", sans-serif;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #ffcc00;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #ddd;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  padding-bottom: 40px;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 204, 0, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #ffcc00;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

// Lightbox Modal for Image Preview
const Modal = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const Footer = styled.footer`
.footer {
  background-color: #2e2e2e; /* Dark Gray */
  color: #fff;
  padding: 50px 20px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo p {
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: #ccc;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
}

.footer-column {
  text-align: left;
  margin: 10px;
  flex: 1 1 30%;
}

.footer-column h3 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #ffd700; /* Yellow */
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #aaa; /* Light Gray */
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/cm6.jpeg", },
    { src: "/images/img20.jpeg", alt: "Training" },
   
    { src: "/images/img19.jpeg", alt: "Buzzing" },
   
    { src: "/images/img11.jpeg", alt: "Jersey" },
  
    { src: "/images/img19.jpeg", alt: "Buzzing" },
    { src: "/images/img13.jpeg", alt: "Jersey" },
    
    { src: "/images/img11.jpeg", alt: "Jersey" },

    { src: "/images/img12.jpeg", alt: "Jersey" },
    { src: "/images/img13.jpeg", alt: "Jersey" },
    
    { src: "/images/img14.jpeg", alt: "Jersey" },

    { src: "/images/img15.jpeg", alt: "Jersey" },
   
    { src: "/images/img18.jpeg", alt: "Training" },
    
    { src: "/images/upd1.png", },
    { src: "/images/upd3.png", },
    { src: "/images/upd25.png", },
    { src: "/images/upd2.png", },
    { src: "/images/upd4.png", },
    { src: "/images/upd5.png", },
    { src: "/images/upd6.png", },
    { src: "/images/upd42.png", },
    { src: "/images/upd7.png", },
    { src: "/images/upd8.png", },
    { src: "/images/upd9.png", },
   
    { src: "/images/upd11.png", },
    { src: "/images/upd12.png", },
  
    { src: "/images/upd14.png", },
    { src: "/images/upd15.png", },
    { src: "/images/upd17.png", },
    { src: "/images/cm2.jpeg", },
   
    { src: "/images/upd21.png", },
    { src: "/images/upd22.png", },
    { src: "/images/upd23.png", },
    { src: "/images/cm3.jpeg", },
    { src: "/images/upd24.png", },
   
    { src: "/images/upd26.png", },
    { src: "/images/upd28.png", },
    { src: "/images/upd29.png", },
    { src: "/images/upd10.png", },
    { src: "/images/cm1.jpeg", },
    { src: "/images/upd30.png", },
    { src: "/images/upd31.png", },
    { src: "/images/upd33.png", },
    { src: "/images/upd34.png", },
    { src: "/images/cm4.jpeg", },
   
    { src: "/images/upd19.png", },
   
    { src: "/images/upd37.png", },
    { src: "/images/upd40.png", },
    { src: "/images/cm5.jpeg", },

    { src: "/images/upd41.png", },

    { src: "/images/upd44.png", },
    { src: "/images/upd45.png", },
    { src: "/images/upd35.png", },
    { src: "/images/upd36.png", },
    { src: "/images/upd46.png", },
    { src: "/images/cm6.jpeg", },
  ];

  return (
    <>
      <GalleryContainer>
        <Header />
        <Title>Our Gallery</Title>
        <Subtitle>Relive the moments that define our journey</Subtitle>
        <ImageGrid>
          {images.map((image, index) => (
            <ImageBox key={index} onClick={() => setSelectedImage(image.src)}>
              <img src={image.src} alt={image.alt} />
              <div className="overlay">{image.alt}</div>
            </ImageBox>
          ))}
        </ImageGrid>
      </GalleryContainer>

      {/* Lightbox Modal */}
      <Modal show={selectedImage} onClick={() => setSelectedImage(null)}>
        {selectedImage && (
          <>
            <CloseButton onClick={() => setSelectedImage(null)}>&times;</CloseButton>
            <img src={selectedImage} alt="Expanded View" />
          </>
        )}
      </Modal>

      {/* Footer */}
      <Footer>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <p>© 2024 glorylightfc, Inc. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/programs">Programs</a></li>
                  <li><a href="/Career">Careers</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Connect With Us</h3>
                <ul>
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Legal</h3>
                <ul>
                  <li><a href="/terms">Terms</a></li>
                  <li><a href="/privacy">Privacy</a></li>
                  <li><a href="/sitemap">Sitemap</a></li>
                  <li><a href="/disclaimer">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Footer>
    </>
  );
};

export default Gallery;
