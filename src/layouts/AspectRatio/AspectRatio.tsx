import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

export const AspectRatio: React.FC<Props> = ({
  children, className, variant, w = '1', h = '1', as = 'div', position = 'center', fit = 'cover',
}) => {
  const {theme} = React.useContext(KazeContext);
  const {AspectRatio} = theme.components;
  const base = `aspect-w-${w} aspect-h-${h}`;
  const classes = `${AspectRatio?.base || ''} ${AspectRatio?.variants?.[variant] || ''} ${className || ''} ${base}`;
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
  position?:
  'bottom' |
  'center' |
  'left' |
  'left-bottom' |
  'left-top' |
  'right' |
  'right-bottom' |
  'right-top' |
  'top';
  fit?:
  'contain' |
  'cover' |
  'fill' |
  'none' |
  'scale-down';
  w?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  h?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
}


