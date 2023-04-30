import * as React from 'react';
import {DefaultProps, MaxWidths, Spacings} from '@types';
import {KazeContext} from '@providers/Kaze';

export const Center: React.FC<Props> = ({
  children,
  className,
  variant,
  width = 'none',
  padding = 0,
  as = 'div',
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Center} = theme.components;
  const base = `box-content max-w-${width} mx-auto px-${padding} flex flex-col`;
  const classes = `${Center?.base || ''} ${Center?.variants?.[variant] || ''} ${
    className || ''
  } ${base}`;
  return React.createElement(
      as,
      {
        className: classes,
      },
      children,
  );
};

type Props = DefaultProps<HTMLDivElement> & {
  width?: MaxWidths;
  padding?: Spacings;
};
