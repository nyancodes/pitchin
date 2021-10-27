import "./pitches.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function FetchPitches() {
  const [pitches, setPitches] = useState([]);

  useEffect(function () {
    fetchPitches();
  }, []);

  async function fetchPitches() {
    const pitchData = await axios.get("/pitch/all");
    console.log(pitchData);
    setPitches(pitchData.data);
  }

  return (
    <div>
      {pitches.map((pitch) => {
        return (
          <div key={pitch.username}>
            <h2>{pitch.username}</h2>
            <h1>{pitch.username}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default FetchPitches;
