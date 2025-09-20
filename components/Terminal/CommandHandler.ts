import {
  getCurrentNode,
  listDirectory,
  readFile,
} from "../../app/lib/fileSystem";
import type { PortfolioItem as PortfolioItemType } from "../../app/lib/types";

interface CommandResult {
  response?: string;
  showMenu?: boolean;
  showBoxes?: boolean;
  clearOutput?: boolean;
  newPath?: string[];
}

interface TerminalState {
  setShowMenu: (show: boolean) => void;
  setShowBoxes: (show: boolean) => void;
  setOutput: (fn: (prev: string[]) => string[]) => void;
  setCurrentPath: (fn: (prev: string[]) => string[]) => void;
  output: string[];
  currentPath: string[];
}

export const handleCommand = (
  command: string,
  arg: string,
  currentNode: any,
  currentPath: string[],
  portfolioItems: PortfolioItemType[],
  state: TerminalState
): CommandResult => {
  let response = "";
  let showMenu = false;
  let showBoxes = false;
  let clearOutput = false;
  let newPath: string[] | undefined;

  switch (command) {
    case "help":
      response = "Available commands: help, projects, clear, ls, cd, cat";
      showMenu = false;
      break;

    case "projects":
      response = portfolioItems
        .map(
          (item: PortfolioItemType) =>
            `${item.name}: ${item.description} (${item.link})`
        )
        .join("\n");
      showBoxes = true;
      showMenu = false;
      break;

    case "clear":
      clearOutput = true;
      showBoxes = false;
      showMenu = false;
      response = "";
      break;

    case "ls":
    case "dir":
      response = listDirectory(currentNode);
      showMenu = false;
      break;

    case "cd":
      if (!arg) {
        response = "cd: missing directory";
      } else if (arg === "..") {
        if (currentPath.length > 1) {
          newPath = currentPath.slice(0, -1);
          response = "";
        } else {
          response = "cd: already at root";
        }
        showMenu = false;
      } else {
        const node = getCurrentNode(currentNode, [...currentPath, arg]);
        if (node.type === "directory") {
          newPath = [...currentPath, arg];
          response = "";
        } else {
          response = `cd: ${arg}: Not a directory`;
        }
        showMenu = false;
      }
      break;

    case "cat":
      if (!arg) {
        response = "cat: missing file";
      } else {
        const node = getCurrentNode(currentNode, [...currentPath, arg]);
        response = readFile(node);
      }
      showMenu = false;
      break;

    default:
      response = `Command not recognized: ${command}`;
      showMenu = false;
      break;
  }

  return {
    response,
    showMenu,
    showBoxes,
    clearOutput,
    newPath,
  };
};
