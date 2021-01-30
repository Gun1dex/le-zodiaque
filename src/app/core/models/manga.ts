export interface Manga {
  key: string;
  name: string;
  description: string;
  image: string;
  gender?: string[];
  language?: string;
  acronym: string;
  lastModification: string;
  lastChapterName: string;
  visible: boolean
}
