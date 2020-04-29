import * as React from "react";
import styled from "styled-components";
import { Avatar } from "rimble-ui";
import { UportLogoIcon } from "../elements";

const PrimaryNavStyled = styled.div`
  padding: 10px;
`;

export interface PrimaryNavProps {
  user?: any;
}

export const PrimaryNav: React.FunctionComponent<PrimaryNavProps> = props => {
  return (
    <PrimaryNavStyled>
      <>
        <UportLogoIcon />
      </>
      <>
        <UportLogoIcon />
      </>
      <>
        <UportLogoIcon />
      </>
      <>
        <Avatar size="small" bg="#5758F6" />
      </>
    </PrimaryNavStyled>
  );
};
