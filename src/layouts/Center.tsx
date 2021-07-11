import * as React from 'react';
import {KazeContext} from '../providers/Kaze';

export const Center: React.FC<Props> = ({
  children, className, width = 'none', padding = 0,
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `box-content max-w-${width} mx-auto px-${padding} flex flex-col`;
  return (
    <div className={`${theme.components.Center?.base || ''} ${className || ''} ${base}`}>
      {children}
    </div>
  );
};

type Props = {
  className?: string;
  width?: string;
  padding?: number
}

