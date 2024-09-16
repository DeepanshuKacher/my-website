export const Urlname = {
  chess: "chess",
  eatrofoods: "eatrofoods",
  youtube_downloader: "youtube_downloader",
  vocabulary: "vocabulary",
} as const;

export type UrlName = keyof typeof Urlname;

export interface ProjectDetail {
  heading: string;
  majorText: string;
  imageLink: string;
  githubLink: string;
  siteUrl: string;
  urlname: UrlName;
  technologicalDescription: string;
}
