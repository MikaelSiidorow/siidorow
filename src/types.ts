import { tagColors } from "./constants";
export type Tag = keyof typeof tagColors;
export interface Project {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly link: string;
  readonly tags: Tag[];
}
