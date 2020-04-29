import * as React from "react";
import styled from "styled-components";
import { Avatar, Input } from "rimble-ui";
import { UportLogoIcon, fonts } from "../elements";

const PrimaryNavStyled = styled.div`
  align-items: flex-start;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 10px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const PrimaryNavFlex = styled.div`
  align-items: flex-start;
  display: flex;
`;

const PrimaryNavIcon = styled.div`
  border: 1px solid #5758F6;
  border-radius: 6px;
  margin-right: 60px;
  padding: 7px 8px;
`;

const PrimaryNavLabel = styled.div`
  margin-right: 20px;

  h1 {
    font-family: ${fonts.SANS_SERIF};
    font-weight: bold;
    font-size: 24px;
    line-height: 1;
    margin: 0;

    span {
      display: block;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

const PrimaryNavSearch = styled.div`
  margin-right: 20px;
`;

const PrimaryNavUser = styled.div`
  margin-right: 20px;
`;

export interface PrimaryNavProps {
  user?: any;
}

export const PrimaryNav: React.FunctionComponent<PrimaryNavProps> = props => {
  return (
    <PrimaryNavStyled>
      <PrimaryNavFlex>
        <PrimaryNavIcon>
          <UportLogoIcon />
        </PrimaryNavIcon>
        <PrimaryNavLabel>
          <h1>
            TouchStone<span>Trust Filter</span>
          </h1>
        </PrimaryNavLabel>
      </PrimaryNavFlex>
      <PrimaryNavFlex>
        <PrimaryNavSearch>
          <Input type="search" required={true} placeholder="Search" />
        </PrimaryNavSearch>
        <PrimaryNavUser>
          <Avatar size="small" bg="#5758F6" />
        </PrimaryNavUser>
      </PrimaryNavFlex>
    </PrimaryNavStyled>
  );
};
