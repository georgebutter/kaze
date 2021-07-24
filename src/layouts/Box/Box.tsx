import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a Box component which, by the design philosophy should always
 * have equal padding. If it doesn't then it shouldn't be a box. Additionally a
 * Box should never have a set width or height, this should always been defined
 * either by the context that it's within, or what is within the box.
 * @return {React.FC<Props>}
 */
export const Box: React.FC<Props> = ({
  children, padding = 0, className = '', as = 'div',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `p-${padding} m-0 w-auto`;
  const classes = `${theme.components.Box?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  /**
   * The amount of horizontal spacing between elements in the stack.
   * Value is based upon the tailwind config.
   * Default is 0;
   **/
  padding?: number;
}
