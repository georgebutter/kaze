import * as React from 'react';
import {KazeContext} from '../providers/Kaze';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const VStack: React.FC<Props> = ({
  children, space = 0, className = '',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-col space-y-${space}`;
  const classes = `${theme.components.VStack?.base || ''} ${className || ''} ${base}`;
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
   * The amount of vertical spacing between elements in the stack.
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
