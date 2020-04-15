import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Metadata } from "../types";
import { OpenInNewIcon } from "../elements";

const TDStyled = styled.td`
  border-bottom: 1px solid #aaa;
  font-size: 14px;
  padding: 15px 5px 18px;
  text-overflow: ellipsis;

  a {
    color: #2b56ff;
    text-decoration: none;
  }
`;

export interface IssuedCredentialsListItemProps {
  contentId: string;
  metadata: Metadata;
}

export const IssuedCredentialsListItem: React.FunctionComponent<
  IssuedCredentialsListItemProps
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
