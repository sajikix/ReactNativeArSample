import React, {useState} from 'react';
import {ViroARScene, ViroText} from 'react-viro';

export default function InputEventSample() {
  const _onInitialized = (state: any, reason: any) => {};
  const [text, setText] = useState('ClieckMe');

  return (
    <ViroARScene onTrackingUpdated={_onInitialized} onClick={() => {}}>
      <ViroText
        text={text}
        position={[0, 0, -4]}
        style={{
          fontSize: 80,
          color: '#103059',
          textAlignVertical: 'center',
          textAlign: 'center',
          fontWeight: '900',
        }}
        onClick={() => {
          setText('Clicked');
        }}
        width={9}
        height={2}
        rotation={[0, 0, 0]}
      />
    </ViroARScene>
  );
}
