import React from 'react';
import {ViroARScene, ViroImage} from 'react-viro';
import 'react-native';

export default function ImageSample() {
  const _onInitialized = (state: any, reason: any) => {};

  return (
    <ViroARScene onTrackingUpdated={_onInitialized} onClick={() => {}}>
      <ViroImage
        height={1}
        width={2}
        position={[0, 0, -4]}
        placeholderSource={require('../assets/images/test.png')}
        source={{uri: '../assets/images/test.png'}}
      />
    </ViroARScene>
  );
}
