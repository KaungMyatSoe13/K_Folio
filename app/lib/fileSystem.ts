// lib/fileSystem.ts
import { FileSystemNode } from "./types";

export const fileSystem: FileSystemNode = {
  type: "directory",
  name: "/",
  children: {
    "about.txt": {
      type: "file",
      name: "about.txt",
      content:
        "Hi, I'm [Your Name], a developer. Check my projects with 'cd projects' or 'projects'!",
    },
    projects: {
      type: "directory",
      name: "projects",
      children: {
        "project1.txt": {
          type: "file",
          name: "project1.txt",
          content:
            "Project 1: A cool web app\nDescription: Built with Next.js\nLink: https://example.com/project1",
        },
        "project2.txt": {
          type: "file",
          name: "project2.txt",
          content:
            "Project 2: A machine learning model\nDescription: Built with Python\nLink: https://example.com/project2",
        },
      },
    },
  },
};

export const getCurrentNode = (
  fs: FileSystemNode,
  path: string[]
): FileSystemNode => {
  let current = fs;
  for (const segment of path) {
    if (
      current.type === "directory" &&
      current.children &&
      segment in current.children
    ) {
      current = current.children[segment];
    } else {
      return current; // Return current if path is invalid
    }
  }
  return current;
};

export const listDirectory = (node: FileSystemNode): string => {
  if (node.type !== "directory" || !node.children) return "";
  return Object.keys(node.children).join("  ");
};

export const readFile = (node: FileSystemNode): string => {
  if (node.type === "file" && node.content) return node.content;
  return "Error: Not a file or no content";
};
