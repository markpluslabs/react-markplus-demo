import { Typography } from 'antd';
import { auto } from 'manate/react';
import MarkdownPlus from 'markdown-plus';
import React from 'react';

const { Title } = Typography;

const App = auto(() => {
  return (
    <>
      <Title>Untitled App</Title>
      <MarkdownPlus markdown="# Hello world!" />
    </>
  );
});

export default App;
