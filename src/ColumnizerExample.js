import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import Stat from "./Stat";
import Columnizer from "./Columnizer";

const H2 = styled.h2`
  color: gray;
  margin-bottom: .5em;
`;

export default () => {
  return (
    <Wrapper>
      <H2>Showing some stats</H2>
      <Columnizer>
        <Stat label="Likes" value={290} />
        <Stat label="Views" value={2290} />
        <Stat label="Shares" value={39} />
      </Columnizer>

      <H2>Or, just some paragraphs</H2>
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
      <H2>Or, may be with different gutter (2em)</H2>
      <Columnizer gutter="2em">
        <ol>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
        </ol>
        <ol>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
        </ol>
        <ol>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
          <li>A some what longer sentence to check the gutter.</li>
        </ol>
      </Columnizer>
    </Wrapper>
  );
};
