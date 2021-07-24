import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

export const Sidebar: React.FC<Props> = ({
  children, className, gap = 0, as = 'div',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-wrap gap-${gap}`;
  const classes = `${theme.components.Sidebar?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  gap?: number
}
