import React from 'react';
import Typed from 'react-typed';

function TypewriterText() {
  return (
    <Typed
      className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-800 bg-clip-text text-transparent"
      strings={['Dream Team']}
      typeSpeed={100}
      backSpeed={50}
      backDelay={1000}
      startDelay={500}
      loop
    />
  );
}

export default TypewriterText;