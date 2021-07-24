import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

export const Center: React.FC<Props> = ({
  children, className, width = 'none', padding = 0, as = 'div',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `box-content max-w-${width} mx-auto px-${padding} flex flex-col`;
  const classes = `${theme.components.Center?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  width?: string;
  padding?: number;
}

