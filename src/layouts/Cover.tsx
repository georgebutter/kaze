import * as React from 'react';
import {KazeContext} from '../providers/Kaze';

/**
 * Returns a Cover component which allows elements to be displayed in a
 * grid where the elements are different height or width.
 * @return {React.FC<Props>}
 */
export const Cover: React.FC<Props> = ({
  children, className = '',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-col min-h-screen`;
  const classes = `${theme.components.Cover?.base || ''} ${className || ''} ${base}`;
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
}

