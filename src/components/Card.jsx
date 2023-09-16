//takes in an embed source link, title, subheading, and link ref for anchor
export default function Card({ embed, title, subheading, link } = props) {
  return (
    <div className="card">
      <iframe
        className={"cardImage"}
        src={embed}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="cardTextBox">
        <h3>{title}</h3>
        <h4>{subheading}</h4>
      </div>
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        Spotify
      </a>
    </div>
  );
}
