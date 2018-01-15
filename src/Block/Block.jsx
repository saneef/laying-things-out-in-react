import React from "react";
import styled from "styled-components";

const borderColor = "rgba(119, 136, 153, 0.15)";

const BlockWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  background: white;
  border-radius: 3px;

  & > * {
    margin-top: 0;
  }
`;

const BlockContent = styled.div`
  padding: 1em;
  border: 1px solid ${borderColor};
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: ${props => !props.leftBorder ? 0 : null }
  border-right-width: ${props => !props.rightBorder ? 0 : null }
`;
const BlockLeftSideBar = styled.div`
  padding: 1em;
  width: 9em;
  flex-shrink: 0;
`;
const BlockRightSideBar = styled.div`
  padding: 1em;
  width: 6em;
  flex-shrink: 0;
`;

const Block = ({ className, children, leftSideBar, rightSideBar }) => {
  return (
    <div className={className}>
      <BlockWrapper>
        {leftSideBar ? (
          <BlockLeftSideBar>{leftSideBar}</BlockLeftSideBar>
        ) : null}
        <BlockContent leftBorder={leftSideBar} rightBorder={rightSideBar}>{children}</BlockContent>
        {rightSideBar ? (
          <BlockRightSideBar>{rightSideBar}</BlockRightSideBar>
        ) : null}
      </BlockWrapper>
    </div>
  );
};

export default styled(Block)`
  padding: 1em 0;
  background-color: ${borderColor};

  & + & {
    margin-top: 0;
    padding-top: 0;
  }
`;
