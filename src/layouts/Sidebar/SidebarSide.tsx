import * as React from 'react';
import {KazeContext} from '../../providers/Kaze';

export const SidebarSide: React.FC<Props> = ({
  children, className,
}) => {
  const {theme} = React.useContext(KazeContext);
  return (
    <aside className={`${theme.components.SidebarSide?.base || ''} ${className || ''} flex-grow`}>
      {children}
    </aside>
  );
};

type Props = {
  className?: string;
  gap?: number
  minWidth?: string;
  reverse?: boolean;
}
