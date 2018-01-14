import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import Stat from "./Stat";
import Columnizer from "./Columnizer";

export default () => {
  return (
    <Wrapper>
      <h2>Showing some stats</h2>
      <Columnizer>
        <Stat label="Likes" value={290} />
        <Stat label="Views" value={2290} />
        <Stat label="Shares" value={39} />
      </Columnizer>

      <h2>Or, just some paragraphs</h2>
      <Columnizer>
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
      <h2>Or, may be with different gutter</h2>
      <Columnizer gutter="2em">
        <ol style={{paddingLeft: '1em'}}>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
        </ol>
        <ol style={{ paddingLeft: '1em' }}>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
        </ol>
        <ol style={{ paddingLeft: '1em' }}>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
        </ol>
      </Columnizer>
    </Wrapper>
  );
};
