interface Media {
  play(): void;
  pause(): void;
  stop(): void;
}
class MusicPlayer implements Media {
  play() {
    console.log("Playing video");
  }
  pause() {
    console.log("Video paused");
  }
  stop() {
    console.log("Video stopped");
  }
}

//Using Abstract Class

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
