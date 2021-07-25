import * as React from 'react';
import {DefaultProps} from '@types';
import {KazeContext} from '@providers/Kaze';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const Text: React.FC<Props> = ({
  children, className = '', as = 'p', variant, size
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Text} = theme.components
  const base = `max-w-prose`;
  const classes = `${Text?.base || ''} ${Text?.variants?.[variant] || ''}  ${Text?.sizes?.[size] || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  size: string
}
