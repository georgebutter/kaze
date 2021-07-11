import * as React from 'react';
import {KazeContext} from '../providers/Kaze';

/**
 * Returns a horizontal stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const HStack: React.FC<Props> = ({
  children, space = 0, className = '',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-row space-x-${space}`;
  const classes = `${theme.components.HStack?.base || ''} ${className || ''} ${base}`;
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
   * The amount of horizontal spacing between elements in the stack.
   * Value is based upon the tailwind config.
   * Default is 0;
   **/
  space?: number;
  /**
   * Additional classNames to apply to the element,
   * only use this prop if this is a one off scenario otherwise use the
   * Kaze theme context.
   */
  className?: string;
}
