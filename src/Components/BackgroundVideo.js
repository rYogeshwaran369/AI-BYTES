import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`

  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  opacity:5;
  display:flex;
  position:relative
`;

const Video = styled.video`
 width:100%;
 height:45em;
  object-fit: cover;
`;

const BackgroundVideo = ({ videoSrc }) => {
  return (
    <VideoContainer>
      <Video autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default BackgroundVideo;
