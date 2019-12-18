import React from 'react';
import {ViroARScene, ViroImage, ViroAnimations} from 'react-viro';
import 'react-native';

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateZ: '+=60',
    },
    duration: 500,
    easing: 'Linear',
  },
});

export default function AnimationSample() {
  const _onInitialized = (state: any, reason: any) => {};
  return (
    <ViroARScene onTrackingUpdated={_onInitialized} onClick={() => {}}>
      <ViroImage
        height={1}
        width={2}
        position={[0, 0, -4]}
        placeholderSource={require('../assets/images/test.png')}
        source={{uri: '../assets/images/test.png'}}
        animation={{
          name: 'rotate',
          run: true,
          loop: true,
        }}
      />
    </ViroARScene>
  );
}
