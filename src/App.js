import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';
import { Button } from 'antd';
import { Timeline } from 'antd';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Timeline>
        <Timeline.Item>
          <Content />
        </Timeline.Item>
        <Timeline.Item>
          <Content />
        </Timeline.Item>
        <Timeline.Item>
          <Content />
        </Timeline.Item>
      </Timeline>
      <Button type="primary">更多</Button>
      </div>
    );
  }
}

export default App;
