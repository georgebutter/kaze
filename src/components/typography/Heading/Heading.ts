import * as React from 'react';
import {DefaultProps} from '@types';
import {KazeContext} from '@providers/Kaze';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const Heading: React.FC<Props> = ({
  children, className = '', as = 'h2', variant, size
}) => {
  const {theme} = React.useContext(KazeContext);
  const { Heading } = theme.components
  const base = ``;
  const classes = `${Heading?.base || ''} ${Heading?.variants?.[variant] || ''}  ${Heading?.sizes?.[size] || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  size: string
}
