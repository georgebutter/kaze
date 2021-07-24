import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

export const SidebarSide: React.FC<Props> = ({
  children, className, as = 'aside',
}) => {
  const {theme} = React.useContext(KazeContext);
  const classes = `${theme.components.SidebarSide?.base || ''} ${className || ''} flex-grow`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps
