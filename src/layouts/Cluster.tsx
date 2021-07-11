import * as React from 'react';
import {KazeContext} from '../providers/Kaze';

/**
 * Returns a Cluster component which allows elements to be displayed in a
 * grid where the elements are different height or width.
 * @return {React.FC<Props>}
 */
export const Cluster: React.FC<Props> = ({
  children, className = '', gap = 0, items = 'start', justify = 'start',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-wrap gap-${gap} items-${items} justify-${justify}`;
  const classes = `${theme.components.Cluster?.base || ''} ${className || ''} ${base}`;
  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};

type Props = {
  /**
   * Additional classNames to apply to the element,
   * only use this prop if this is a one off scenario otherwise use the
   * Kaze theme context.
   */
  className?: string;
  gap?: number;
  justify?: Flex;
  items?: Flex;
}

type Flex = 'start' | 'center' | 'end';
