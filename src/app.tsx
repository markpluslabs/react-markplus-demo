import { Typography } from 'antd';
import { auto } from 'manate/react';
import React from 'react';
import MarkPlus from 'react-markplus';

const { Title } = Typography;

const App = auto(() => {
  return (
    <>
      <Title>React MarkPlus Demo</Title>
      <Title level={2}>Default</Title>
      <div className="container">
        <MarkPlus markdown="# Hello world!" />
      </div>
      <Title level={2}>Hide Toolbar</Title>
      <div className="container">
        <MarkPlus markdown="# Hello world!" toolbar="hide" />
      </div>
      <Title level={2}>Dark Theme</Title>
      <div className="container">
        <MarkPlus markdown="# Hello world!" theme="dark" />
      </div>
    </>
  );
});

export default App;
