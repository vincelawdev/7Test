import React, { Component } from 'react';
import Video from './components/video';

class App extends Component {
  render() {
    return (
      <div>
       <Video title={'testing title 1'} thumbnail={'video-thumb1'} />
      </div>
    );
  }
}

export default App;
