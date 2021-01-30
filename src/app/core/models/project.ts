export interface IProject {
  key: string;
  name: string;
  otherNames?: string;
  description: string;
  image: string;
  genders?: string[];
  language?: string;
  sigle: string;
  author: string;
  artist: string;
  lastModification: string;
  lastChapterName: string;
  visible: boolean;
  shocking: boolean;
  licence: boolean;
}
