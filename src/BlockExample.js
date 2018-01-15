import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import Stat from "./Stat";
import Columnizer from "./Columnizer";
import Block from "./Block";

const H2 = styled.h2`
  color: gray;
  margin-bottom: 0.5em;
`;

export default () => {
  const para = (
    <p>
      A professional case of great gravity was engaging my own attention at the
      time, and the whole of next day I was busy at the bedside of the sufferer.
      It was not until close upon six o'clock that I found myself free and was
      able to spring into a hansom and drive to Baker Street, half afraid that I
      might be too late to assist at the dénouement of the little mystery. I
      found Sherlock Holmes alone, however, half asleep, with his long, thin
      form curled up in the recesses of his armchair. A formidable array of
      bottles and test-tubes, with the pungent cleanly smell of hydrochloric
      acid, told me that he had spent his day in the chemical work which was so
      dear to him.
    </p>
  );

  return (
    <Wrapper>
      <Block>
        <H2>Default Block component</H2>
        {para}
      </Block>

      <Block
        leftSideBar={
          <Columnizer>
            <Stat label="Likes" value={290} />
            <Stat label="Views" value={2290} />
          </Columnizer>
        }
      >
        <H2>Block with a sidebar</H2>
        {para}
      </Block>

      <Block
        rightSideBar={
          <p style={{ fontSize: "0.75em", color: "lightgray" }}>
            Fine lines of some text.
          </p>
        }
      >
        <H2>Block with a sidebar on right</H2>
        {para}
      </Block>

      <Block
        leftSideBar={
          <Columnizer>
            <Stat label="Likes" value={290} />
            <Stat label="Views" value={2290} />
          </Columnizer>
        }
        rightSideBar={
          <p style={{ fontSize: "0.75em", color: "lightgray" }}>
            Fine lines of some text.
          </p>
        }
      >
        <H2>Block with a sidebar on right</H2>
        {para}
      </Block>
    </Wrapper>
  );
};
