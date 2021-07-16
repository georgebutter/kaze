import * as React from 'react';
import {KazeContext} from '../../providers/Kaze';

export const Sidebar: React.FC<Props> = ({
  children, className, gap = 0,
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-wrap gap-${gap}`;
  return (
    <div className={`${theme.components.Sidebar?.base || ''} ${className || ''} ${base}`}>
      {children}
    </div>
  );
};

type Props = {
  className?: string;
  gap?: number
  minWidth?: string;
}
