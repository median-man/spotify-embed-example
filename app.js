window.onload = () => {
  const spotifyEmbed = new SpotifyEmbed({
    parentEl: document.querySelector("#spotify-embed"),
  });
  const spotifySelectEl = document.querySelector("#spotify-select");

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

  spotifySelectEl.addEventListener("change", (e) => {
    spotifyEmbed.src(e.target.value);
  });

  initSpotifySelectOptions();

  function initSpotifySelectOptions() {
    spotifyTracks.forEach(({ name, src }) => {
      const option = document.createElement("option");
      option.value = src;
      option.textContent = name;
      spotifySelectEl.appendChild(option);
    });
  }
};
