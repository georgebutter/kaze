import * as React from 'react';
import type {DefaultProps, Spacings} from '../../../types/index.ts';
import {KazeContext} from '../../providers/Kaze.tsx';

/**
 * Returns a Tooltip component.
 * @return {React.FC<Props>}
 */
export const Tooltip: React.FC<Props> = ({
  children,
  padding = 0,
  className = '',
  as = 'div',
  variant,
  ...props
}): React.ReactElement => {
  const {theme} = React.useContext(KazeContext);
  const {Tooltip} = theme?.components;
  const base = `p-${padding} m-0 w-auto translate-y-full absolute bottom-0 before:absolute before:w-4 before:h-4 before:bg-inherit before:rotate-45 before:bottom-3.5 before:left-1/2 before:-translate-x-1/2 before:-z-10`;
  const classes = `${Tooltip?.base || ''} ${Tooltip?.variants?.[variant] || ''} ${
    className || ''
  } ${base}`;
  return React.createElement(
      as,
      {
        ...props,
        className: classes,
      },
      children,
  );
};

type Props = DefaultProps<HTMLDivElement> & {
  padding?: Spacings;
};
