export type Tag =
  | "react"
  | "vue"
  | "svelte"
  | "node"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "firebase"
  | "react native"
  | "python"
  | "postgres";
export interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  tags: Tag[];
}
