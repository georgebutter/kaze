import * as React from 'react';
import type {KazeTypographyProps} from '../../../types/index.ts';
import {KazeContext} from '../../providers/Kaze.tsx';

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

