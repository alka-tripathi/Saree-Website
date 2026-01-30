import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function About() {
  return (
    <div style={{ height: 650, overflow: 'auto' }}>
      <ImageList
        sx={{ width: 550 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
const itemData = [
  {
    img: 'https://i.pinimg.com/1200x/3e/70/90/3e709043ae3aeee8e4054050346bda33.jpg',
    title: 'Bed',
  },
  {
    img: 'https://i.pinimg.com/736x/d3/e5/d1/d3e5d1d87a4bf49b9cc187f254968053.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://i.pinimg.com/736x/97/2c/d7/972cd77f4b6d7e651202b395c44782e2.jpg',
    title: 'Sink',
  },
  {
    img: 'https://i.pinimg.com/736x/a5/d4/d0/a5d4d0e8c2b1f4ce9f2fa5789a517705.jpg',
    title: 'Books',
  },
  {
    img: 'https://i.pinimg.com/1200x/95/3c/86/953c863670499786f77dc67e7dd53f8c.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://i.pinimg.com/1200x/bf/c8/c5/bfc8c5385a6d484560f00b0ded6b682e.jpg',
    title: 'Candle',
  },
  {
    img: 'https://i.pinimg.com/1200x/78/f7/e4/78f7e4dddc7f1036c2fc31e7ba3a1921.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://i.pinimg.com/736x/ba/34/0f/ba340f8fa6d0b807d4061eaa7229c930.jpg',
    title: 'Doors',
  },
  {
    img: 'https://i.pinimg.com/1200x/25/c2/76/25c276355bc45e09afcc546c025337f0.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.pinimg.com/1200x/35/2b/a0/352ba05b891bb67e07ee5cd7b117926a.jpg',
    title: 'Storage',
  },
  {
    img: 'https://i.pinimg.com/736x/25/17/10/251710c189c7dc3bd6c4c1406deb2254.jpg',
    title: 'Coffee table',
  },
  {
    img: 'https://i.pinimg.com/736x/dc/bd/59/dcbd59517fb2bc9feac218a7523ec12c.jpg',
    title: 'Blinds',
  },
];
export default About;
