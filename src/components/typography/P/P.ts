import * as React from 'react';
import { DefaultProps, KazeTypographyProps } from '@types';
import { KazeContext } from '@providers/Kaze';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const P: React.FC<Props> = ({
  children, className = '', as = 'p', variant, size
}) => {
  const { theme } = React.useContext(KazeContext);
  const { P } = theme.components
  const base = `max-w-prose`;
  const classes = `${P?.base || ''} ${P?.variants?.[variant] || ''}  ${P?.sizes?.[size] || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = KazeTypographyProps<HTMLParagraphElement>
