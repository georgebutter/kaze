import * as React from 'react';

export const Sidebar: React.FC<Props> = ({
  children, className,
}) => {
  return (
    <aside className={`${className || ''} flex-grow-1`}>
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
