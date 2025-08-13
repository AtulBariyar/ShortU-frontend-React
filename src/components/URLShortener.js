import { useState } from "react";

export default function URLShortener({ onShorten, ref }) {
  const [url, setUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");

  const [loading, setLoading] = useState(false);

  const host = process.env.REACT_APP_HOST_NAME ;
  console.log(host);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(`${host}/api/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url, shortCode: customAlias }),
      });
      const body = await response.json();

      if (!response.ok) {
          throw new Error(body.error || "An error occurred");
      }

      setTimeout(() => {
        onShorten({
          originalUrl: url,
          shortUrl: `${host}/api/${body.shortCode}`,
        });
        setLoading(false);
      }, 1000);

      window.scroll({
        top: 500,
        behavior: "smooth",
      });
    } catch (error) {
      alert(error.message);
      return setLoading(false);
    }
  };

  return (
    <div className="shortener-container" id="shortner">
      <form className="shortener-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="url" className="form-label">
            Enter your long URL
          </label>
          <input
            type="url"
            id="url"
            className="form-input"
            placeholder="https://example.com/very/long/url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customAlias" className="form-label">
            Custom alias (optional)
          </label>
          <input
            type="text"
            id="customAlias"
            className="form-input"
            placeholder="my-custom-link"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            pattern="[a-zA-Z0-9\-]+"
            title="Only letters, numbers, and hyphens are allowed"
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>
    </div>
  );
}
