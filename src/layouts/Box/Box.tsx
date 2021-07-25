import * as React from 'react';
import {DefaultProps, Spacings} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a Box component which, by the design philosophy should always
 * have equal padding. If it doesn't then it shouldn't be a box. Additionally a
 * Box should never have a set width or height, this should always been defined
 * either by the context that it's within, or what is within the box.
 * @return {React.FC<Props>}
 */
export const Box: React.FC<Props> = ({
  children, padding = 0, className = '', as = 'div', variant,
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Box} = theme.components;
  const base = `p-${padding} m-0 w-auto`;
  const classes = `${Box?.base || ''} ${Box?.variants?.[variant]} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  padding: Spacings
}
