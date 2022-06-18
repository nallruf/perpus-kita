import Link from "next/link";
import React from "react";

type ButtonType = "outlined" | "filled";
// let used = "bg-red-600 bg-green-600";
interface ButtonProp {
  children: string;
  color?: string;
  type?: ButtonType;
  link?: string;
  px?: number;
}
export default function Button({
  children,
  color = "green",
  px = 4,
  type,
  link = "#",
}: ButtonProp) {
  let className;
  switch (type) {
    case "outlined":
      className = `cursor-pointer text-lg font-medium py-1 px-4 rounded-full border-2 border-green-500 shadow-md text-black/70 hover:border-green-700 hover:text-black/90`;
      break;
    case "filled":
    default:
      className = `cursor-pointer text-lg font-medium hover:bg-green-600 py-1 px-4 bg-green-400 shadow-md text-white rounded-full`;
      break;
  }
  return (
    <Link href={link}>
      <button
        style={{
          paddingLeft: px,
          paddingRight: px,
        }}
        className={className}
      >
        {children}
      </button>
    </Link>
  );
}