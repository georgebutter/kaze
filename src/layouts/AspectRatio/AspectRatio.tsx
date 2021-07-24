import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

export const AspectRatio: React.FC<Props> = ({
  children, className, w = '1', h = '1', as = 'div', position = 'center', fit = 'cover',
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `aspect-w-${w} aspect-h-${h}`;
  const classes = `${theme.components.AspectRatio?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, React.Children.map(children, (child) => {
    if (!['string', 'number'].includes(typeof child)) {
      const cast = child as React.ReactElement;
      return React.cloneElement(cast, {
        className: `${cast.props.className} h-full w-full object-${position} object-${fit}`,
      });
    }
  }));
};

type Props = DefaultProps & {
  position?: string;
  fit?: string;
  w?: string;
  h?: number;
}
