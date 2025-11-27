import * as React from 'react';
import type {DefaultProps, FlexAlignments, Spacings} from '../../../types/index.ts';
import {KazeContext} from '../../providers/Kaze.tsx';
/**
 * Returns a Cluster component which allows elements to be displayed in a
 * grid where the elements are different height or width.
 * @return {React.FC<Props>}
 */
export const Cluster: React.FC<Props> = ({
  children,
  className = '',
  variant,
  gap = 0,
  items = 'start',
  justify = 'start',
  as = 'div',
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Cluster} = theme.components;
  const base = `flex flex-wrap gap-${gap} items-${items} justify-${justify}`;
  const classes = `${Cluster?.base || ''} ${
    Cluster?.variants?.[variant] || ''
  } ${className || ''} ${base}`;
  return React.createElement(
      as,
      {
        className: classes,
      },
      children,
  );
};

type Props = DefaultProps<HTMLDivElement> & {
  gap?: Spacings;
  justify?: FlexAlignments;
  items?: FlexAlignments;
};
