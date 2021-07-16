import * as React from 'react';
import {KazeContext} from '../../providers/Kaze';

export const SidebarMain: React.FC<Props> = ({
  children, className, minWidth = '1/2',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `w-0 min-w-${minWidth} flex-grow-999`;
  return (
    <main className={`${theme.components.SidebarMain?.base || ''} ${className || ''} ${base}`}>
      {children}
    </main>
  );
};

type Props = {
  className?: string;
  gap?: number
  minWidth?: string;
}
