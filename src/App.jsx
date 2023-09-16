import "./App.css";
import Card from "./components/Card";
function App() {
  //create array of objects containing card parameters

  //contain youtube song links, group name, genre, and link to spotify
  const SONGS = [
    {
      video: "https://www.youtube.com/embed/8ieSxX5uKv4?si=JbwuB3nNQvFaVOQP",
      artist: "Squid",
      genre: "Post-Punk, Experimental Rock",
      spotify: "https://open.spotify.com/artist/685XjGzGztyivfR3fAjoxo",
    },
    {
      video: "https://www.youtube.com/embed/uwC0u0Yb3Zw?si=960x7frecexNp-9q",
      artist: "Andrew Bird",
      genre: "Folk, Alternative/Indie",
      spotify: "https://open.spotify.com/artist/4uSftVc3FPWe6RJuMZNEe9",
    },
    {
      video: "https://www.youtube.com/embed/9N1H4u0Wi-Q?si=PsdlNquP24tDW2K9",
      artist: "Radiohead",
      genre: "Art rock, Experimental Rock, Alternative Rock, Electronica",
      spotify: "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
    },
    {
      video: "https://www.youtube.com/embed/DpVfF4U75B8?si=_kYeWmRM9kasVSWQ",
      artist: "Atoms For Peace",
      genre: "Experimental Rock, Electronica",
      spotify: "https://open.spotify.com/artist/7tA9Eeeb68kkiG9Nrvuzmi",
    },
    {
      video: "https://www.youtube.com/embed/5DGzijoY-us?si=1ODqVbbHeoFtrQdj",
      artist: "Queens Of The Stone Age",
      genre: "Hard Rock, Alternative Rock",
      spotify: "https://open.spotify.com/artist/4pejUc4iciQfgdX6OKulQn",
    },
    {
      video: "https://www.youtube.com/embed/miM-RgepSso?si=dvmtZGwsPCNVu-9z",
      artist: "Red Hot Chili Peppers",
      genre: "Funk Rock, Alternative Rock, Rap Rock",
      spotify: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
    },
    {
      video: "https://www.youtube.com/embed/wBWGm7F8xyE?si=7bMJM43EgzP6zu2c",
      artist: "Nilüfer Yanya",
      genre: "Alternative/Indie",
      spotify: "https://open.spotify.com/artist/09kXLeOXRyfNQMXRaDO4qA",
    },
    {
      video: "https://www.youtube.com/embed/pdv5n_Qgiw4?si=HvDkVZ97LxiBHYv9",
      artist: "Kings Of Convenience",
      genre: "Indie-Pop ",
      spotify: "https://open.spotify.com/artist/41AbNVba2ccpmcc9QtOJE7",
    },
    {
      video: "https://www.youtube.com/embed/dewL4wTF0M0?si=vYw9YZvdhRp_gbrk",
      artist: "Warpaint",
      genre: "Alternative/Indie",
      spotify: "https://open.spotify.com/artist/3AmgGrYHXqgbmZ2yKoIVzO",
    },
    {
      video: "https://www.youtube.com/embed/xdptwJST_9A?si=Omg6O2gZ-mwxhGCy",
      artist: "Sonic Youth",
      genre: "Noise Rock/Alternative Rock",
      spotify: "https://open.spotify.com/artist/5UqTO8smerMvxHYA5xsXb6",
    },
    {
      video: "https://www.youtube.com/embed/RJ1YBbUKzvw?si=zi0gBENJOhEwpm1o",
      artist: "Tricot",
      genre: "Math Rock, Alternative Rock, J-pop",
      spotify: "https://open.spotify.com/artist/5IKKS7LhpdlmMwqIagqf3f",
    },
  ];

  //map through songs and create a card for each one
  return (
    <div className="App">
      <h1>Favorite Songs</h1>
      <div className="songsContainer">
        {SONGS.map((song) => (
          <Card
            key={song.video}
            embed={song.video}
            title={song.artist}
            subheading={song.genre}
            link={song.spotify}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
