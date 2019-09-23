/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Image } from 'react-native';

const ParallaxBackground : React.StatelessComponent = (props:any) =>  {
  return (
    <Image
      {...props}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};
    export default ParallaxBackground;
