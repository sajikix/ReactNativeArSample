import React from 'react';
import {ViroARScene, ViroText} from 'react-viro';

export default function HelloWorldScene() {
  const _onInitialized = (state: any, reason: any) => {};

  return (
    <ViroARScene onTrackingUpdated={_onInitialized} onClick={() => {}}>
      <ViroText
        text={'Hello! AR World!!'}
        position={[0, 0, -4]}
        style={{
          fontSize: 80,
          color: '#103059',
          textAlignVertical: 'center',
          textAlign: 'center',
          fontWeight: '900',
        }}
        width={9}
        height={2}
        rotation={[0, 0, 0]}
      />
    </ViroARScene>
  );
}
