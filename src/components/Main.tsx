import * as React from "react";
import { PrimaryNav } from "./Navs/PrimaryNav";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: rgba(87,88,246,0.2);
  padding-top: 90px;
`;

export const Main: React.FunctionComponent = props => {
  return (
    <MainContainer>
      <PrimaryNav />
      {props.children}
    </MainContainer>
  );
};
