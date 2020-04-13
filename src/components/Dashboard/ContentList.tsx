import * as React from "react";
import styled from "styled-components";
import { ContentListItem } from "./ContentListItem";
import { dummyData } from "../types";

const TableStyled = styled.table`
  border-spacing: 0;
  width: 100%;
`;

const THStyled = styled.th`
  border-bottom: 2px solid #111;
  font-size: 14px;
  padding: 15px 5px 10px;
  text-align: left;
`;

export const ContentList: React.FunctionComponent = props => {
  const metadata = dummyData;
  return (
    <TableStyled>
      <thead>
        <tr>
          <THStyled>Title</THStyled>
          <THStyled>Publish Date</THStyled>
          <THStyled></THStyled>
          <THStyled></THStyled>
        </tr>
      </thead>
      <tbody>
        {metadata.map((article, idx) => (
          <ContentListItem key={idx} metadata={article} contentId={""} />
        ))}
      </tbody>
    </TableStyled>
  );
};
