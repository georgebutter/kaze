import {KazeContext} from '@providers/Kaze';
import {DefaultProps} from '@types';
import React from 'react';

export const Checkbox: React.FC<Props> = ({className, variant}) => {
  const {theme} = React.useContext(KazeContext);
  const {Checkbox} = theme.components;
  const base = 'block';
  const classes = `${Checkbox?.base || ''} ${
    Checkbox?.variants?.[variant] || ''
  } ${className || ''} ${base}`.trim();

  return <input type="checkbox" className={classes} />;
};

type Props = DefaultProps<HTMLButtonElement>;
