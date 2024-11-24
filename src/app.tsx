import { Divider, Typography } from 'antd';
import { auto } from 'manate/react';
import React from 'react';
import MarkPlus from 'react-markplus';

const { Title } = Typography;

const App = auto(() => {
  return (
    <>
      <Title>React MarkPlus Demo</Title>

      <Divider />
      <div className="container">
        <MarkPlus markdown="# Light Theme" theme="light" />
      </div>

      <Divider />
      <div className="container">
        <MarkPlus markdown="# Dark Theme" theme="dark" />
      </div>

      <Divider />
      <div className="container">
        <MarkPlus markdown="# Hide Toolbar" toolbar="hide" />
      </div>

      <Divider />
      <div className="container">
        <MarkPlus markdown="# No Toolbar" toolbar="none" />
      </div>

      <Divider />
      <div className="container">
        <MarkPlus markdown="# Editor Only" mode="editor" toolbar="none" />
      </div>

      <Divider />
      <div className="container">
        <MarkPlus markdown="# Preview Only" mode="preview" toolbar="none" />
      </div>

      <Divider />
      <div className="container">
        <MarkPlus
          markdown="# Custom Toolbar"
          toolbarItems={[
            'about',
            '|',
            <i
              key="hippo"
              className="fa fa-hippo"
              onClick={() => {
                alert('Hello world!');
              }}
            ></i>,
          ]}
        />
      </div>
    </>
  );
});

export default App;
