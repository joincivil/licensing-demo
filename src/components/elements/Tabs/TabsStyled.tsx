import * as React from "react";
import styled from "styled-components";
import { TabComponentProps } from "./Tab";
import { colors, fonts, mediaQueries } from "../";

export interface StyledTabsContainerProps {
  flex?: boolean;
}

export const StyledTabsContainer = styled.span`
  display: ${(props: StyledTabsContainerProps) =>
    props.flex ? "flex" : "block"};

  ${mediaQueries.SMALL} {
    display: block;
  }
`;

export const StyledTabCount = styled.span`
  display: inline-block;
  border-radius: 31px;
  font-size: 12px;
  line-height: 15px;
  margin-left: 6px;
  padding: 3px 10px;
`;

/* Primary Tab styles used on the Registry page */
export const StyledTabNav = styled.div`
  background-color: ${colors.basic.GRAY_200};
  height: 76px;
  margin: 0 auto 50px;
  width: 100%;

  & > ul {
    justify-content: center;
  }

  ${mediaQueries.MEDIUM} {
    height: auto;
    margin-bottom: 30px;
    position: relative;

    & > ul {
      display: block;
      justify-content: left;
    }
  }
`;

export const StyledNav = styled.nav`
  border-bottom: 1px solid ${colors.basic.GRAY_300};
`;

export interface StyledResponsiveTabsToggleButtonProps {
  isExpanded: boolean;
}

export const StyledResponsiveTabsToggleButton = styled.div`
  display: none;

  ${mediaQueries.SMALL} {
    display: block;
    position: absolute;
    right: 16px;
    top: 16px;
    transform: ${(props: StyledResponsiveTabsToggleButtonProps) =>
      props.isExpanded ? "rotate(180deg)" : "rotate(0)"};
    z-index: 2;
  }

  & svg {
    ${mediaQueries.SMALL} {
      width: 16px;
      height: 26px;
    }
  }
`;

export const TabContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export const StyledTabLarge = styled.li`
  align-items: center;
  border-bottom: ${(props: TabComponentProps) =>
    props.isActive
      ? "8px solid " + colors.primary.BLUE
      : "8px solid transparent"};
  color: ${(props: TabComponentProps) =>
    props.isActive ? colors.primary.BLUE : colors.basic.GRAY_500};
  cursor: pointer;
  display: flex;
  font-family: ${fonts.SANS_SERIF};
  font-size: 19px;
  font-weight: 800;
  margin: 39px 40px 0 0;
  padding: 0 0 10px;

  &:last-of-type {
    margin: 39px 0 0 0;
  }

  &:hover {
    border-bottom: ${(props: TabComponentProps) =>
      props.isActive
        ? "8px solid " + colors.primary.BLUE
        : "8px solid " + colors.basic.GRAY_500};
  }

  & a {
    color: inherit;
  }

  & svg {
    margin-right: 5px;

    & circle {
      stroke: ${(props: TabComponentProps) =>
        props.isActive ? colors.primary.BLUE : colors.basic.GRAY_500};
    }

    & path {
      fill: ${(props: TabComponentProps) =>
        props.isActive ? colors.primary.BLUE : colors.basic.GRAY_500};
    }
  }

  ${mediaQueries.SMALL} {
    border-bottom-width: 0;
    display: ${(props: TabComponentProps) =>
      props.isActive || props.isResponsiveAndVisible ? "block" : "none"};
    padding: 20px 16px;
    margin: 0;

    & svg {
      ${(props: TabComponentProps) =>
        props.isResponsiveAndVisible
          ? "box-shadow: inset 0 -1px 0 0 " +
            colors.basic.GRAY_300 +
            ", inset 0 1px 0 0 " +
            colors.basic.GRAY_300 +
            ", 0 -1px 0 0 " +
            colors.basic.GRAY_700
          : ""};

      &:last-of-type {
        margin: 0;

        ${(props: TabComponentProps) =>
          props.isResponsiveAndVisible
            ? "box-shadow: inset 0 -3px 0 0 " +
              colors.primary.BLUE +
              ", 0 -1px 0 0 " +
              colors.basic.GRAY_700
            : ""};
      }
    }
  }
`;

/* Secondary Tab styles used on the Registry page */
export const StyledSquarePillTabNav = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 50px;
  width: 100%;

  ${mediaQueries.SMALL} {
    height: auto;
    margin: 30px 22px 20px;
    width: auto;
    position: relative;

    & > ul {
      display: block;
      width: 100%;
    }
  }
`;

/* Secondary Tab styles used on the Registry page */
export const StyledSquarePillTab = styled.li`
  background-color: ${(props: TabComponentProps) =>
    props.isActive ? colors.primary.BLUE : "transparent"};
  border: 1px solid ${colors.basic.GRAY_200};
  border-right: none;
  color: ${(props: TabComponentProps) =>
    props.isActive ? colors.primary.BLUE : colors.basic.BLACK};
  cursor: pointer;
  font-family: ${fonts.SANS_SERIF};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  padding: 20px 44px;
  white-space: nowrap;
  &:last-of-type {
    border-right: 1px solid ${colors.basic.GRAY_200};
  }

  &:hover {
    color: ${colors.primary.BLUE};
    background-color: ${colors.primary.BLUE_FADED};
  }

  & ${StyledTabCount} {
    background-color: ${(props: TabComponentProps) =>
      props.isActive ? colors.primary.BLUE : colors.basic.GRAY_300};
  }

  ${mediaQueries.SMALL} {
    border: 1px solid ${colors.basic.GRAY_200};
    border-width: 1px 1px 0;
    border-collapse: collapse;
    display: ${(props: TabComponentProps) =>
      props.isActive || props.isResponsiveAndVisible ? "block" : "none"};
    padding: 20px 16px;
    margin: 0;
    text-align: center;

    &:last-of-type {
      border-bottom-width: 1px;
    }
  }
`;

export const StyledRoundPillTabNav = styled.div`
  margin: 0 auto 50px;
  max-width: 1200px;
  width: 100%;
`;

export const StyledRoundPillTab = styled.li`
  background-color: ${(props: TabComponentProps) =>
    props.isActive ? colors.basic.GRAY_200 : "transparent"};
  border: 1px solid ${colors.basic.GRAY_200};
  border-radius: 23px;
  color: ${colors.basic.BLACK};
  cursor: pointer;
  font-family: ${fonts.SANS_SERIF};
  font-size: 14px;
  letter-spacing: -0.12px;
  list-style: none;
  margin-right: 10px;
  padding: 8px 15px;

  &:hover {
    background-color: ${colors.basic.GRAY_200};
  }
`;

export const StyledTab = styled.li`
  border-bottom: ${(props: TabComponentProps) =>
    props.isActive
      ? "2px solid " + colors.primary.BLUE
      : "2px solid transparent"};
  color: ${(props: TabComponentProps) =>
    props.isActive ? colors.basic.BLACK : colors.basic.GRAY_500};
  cursor: pointer;
  font-family: ${fonts.SANS_SERIF};
  font-size: 14px;
  letter-spacing: -0.12px;
  margin-right: 30px;
  padding: 25px 0 15px;
  text-align: center;
  text-decoration: none;
  transition: background-color 500ms, border 500ms, color 500ms;

  &:hover {
    border-bottom: 2px solid ${colors.primary.BLUE};
    color: ${colors.basic.BLACK};
  }
  &.active {
    border-bottom: 2px solid ${colors.primary.BLUE};
    color: ${colors.basic.BLACK};
  }
`;
