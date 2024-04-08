import React from "react";
import { TypographyProps, TagVariants } from "./Typography.interface";
import styles from "./Typography.module.scss";
import clsx from "clsx";
export const Typography = (props: TypographyProps) => {
  const {
    children,
    component: Component = "p",
    className,
    variant = "titleBlock",
  } = props;
  return (
    <Component className={clsx(styles.typography, className, styles[variant])}>
      {children}
    </Component>
  );
};
