import * as React from "react";
import styled from "styled-components";
import { ContentList } from "./ContentList";
import { Button } from "rimble-ui";
import { DashboardNav } from "./DashboardNav";
import { Tabs, Tab, StyledTabNav, StyledTabLarge } from "../elements";

export const DashboardStyled = styled.div``;

export const DashboardContent = styled.div`
  margin-left: 300px;
  padding: 20px;
  width: calc(100% - 300px);
`;

export const Dashboard: React.FunctionComponent = props => {
  return (
    <DashboardStyled>
      <DashboardNav>
        <Button.Text mainColor="#111">Issued Credentials</Button.Text>
        <Button.Text mainColor="#111">Recieved Credentials</Button.Text>
        <Button.Text mainColor="#111">Marketplace</Button.Text>
        <Button.Text mainColor="#111">Members</Button.Text>
        <Button.Text mainColor="#111">Settings</Button.Text>
      </DashboardNav>
      <DashboardContent>
        <ContentList />
        <Tabs TabsNavComponent={StyledTabNav} TabComponent={StyledTabLarge}>
          <Tab title={"Some Content"}>
            <p>Some Content</p>
          </Tab>
          <Tab title={"some other content"}>
            <p>Some other Content</p>
          </Tab>
          <Tab title={"Some more Content"}>
            <p>Some more Content</p>
          </Tab>
        </Tabs>
      </DashboardContent>
    </DashboardStyled>
  );
};

export default Dashboard;
