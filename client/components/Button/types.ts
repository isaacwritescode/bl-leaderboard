import { Key, MouseEvent, MouseEventHandler } from "react";

export interface Props {
  children?: any;
  color?: "primary" | "secondary" | "accent" | "outline";
  onClick?: any;
  key?: Key;
}
