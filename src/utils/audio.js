// Audio utility for managing sound effects
const audioFiles = {
  add: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
  complete: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'),
  delete: new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3')
};

// Pre-load audio files
Object.values(audioFiles).forEach(audio => {
  audio.load();
  audio.volume = 0.3; // Set volume to 30%
});

export const playSound = (type) => {
  const audio = audioFiles[type];
  if (audio) {
    audio.currentTime = 0; // Reset audio to start
    audio.play().catch(error => console.log('Audio playback failed:', error));
  }
};