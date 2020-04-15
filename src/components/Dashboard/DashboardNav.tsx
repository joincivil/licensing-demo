import * as React from "react";
import styled from "styled-components";

export const DashboardNavStyled = styled.div`
  background-color: #f1f1f1;
  bottom: 0;
  height: 100%;
  position: fixed;
  padding: 20px;
  top: 0;
  width: 300px;

  button {
    display: block;
  }
`;

export const DashboardNav: React.FunctionComponent = props => {
  return (
    <DashboardNavStyled>
      {props.children}
    </DashboardNavStyled>
  );
};
