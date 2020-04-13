export interface Metadata {
  contentId: string;
  title: string;
  revisionContentHash: string;
  revisionContentURL: string;
  canonicalURL: string;
  slug: string;
  description: string;
  Contributors: ContributorsData[];
  images?: ImagesData[];
  tags: TagsData[];
  primaryTag: string;
  revisionDate: string;
  originalPublishDate: string;
  opinion: boolean;
  civilSchemaVersion: string;
}

export interface ContributorsData {
  contributor: string;
}

export interface ImagesData {
  url: string;
}

export interface TagsData {
  tag: string;
}

export const dummyData = [
  {
    contentId: "1",
    title:
      "A stunning 1 in 100 New York residents have now tested positive for coronavirus",
    revisionContentHash: "",
    revisionContentURL: "",
    canonicalURL:
      "https://www.washingtonpost.com/health/2020/04/13/stunning-1-100-new-york-residents-have-now-tested-positive-coronavirus/",
    slug:
      "stunning-1-100-new-york-residents-have-now-tested-positive-coronavirus",
    description:
      "The concentrations of cases in New York City, and New York State, appears unmatched across the globe.",
    Contributors: [
      { contributor: "Chris Mooney" },
      { contributor: "Ben Guarino" }
    ],
    images: [{ url: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XQXEQXT3KII6VIYRVWYTIRYZVE.jpg&w=1440" }],
    tags: [{ tag: "Health" }],
    primaryTag: "",
    revisionDate: "",
    originalPublishDate: "04/07/2020",
    opinion: true,
    civilSchemaVersion: ""
  },
  {
    contentId: "2",
    title:
      "Where Germany had success in fighting coronavirus, Britain stumbled",
    revisionContentHash: "",
    revisionContentURL: "",
    canonicalURL:
      "https://www.washingtonpost.com/world/2020/04/13/where-germany-had-success-fighting-coronavirus-britain-failed/",
    slug: "where-germany-had-success-fighting-coronavirus-britain-failed",
    description:
      "British Prime Minister Boris Johnson exited the hospital Sunday nearly a week after entering intensive care for coronavirus-related complications. But that spot of good news was darkened by a new grim statistic: His country’s official count of hospital deaths related to the virus surpassed 10,000 over the weekend.",
    Contributors: [{ contributor: "Ishaan Tharoor" }],
    images: [{url: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RCSZHQDY3QI6VIYRVWYTIRYZVE.jpg&w=1440"}],
    tags: [{ tag: "Health" }],
    primaryTag: "",
    revisionDate: "",
    originalPublishDate: "04/05/2020",
    opinion: true,
    civilSchemaVersion: ""
  },
  {
    contentId: "3",
    title:
      "Keep parks open. The benefits of fresh air outweigh the risks of infection.",
    revisionContentHash: "",
    revisionContentURL: "",
    canonicalURL:
      "https://www.washingtonpost.com/outlook/2020/04/13/keep-parks-open-benefits-fresh-air-outweigh-risks-infection/",
    slug: "keep-parks-open-benefits-fresh-air-outweigh-risks-infection",
    description:
      "Some simple strategies can help keep you healthy. Remember to wear a mask.",
    Contributors: [{ contributor: "Ishaan Tharoor" }],
    images: [{url: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RCSZHQDY3QI6VIYRVWYTIRYZVE.jpg&w=1440"}],
    tags: [{ tag: "Perspective" }],
    primaryTag: "",
    revisionDate: "",
    originalPublishDate: "04/01/2020",
    opinion: true,
    civilSchemaVersion: ""
  },
  {
    contentId: "4",
    title:
      "When will schools reopen? It depends on where you live, who’s in charge and whether they believe Anthony Fauci.",
    revisionContentHash: "",
    revisionContentURL: "",
    canonicalURL:
      "https://www.washingtonpost.com/education/2020/04/13/schools-reopen-coronavirus/",
    slug: "schools-reopen-coronavirus",
    description:
      "A debate is raging over when and how to reopen U.S. schools after closing them to fight the spread of the novel coronavirus.",
    Contributors: [{ contributor: "Ishaan Tharoor" }],
    images: [{url: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RCSZHQDY3QI6VIYRVWYTIRYZVE.jpg&w=1440"}],
    tags: [{ tag: "Perspective" }],
    primaryTag: "",
    revisionDate: "",
    originalPublishDate: "04/01/2020",
    opinion: true,
    civilSchemaVersion: ""
  }
];
