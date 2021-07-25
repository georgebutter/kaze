import * as React from 'react';
import {DefaultProps} from '@types';
import {KazeContext} from '@providers/Kaze';

export const SidebarMain: React.FC<Props> = ({
  children, className, minWidth = '1/2', as = 'main', variant
}) => {
  const {theme} = React.useContext(KazeContext);
  const { SidebarMain } = theme.components
  const base = `w-0 min-w-${minWidth} flex-grow-999`;
  const classes = `${SidebarMain?.base || ''} ${SidebarMain?.variants?.[variant] || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  minWidth?: string;
}
