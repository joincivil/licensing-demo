import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Metadata } from "../types";
import { OpenInNewIcon } from "../icons";

const TDStyled = styled.td`
  border-bottom: 1px solid #aaa;
  font-size: 14px;
  padding: 15px 5px 18px;
  text-overflow: ellipsis;

  a {
    color: #2B56FF;
    text-decoration: none;
  }
`;

export interface ContentListItemProps {
  contentId: string;
  metadata: Metadata;
}

export const ContentListItem: React.FunctionComponent<
  ContentListItemProps
> = props => {
  const { metadata } = props;
  return (
    <tr>
      <TDStyled>{metadata.title}</TDStyled>
      <TDStyled>{metadata.originalPublishDate}</TDStyled>
      <TDStyled>
        <Link to="/content">View Details</Link>
      </TDStyled>
      <TDStyled>
        <a href={metadata.canonicalURL} target="_blank">
          View Article <OpenInNewIcon />
        </a>
      </TDStyled>
    </tr>
  );
};
