import "./pitches.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function FetchPitches() {
  const [pitches, setPitches] = useState([]);

  useEffect(function fetchPitchesWhenMounted() {
    async function fetchPitches() {
      const pitchData = await axios.get("http://localhost:3001/pitches");
      setPitches(pitchData.data);
    }
    fetchPitches();
  }, []);

  return <div>{pitches ? <h2>{pitches}</h2> : <i>(loading)</i>}</div>;
}

export default FetchPitches;
