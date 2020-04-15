import styled from "styled-components";
import { colors } from "../../";

export const DashboardLayoutContainer = styled.span`
  display: flex;
`;

export const DashboardContent = styled.div`
  margin-left: 300px;
  padding: 20px;
  width: calc(100% - 300px);
`;

export const DashboardNavDefault = styled.nav`
  background-color: ${colors.basic.GRAY_100};
  bottom: 0;
  height: 100%;
  position: fixed;
  padding: 20px;
  top: 0;
  width: 300px;
`;

export const DashboardTabBtnContainer = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export interface DashboardResponsiveTabsToggleButtonProps {
  isExpanded: boolean;
}

export const DashboardResponsiveTabsToggleButton = styled.div`
  display: none;
  transform: ${(props: DashboardResponsiveTabsToggleButtonProps) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0)"};

  & svg {
    height: 26px;
    width: 16px;
  }
`;
