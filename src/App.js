import React, { Component } from 'react';
import VideoCardWrapper from './components/videoWrapper';
import Video from './components/video';

class App extends Component {
  render() {
    return (
      <VideoCardWrapper>
        <Video title={'testing title 1'} thumbnail={'video-thumb1'} />
        <Video title={'testing title 2'} thumbnail={'video-thumb2'} />
        <Video title={'testing title 3'} thumbnail={'video-thumb3'} />
      </VideoCardWrapper>
    );
  }
}

export default App;
