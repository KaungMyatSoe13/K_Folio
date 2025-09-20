import React from "react";
interface SideTabProps {
  content: string;
}

function SideTab({ content }: SideTabProps) {
  return <div className="w-[50%] bg-blue-500">{content}</div>;
}
export default SideTab;
