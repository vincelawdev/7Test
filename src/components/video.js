import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoCard = styled.div`
  position: relative;
  display: block;
  margin: 0 0 30px 0;
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    flex: 1;
    margin-bottom: 0;
    margin-right: 30px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const VideoCardThumbnail = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
`;

const VideoCardText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;

const VideoCardTextLogo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 15px 0 0;
  float: left;
`;

const VideoCardTextTitle = styled.h5`
  margin: 0;
  padding: 0;
  display: inline-block;
  font-size: 18px;
  line-height: 30px;
  font-weight: bold;
  color: white;
`;

const Video = (props) => {
  return(
    <VideoCard>
      <VideoCardThumbnail src={require(`../assets/images/${props.thumbnail}.jfif`)} alt={props.title} />
      <VideoCardText>
        <VideoCardTextLogo src={require(`../assets/images/logo.png`)} alt={props.title} />
        <VideoCardTextTitle>{props.title}</VideoCardTextTitle>
      </VideoCardText>
    </VideoCard>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default Video;