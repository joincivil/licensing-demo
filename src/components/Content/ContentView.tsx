import * as React from "react";
import { dummyData } from "../types";
import { Main } from "../Main";
import { ContentDetails } from "./ContentDetails";
import { ContentTimeline } from "./ContentTimeline";
import { ContentVCFeed } from "./ContentVCFeed";

export const ContentView: React.FunctionComponent = props => {
  return (
    <Main>
      <ContentDetails metadata={dummyData[1]} />
      <ContentTimeline />
      <ContentVCFeed />
    </Main>
  );
};

export default ContentView;
