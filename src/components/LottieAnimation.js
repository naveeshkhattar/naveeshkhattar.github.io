import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Box from "../lotties/box.json"

function LottieAnimation({lottieFile}) {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Box
    })
  }, [])
  
  return (
    <div className="App">
      <div className="container" ref={container}></div>
    </div>
  );
}

export default LottieAnimation;