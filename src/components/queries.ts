import gql from "graphql-tag";

export const CONTENT = gql`
  query ContentList($id: String!) {
    postsGet(id: $id) {
      contentId
      title
      revisionContentHash
      revisionContentURL
      canonicalURL
      slug
      description
      Contributors
      images
      tags {
        tag
      }
      primaryTag
      revisionDate
      originalPublishDate
      opinion
      civilSchemaVersion
    }
  }
`;

export const CONTENT_LIST = gql`
  query ContentList($id: String!) {
    postsGet(id: $id) {
      contentId
      title
      revisionContentHash
      revisionContentURL
      canonicalURL
      slug
      description
      Contributors
      images
      tags {
        tag
      }
      primaryTag
      revisionDate
      originalPublishDate
      opinion
      civilSchemaVersion
    }
  }
`;
