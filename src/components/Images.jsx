import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Footer from './Footer';

function Images() {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '20px 40px' }}>
        <h2 style={{ fontWeight: 600, color: '#8b1e3f' }}>Saree Textures</h2>
        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            color: '#8F3C45',
            paddingTop: '10px',
          }}
        >
          Saree texture describes the feel of the fabric and the way it falls or
          drapes on the body. Different textures offer unique comfort, elegance,
          and suitability for various occasions.
        </p>
      </div>

      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
        }}
      >
        <ImageList
          sx={{ width: 1000, height: 600 }}
          cols={3}
          gap={16}
        >
          {imageData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
                position="top"
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <Footer />
    </div>
  );
}

const imageData = [
  {
    img: 'https://i.pinimg.com/1200x/20/bb/06/20bb0689c2fd4280c9e41bf41d799a45.jpg',
    title: 'Silk Cotton',
    subtitle: 'Lightweight with a subtle sheen and elegant drape',
  },
  {
    img: 'https://i.pinimg.com/1200x/fb/20/bb/fb20bb12085e42401763e3349f4c5a53.jpg',
    title: 'Chiffon',
    subtitle: 'Soft, sheer, and flowy texture',
  },
  {
    img: 'https://i.pinimg.com/736x/19/c8/ab/19c8ab4e38294e224ca84601080e9d75.jpg',
    title: 'Georgette',
    subtitle: 'Slightly crinkled texture with graceful fall',
  },
  {
    img: 'https://i.pinimg.com/1200x/4e/ba/2e/4eba2edc4f61a6909c7d5d9ca059a399.jpg',
    title: 'Cotton',
    subtitle: 'Soft, breathable, and comfortable for daily wear',
  },
  {
    img: 'https://i.pinimg.com/736x/9b/c6/da/9bc6dae07b47aa86a06a52753cb3de81.jpg',
    title: 'Organza',
    subtitle: 'Crisp, lightweight texture with a structured look',
  },
  {
    img: 'https://i.pinimg.com/736x/10/b4/db/10b4dba34e7e52a365f873ab2b8797ae.jpg',
    title: 'Linen',
    subtitle: 'Natural texture with a classy rustic appeal',
  },
  {
    img: 'https://i.pinimg.com/1200x/f4/96/7b/f4967bd467334bdbfadbdefea2771117.jpg',
    title: 'Silk',
    subtitle: 'Smooth, glossy texture with a luxurious feel',
  },
];

export default Images;
