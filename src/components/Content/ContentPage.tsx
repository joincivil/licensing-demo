import * as React from "react";
import { dummyData } from "../types";
import { ContentDetail } from "./ContentDetail";

export const ContentPage: React.FunctionComponent = props => {
  return (
    <ContentDetail metadata={dummyData[1]} />
  );
};

export default ContentPage;
