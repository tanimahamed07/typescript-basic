// oop - abstraction

//idea

// implementaion
/*
1. interface
2. abstract class
*/

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log("playing music");
//   }
//   pause() {
//     console.log("Music Paused..");
//   }
//   stop() {
//     console.log("Music Stopped....");
//   }
// }

// const TanimPlayer = new MusicPlayer();  // instance
// TanimPlayer.play()

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void; // Added ()
  abstract stop(): void;  // Added ()
}

class TanimPlayer extends MediaPlayer {
  play() {
    console.log(`Playing music....`);
  }
  
  pause() {
    console.log(`Music is paused`);
  }
  
  stop() {
    console.log("Music is stopped");
  }
}

const myPlayer = new TanimPlayer();
myPlayer.play();
