import React, { useState } from "react";

const UrlCheckModal = ({ onClose }) => {
  const [counter, setCounter] = useState(0);

  const [url, setUrl] = useState("");
  const [showCounter, setShowCounter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const host = "http://localhost:8081";

  const handleCheck = async (e) => {
    // e.preventDefault();
    if (!url.trim()) {
      alert("Please enter a URL");
      return;
    } else if (url.substring(0, 26) !== `${host}/api/`) {
      alert("Please enter ShortU shortend url only");
      return;
    }

    const urlPart = url.split("api/");
    const part2 = urlPart[1];

    setIsLoading(true);
    setShowCounter(false);
    const response = await fetch(`${host}/api/shorten/${part2}/stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();

    setTimeout(() => {
      setCounter(body.accessCount);
      setResultUrl(url);
      setShowCounter(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">URL Checker</h3>
            <button onClick={onClose} className="close-button">
              &times;
            </button>
          </div>

          <div className="modal-body">
            <div>
              <label htmlFor="url" className="url-label">
                Enter your short URL
              </label>
              <div className="input-group">
                <input
                  type="url"
                  id="url"
                  className="url-input"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                />
                <button
                  onClick={handleCheck}
                  disabled={isLoading}
                  className="check-button"
                >
                  {isLoading ? "Checking..." : "Check"}
                </button>
              </div>
              <p className="url-instruction">
                Please include http:// or https://
              </p>
            </div>

            {showCounter && (
              <div className="result-container">
                <h3 className="result-title">Results</h3>
                <p>
                  Found <span className="result-count">{counter}</span>{" "}
                  {counter > 1 ? "clicks" : "click"} for:
                </p>
                <p className="result-url">{resultUrl}</p>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button onClick={onClose} className="close-button">
              Close
            </button>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default UrlCheckModal;
