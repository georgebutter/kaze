import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a Cluster component which allows elements to be displayed in a
 * grid where the elements are different height or width.
 * @return {React.FC<Props>}
 */
export const Cluster: React.FC<Props> = ({
  children, className = '', gap = 0, items = 'start', justify = 'start', as = 'div',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-wrap gap-${gap} items-${items} justify-${justify}`;
  const classes = `${theme.components.Cluster?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  gap?: number;
  justify?: Flex;
  items?: Flex;
}

type Flex = 'start' | 'center' | 'end';
