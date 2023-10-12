import { ButtonHTMLAttributes } from "react";

type ColorProp = "primary" | "secondary";

export type ButtonProps = {
  color: ColorProp;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
