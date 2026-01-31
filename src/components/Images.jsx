import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Footer from './Footer';

function Images() {
  return (
    <div>
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
                subtitle={<span>{item.subtitle}</span>}
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
      <Footer></Footer>
    </div>
  );
}

const imageData = [
  {
    img: 'https://i.pinimg.com/1200x/20/bb/06/20bb0689c2fd4280c9e41bf41d799a45.jpg',
    title: 'Silk Cotton',
    subtitle: 'Lightweight, slightly glossy, and drapes elegantly,',
  },
  {
    img: 'https://i.pinimg.com/1200x/fb/20/bb/fb20bb12085e42401763e3349f4c5a53.jpg',
    title: 'Chiffon',
    subtitle: 'The Glamorous Choice',
  },
  {
    img: 'https://i.pinimg.com/736x/19/c8/ab/19c8ab4e38294e224ca84601080e9d75.jpg',
    title: 'Georgette',
    subtitle: 'The Versatile FabricMadhya Pradesh',
  },
  {
    img: 'https://i.pinimg.com/1200x/4e/ba/2e/4eba2edc4f61a6909c7d5d9ca059a399.jpg',
    title: 'Cotton',
    subtitle: 'Preferred for softness',
  },
  {
    img: 'https://i.pinimg.com/736x/9b/c6/da/9bc6dae07b47aa86a06a52753cb3de81.jpg',
    title: 'Organza',
    subtitle: 'Lightweight fabric with a crisp texture',
  },
  {
    img: 'https://i.pinimg.com/736x/10/b4/db/10b4dba34e7e52a365f873ab2b8797ae.jpg',
    title: 'Linen',
    subtitle: 'Its signature rustic and elegant look',
  },
  {
    img: 'https://i.pinimg.com/1200x/f4/96/7b/f4967bd467334bdbfadbdefea2771117.jpg',
    title: 'Slik',
    subtitle: 'Smooth, glossy texture with a luxurious sheen',
  },
];

export default Images;
