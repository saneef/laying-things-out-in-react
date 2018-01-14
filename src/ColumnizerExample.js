import React from "react";
import styled from "styled-components";

import Stat from "./Stat";
import Columnizer from "./Columnizer";

const ColumnizerExample = styled.div`font-family: sans-serif;`;

export default () => {
  return (
    <ColumnizerExample>
      <h2>Showing some stats</h2>
      <Columnizer gutter="0.5em">
        <Stat label="Likes" value={290} />
        <Stat label="Views" value={2290} />
        <Stat label="Shares" value={39} />
      </Columnizer>

      <h2>Or, just some paragraphs</h2>
      <Columnizer gutter="1em">
        <p>
          A professional case of great gravity was engaging my own attention at
          the time, and the whole of next day I was busy at the bedside of the
          sufferer.
        </p>
        <p>
          It was not until close upon six o'clock that I found myself free and
          was able to spring into a hansom and drive to Baker Street, half
          afraid that I might be too late to assist at the dénouement of the
          little mystery.
        </p>
      </Columnizer>
    </ColumnizerExample>
  );
};
