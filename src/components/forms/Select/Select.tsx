import React from 'react';
import {KazeContext} from '@providers/Kaze';
import {DefaultProps} from '@types';

export const Select: React.FC<Props> = ({
  className,
  variant,
  options,
  ...props
}) => {
  const {theme} = React.useContext(KazeContext);
  const {Select} = theme.components;
  const base = '';
  const classes = `${Select?.base || ''} ${Select?.variants?.[variant] || ''} ${
    className || ''
  } ${base}`;
  return (
    <select className={classes} {...props}>
      {options?.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

type Props = DefaultProps<HTMLSelectElement> & {
  options: Array<{ label: string; value: string }>;
};
