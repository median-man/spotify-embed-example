window.onload = () => {
  const spotifyEmbed = new SpotifyEmbed({
    parentEl: document.querySelector("#spotify-embed"),
  });
  const spotifyButtonsContainerEl = document.querySelector("#spotify-buttons");
  const spotifyTracks = [
    {
      name: "Hilary Hahn - Bach Sonata",
      src: "https://open.spotify.com/embed/track/1Xkup8WkrOfFVPZ4r7Zkhf",
    },
    {
      name: "Julia Fischer - Paganini Caprice",
      src: "https://open.spotify.com/embed/track/15PYCW21HG8XIsH56x31ap",
    },
  ];

  initButtons();

  function initButtons() {
    spotifyButtonsContainerEl.append(
      ...spotifyTracks.map(createSpotifyTrackButton)
    );
    spotifyButtonsContainerEl.addEventListener("click", (e) => {
      if (e.target.matches("button")) {
        spotifyEmbed.src(e.target.dataset.src);
        spotifyEmbed.init();
      }
    });
  }

  function createSpotifyTrackButton({ name, src }) {
    const button = document.createElement("button");
    button.classList.add("spotify-track-btn");
    button.dataset.src = src;
    button.textContent = name;
    return button;
  }
};
