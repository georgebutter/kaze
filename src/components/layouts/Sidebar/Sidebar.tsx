import * as React from 'react';
import type {DefaultProps, Spacings} from '../../../types/index.ts';
import {KazeContext} from '../../providers/Kaze.tsx';

export const Sidebar: React.FC<Props> = ({
  children,
  className,
  gap = 0,
  as = 'div',
  variant,
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Sidebar} = theme.components;
  const base = `flex flex-wrap gap-${gap}`;
  const classes = `${Sidebar?.base || ''} ${Sidebar?.variants?.[variant]} ${
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
  gap?: Spacings;
};
