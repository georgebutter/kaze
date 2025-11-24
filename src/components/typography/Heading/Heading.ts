import * as React from 'react';
import {KazeTypographyProps} from '@types';
import {KazeContext} from '@providers/Kaze';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<KazeTypographyProps>}
 */
export const Heading: React.FC<KazeTypographyProps<HTMLHeadingElement>> = ({
  children, className = '', as = 'h2', variant, size,
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Heading} = theme.components;
  const classes = `${Heading?.base || ''} ${Heading?.variants?.[variant] || ''} ${Heading?.sizes?.[size] || ''} ${className || ''}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

