import * as React from "react";
import { IssuedCredentials } from "./IssuedCredentials";
import { DashboardLayout, DashboardTab } from "../elements";

export const Dashboard: React.FunctionComponent = props => {
  return (
    <>
      <DashboardLayout>
        <DashboardTab title={"Issued Credentials"}>
          <IssuedCredentials />
        </DashboardTab>
        <DashboardTab title={"Recieved Credentials"}>
          <p>Recieved Credentials</p>
        </DashboardTab>
        <DashboardTab title={"Marketplace"}>
          <p>Marketplace</p>
        </DashboardTab>
        <DashboardTab title={"Members"}>
          <p>Members</p>
        </DashboardTab>
        <DashboardTab title={"Settings"}>
          <p>Settings</p>
        </DashboardTab>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
