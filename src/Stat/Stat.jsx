import React from 'react';

import styled from 'styled-components';

const StatLabel = styled.div`
  color: grey;
  font-size: 0.75em;
`;

const StatValue = styled.div`
  font-weight: 2em;
  font-weigh: bold;
`;

const Stat = ({label, value}) => (
  <div>
    <StatLabel>{label}</StatLabel>
    <StatValue>{value}</StatValue>
  </div>
);

export default Stat;