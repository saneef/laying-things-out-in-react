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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  ol {
    padding-left: 1em;
  }
`;

const Wrapper= ({className, children}) => {
  baseStyles();

  return <div className={className}>{children}</div>
}

export default styled(Wrapper)`
  &,
  * + & {
    margin-top: 0;
  }
`;