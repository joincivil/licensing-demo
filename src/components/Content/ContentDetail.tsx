import * as React from "react";
import styled from "styled-components";
import { Card } from "rimble-ui";
import { Metadata } from "../types";
import { OpenInNewIcon } from "../elements";

const ContentDetailStyled = styled.div`
  padding: 50px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin: 0 0 8px;
    transition: color 0.2s ease;
  }

  a {
    color: #2b56ff;
    text-decoration: none;
  }
`;

const Date = styled.div`
  color: #666;
  font-size: 13px;
  line-height: 17px;
  margin: 0 0 8px;
`;

const Label = styled.label`
  color: #666;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  text-transform: uppercase;
`;

const ViewArticle = styled.div`
  margin: 0 0 20px;
`;

const Tags = styled.div`
  color: #666;
  font-size: 13px;
  line-height: 17px;
  margin: 0 0 8px;
`;

export interface ContentDetailProps {
  metadata: Metadata;
}

export const ContentDetail: React.FunctionComponent<
  ContentDetailProps
> = props => {
  const { metadata } = props;
  return (
    <ContentDetailStyled>
      <Card>
        <h1>{metadata.title}</h1>
        <Date>
          <Label>Published: </Label>
          {metadata.originalPublishDate}
        </Date>
        <p>{metadata.description}</p>
        <ViewArticle>
          <a href={metadata.canonicalURL} target="_blank">
            View Article <OpenInNewIcon />
          </a>
        </ViewArticle>
        <Tags>
          <Label>Tags: </Label>
          {metadata.tags.map((tag, idx) => (
            <span key={idx}>{tag.tag}</span>
          ))}
        </Tags>
      </Card>
    </ContentDetailStyled>
  );
};
