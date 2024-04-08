import { ReactNode } from "react";

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";
export type TypographyVariants = "titleBlock";

export interface TypographyProps {
  className?: string;
  children: ReactNode;
  variant?: TypographyVariants;
  component?: TagVariants;
}
