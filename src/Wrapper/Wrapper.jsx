import React from "react";
import styled from "styled-components";

export default styled.div`
  font-family: sans-serif;

  * {
    margin: 0;
  }

  * + * {
    margin-top: 1em;
  }
`;