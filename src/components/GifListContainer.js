import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dolphins");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "98pf7wwR4xNtfAmTTYHYXLjPzmGbNBlI"

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`)
      .then((resp) => resp.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data from Giphy API");
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [query]);

  return (
    <div>
      <GifSearch onSubmitQuery={setQuery} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <GifList gifs={gifs} />
      )}
    </div>
  );
}

export default GifListContainer;