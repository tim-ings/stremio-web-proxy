import React from 'react';

interface VideoPlayerProps {
  src: string
  type: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, type }) =>
  <video
    width="320"
    height="240"
    controls={true}
  >
    <source src={src} type={type} />
    Your browser does not support video playback.
  </video>;
