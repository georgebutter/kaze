import * as React from 'react';
import {DefaultProps} from '@types';
import {KazeContext} from '@providers/Kaze';

export const SidebarSide: React.FC<Props> = ({
  children, className, as = 'aside', variant
}) => {
  const {theme} = React.useContext(KazeContext);
  const { SidebarSide } = theme.components
  const classes = `${SidebarSide?.base || ''} ${SidebarSide?.variants?.[variant] || ''} ${className || ''} flex-grow`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps
