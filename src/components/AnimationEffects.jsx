import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import '../styles/AnimationEffects.css';

function AnimationEffects({ setIsAnimated, setIsSoundOn }) {
  const [soundEffect, setSoundEffect] = useState(null);

  useEffect(() => {
    if (soundEffect) {
      soundEffect.play();
    }
  }, [soundEffect]);

  const playSound = () => {
    const firecrackerSound = new Howl({
      src: ['/sounds/firecracker-sound (1).mp3'],
      loop: false,
      volume: 0.5,
    });
    firecrackerSound.play();
    setSoundEffect(firecrackerSound);
  };

  const handleSoundToggle = (e) => {
    setIsSoundOn(e.target.checked);
    if (e.target.checked) {
      playSound();
    } else if (soundEffect) {
      soundEffect.stop();
    }
  };

  return (
    <div className="effects-wrapper">
      <h2>Effects</h2>
      <label className="checkbox-wrapper">
        <input type="checkbox" onChange={(e) => setIsAnimated(e.target.checked)} />
        Enable Animation
      </label>
      <label className="checkbox-wrapper">
        <input type="checkbox" onChange={handleSoundToggle} />
        Enable Sound
      </label>
    </div>
  );
}

export default AnimationEffects;
