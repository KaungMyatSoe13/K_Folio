// lib/types.ts
export interface FileSystemNode {
  type: "file" | "directory";
  name: string;
  content?: string; // For files
  children?: Record<string, FileSystemNode>; // For directories
}

export interface PortfolioItem {
  id: number;
  name: string;
  description: string;
  link: string;
}
