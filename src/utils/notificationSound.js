import { Audio } from 'expo-av';

const notificationAsset = require('../assets/sounds/default-notification.wav');

export default {
  play: async function () {
    const { sound, status } = await Audio.Sound.createAsync(notificationAsset, { shouldPlay: true });

    setTimeout(() => {
      sound.unloadAsync();
    }, status.playableDurationMillis + 1000);
  }
}