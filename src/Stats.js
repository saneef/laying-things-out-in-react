import React from "react";
import styled from "styled-components";

import Stat from "./Stat";

const Stats = styled.div`
  font-family: sans-serif;
`;

export default () => {
  return (
    <Stats>
      <Stat label="Likes" value={290} />
      <Stat label="Views" value={2290} />
      <Stat label="Shares" value={39} />
    </Stats>
  );
};
