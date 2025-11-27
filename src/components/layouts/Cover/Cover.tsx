import * as React from 'react';
import type {DefaultProps} from '../../../types/index.ts';
import {KazeContext} from '../../providers/Kaze.tsx';

/**
 * Returns a Cover component which allows elements to be displayed in a
 * grid where the elements are different height or width.
 * @return {React.FC<Props>}
 */
export const Cover: React.FC<Props> = ({
  children,
  as = 'div',
  className = '',
  variant,
  padding = 0,
  ...props
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Cover} = theme.components;
  const base = `flex flex-col min-h-screen p-${padding} justify-between`;
  const classes = `${Cover?.base || ''} ${Cover?.variants?.[variant] || ''} ${
    className || ''
  } ${base}`;
  return React.createElement(
      as,
      {
        className: classes,
        ...props,
      },
      children,
  );
};

type Props = DefaultProps<HTMLDivElement> & {
  padding?: number;
};
