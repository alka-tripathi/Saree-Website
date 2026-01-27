import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function Videos() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ImageList
        sx={{ width: 1000, height: 600 }}
        cols={3}
      >
        {videoData.map((item) => (
          <ImageListItem key={item.video}>
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
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
  );
}

const videoData = [
  {
    video: 'https://assets.pinterest.com/ext/embed.html?id=1016406209656182282',
    title: 'Nature',
    author: '@video_creator',
  },
  {
    video: 'https://www.w3schools.com/html/movie.mp4',
    title: 'City Life',
    author: '@urban_story',
  },
];

export default Videos;
