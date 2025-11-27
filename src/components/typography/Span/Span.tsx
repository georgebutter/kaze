import * as React from 'react';
import type { KazeTypographyProps } from '../../../types/index.ts';
import { KazeContext } from '../../providers/Kaze.tsx';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const Span: React.FC<Props> = ({
  children, className = '', as = 'span', variant, size
}) => {
  const { theme } = React.useContext(KazeContext);
  const { Span } = theme.components

  const classes = `${Span?.base || ''} ${Span?.variants?.[variant] || ''}  ${Span?.sizes?.[size] || ''} ${className || ''}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = KazeTypographyProps<HTMLParagraphElement>
