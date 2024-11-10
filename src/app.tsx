import { Typography } from 'antd';
import { auto } from 'manate/react';
import React from 'react';
import MarkPlus from 'react-markplus';

const { Title } = Typography;

const App = auto(() => {
  return (
    <>
      <Title>Untitled App</Title>
      <div className="container">
        <MarkPlus markdown="# Hello world!" toolbar="show" />
      </div>
    </>
  );
});

export default App;
