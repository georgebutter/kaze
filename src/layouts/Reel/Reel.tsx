import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a horizontal overflow element with scrolling
 * @return {React.FC<Props>}
 */
export const Reel: React.FC<Props> = ({
  children, className = '', as = 'div', space = 0, variant,
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Reel} = theme.components
  const base = `flex h-auto overflow-x-auto overflow-y-hidden space-x-${space}`;
  const classes = `${Reel?.base || ''} ${Reel?.variants?.[variant] || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, React.Children.map(children, (child) => {
    if (!['string', 'number'].includes(typeof child)) {
      const cast = child as React.ReactElement;
      return React.cloneElement(cast, {
        className: `${cast.props.className} flex-none`,
      });
    }
  }));
};

type Props = DefaultProps & {
  /**
   * The amount of horizontal spacing between elements in the stack.
   * Value is based upon the tailwind config.
   * Default is 0;
   **/
  space?: number;
}
