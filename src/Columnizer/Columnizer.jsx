import React from "react";
import styled from "styled-components";

const Column = styled.div`
  float: left;
  width: ${props => props.width};
  padding-left: ${props => props.gutter};
`;

Column.defaultProps = {
  width: "100%"
};

const Columnizer = ({ className, children, gutter }) => {
  const renderColumns = () => {
    const columnEls = [];

    if (children && children.length && typeof children !== "string") {
      const width = `${100 / children.length}%`;

      React.Children.forEach(children, (c, i) => {
        columnEls.push(
          <Column key={i} width={width} gutter={gutter}>
            {c}
          </Column>
        );
      });
    } else {
      columnEls.push(<Column key={1}>{children}</Column>);
    }

    return columnEls;
  };

  return <div className={className}>{renderColumns()}</div>;
};

Columnizer.defaultProps = {
  gutter: "0"
};

export default styled(Columnizer)`
  margin-left: -${props => props.gutter};

  &,
  & * {
    box-sizing: border-box;
  }

  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;
