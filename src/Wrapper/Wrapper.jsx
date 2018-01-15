import React from "react";
import styled, { injectGlobal } from 'styled-components'

const baseStyles = () => injectGlobal`
* {
    margin: 0;
  }

  * + * {
    margin-top: 1em;
  }

  html, body {
    margin: 0;
  }
`;

const Wrapper= ({className, children}) => {
  baseStyles();

  return <div className={className}>{children}</div>
}

export default styled(Wrapper)`
  font-family: sans-serif;
`;