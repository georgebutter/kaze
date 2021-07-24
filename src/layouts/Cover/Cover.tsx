import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a Cover component which allows elements to be displayed in a
 * grid where the elements are different height or width.
 * @return {React.FC<Props>}
 */
export const Cover: React.FC<Props> = ({
  children, as = 'div', className = '', padding = 0,
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-col min-h-screen p-${padding} justify-between`;
  const classes = `${theme.components.Cover?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  padding?: number;
}

