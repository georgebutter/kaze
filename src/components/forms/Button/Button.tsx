import React from "react";
import { KazeContext } from "@providers/Kaze";
import { DefaultProps } from "@types";

export const Button: React.FC<Props> = ({
  children,
  className,
  variant,
  ...props
}) => {
  const { theme } = React.useContext(KazeContext);
  const { Button } = theme.components;
  const base = "block";
  const classes = `${Button?.base || ""} ${Button?.variants?.[variant] || ""} ${
    className || ""
  } ${base}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & DefaultProps;
