export function mountScript() {
  const script = document.createElement("script");
  script.src = "https://sdk.scdn.co/spotify-player.js";
  script.async = true;

  document.body.appendChild(script);
}

export const createPlayerInstance = (token, setPlayer) => {
  if (token) {
    const player = new window.Spotify.Player({
      name: "Dream Music Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });

    player.addListener("ready", ({ device_id }) => {
      console.log("Device ready for playback: " + device_id);
    });

    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device not ready for playback: " + device_id);
    });

    player.connect().then((success) => {
      if (success) {
        console.log("Successfully connected.");
      }
    });

    player.addListener("autoplay_failed", () => {
      console.log("Autoplay is not allowed by the browser autoplay rules");
    });

    setPlayer(player);
  }
};
