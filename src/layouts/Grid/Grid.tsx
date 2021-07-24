import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a grid component.
 * Grid items are intrisically sized based on their content and the
 * space the grid has to fill.
 *
 * The grid items minimum width is 250px, you can use the cols prop
 * to pass your own tailwind class: `grid-cols-${cols}`
 *
 * @return {React.FC<Props>}
 */
export const Grid: React.FC<Props> = ({
  children, className, as = 'div', gap = 2, cols = 'auto250',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `grid grid-cols-${cols} gap-${gap}`;
  const classes = `${theme.components.Grid?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  /**
   * The grid-gap value i.e the spacing between grid items.
   * The value is as defined in your tailwind config.
   */
  gap?: number;
  cols?: string;
}
