import * as React from "react";
import styled from "styled-components";
import { Card } from "rimble-ui";
import { ContentList } from "./ContentList";

export const DashboardStyled = styled.div`
  padding: 50px;
`;

export const Dashboard: React.FunctionComponent = props => {
  return (
    <DashboardStyled>
      <Card>
        <ContentList />
      </Card>
    </DashboardStyled>
  );
};

export default Dashboard;
