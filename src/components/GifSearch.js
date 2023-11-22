import React from "react";
import { useState } from "react";

function GifSearch ({onSubmitQuery}) {

    const [query, setQuery] = useState("dolphins");

    function handleSubmit (e) {
        e.preventDefault();
        console.log(query);
        onSubmitQuery(query)
    }

    function handleChange (e) {
        setQuery(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="query">Enter Search :</label>
                    <input
                        id="query"
                        className="form-control"
                        type="text"
                        value={query}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                Find Gifs
                </button>
            </form>
        </div>

    )
}

export default GifSearch;