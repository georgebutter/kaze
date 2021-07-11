import * as React from 'react';

export const SidebarMain: React.FC<Props> = ({
  children, className, minWidth = '1/2',
}) => {
  return (
    <main className={`${className || ''} w-0 min-w-${minWidth} flex-grow-999`}>
      {children}
    </main>
  );
};

type Props = {
  className?: string;
  gap?: number
  minWidth?: string;
}
