import React from "react";

import styled from "styled-components";

const StatLabel = styled.div`
  color: lightslategray;
  font-size: 0.625em;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
`;

const StatValue = styled.div`
  font-weight: 4em;
  font-weight: bold;
  margin-top: 0.5em;
`;

const Stat = ({ className, label, value }) => (
  <div className={className}>
    <StatLabel>{label}</StatLabel>
    <StatValue>{value}</StatValue>
  </div>
);

export default styled(Stat)`
  padding: 0.5em;
  border: 1px solid rgba(119, 136, 153, 0.15);
  border-radius: 3px;
`;
