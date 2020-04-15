import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { IssuedCredentials } from "./IssuedCredentials";
import { DashboardLayout, DashboardTab } from "../elements";

export interface DashboardParams {
  activeTab?: "issued-credentials" | "recieved-credentials" | "marketplace" | "members" | "settings";
}
const TABS = ["issued-credentials", "recieved-credentials", "marketplace", "members", "settings"];

export interface DashboardProps extends RouteComponentProps<DashboardParams> {
  user?: any;
}

export const Dashboard: React.FunctionComponent<DashboardProps> = props => {
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);
  React.useEffect(() => {
    const activeTab = props.match.params.activeTab || "issued-credentials";
    if (TABS[activeTabIndex] !== activeTab) {
      setActiveTabIndex(TABS.indexOf(activeTab));
    }
  }, [props.match.params.activeTab]);

  return (
    <>
      <DashboardLayout
          activeIndex={activeTabIndex}
          onActiveTabChange={(tab: number) => {
            props.history.push(formatRoute(props.match.path, { activeTab: TABS[tab] }));
          }}>
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
