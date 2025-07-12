export default function Results({ links }) {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="results-container">
      <h2 className="results-title">Your Shortened URLs</h2>
      {links.length === 0 ? (
        <p>No shortened URLs yet. Create one above!</p>
      ) : (
        links.map((link, index) => (
          <div key={index} className="result-item">
            <p className="original-url">{link.originalUrl}</p>
            <a
              href={link.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shortened-url"
            >
              {link.shortUrl}
            </a>
            <button
              onClick={() => copyToClipboard(link.shortUrl)}
              className="copy-btn"
            >
              Copy
            </button>
          </div>
        ))
      )}
    </div>
  );
}
