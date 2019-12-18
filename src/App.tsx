import React from 'react';
import {ViroARSceneNavigator} from 'react-viro';
import {
  HelloWorldScene,
  AnimationSample,
  ImageSample,
  InputEventSample,
} from './ARScenes';

export default function App() {
  return (
    <ViroARSceneNavigator
      apiKey={''}
      initialScene={{scene: HelloWorldScene}} // 切り替えて試してみてください
      viroAppProps={{}}
      autofocus={true}
    />
  );
}
