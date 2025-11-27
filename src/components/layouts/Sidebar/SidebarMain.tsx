import * as React from 'react';
import type {DefaultProps} from '../../../types/index.ts';
import {KazeContext} from '../../providers/Kaze.tsx';

export const SidebarMain: React.FC<Props> = ({
  children,
  className,
  minWidth = '1/2',
  as = 'main',
  variant,
}) => {
  const {theme} = React.useContext(KazeContext);
  const {SidebarMain} = theme.components;
  const base = `w-0 min-w-${minWidth} flex-grow-999`;
  const classes = `${SidebarMain?.base || ''} ${
    SidebarMain?.variants?.[variant] || ''
  } ${className || ''} ${base}`;
  return React.createElement(
      as,
      {
        className: classes,
      },
      children,
  );
};

type Props = DefaultProps<HTMLDivElement> & {
  minWidth?: string;
};
