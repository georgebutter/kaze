import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

export const SidebarMain: React.FC<Props> = ({
  children, className, minWidth = '1/2', as = 'main',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `w-0 min-w-${minWidth} flex-grow-999`;
  const classes = `${theme.components.SidebarMain?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  minWidth?: string;
}
