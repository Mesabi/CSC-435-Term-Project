import { css } from 'styled-components';
import { Property } from 'csstype';

import Auto from './cursors/Arrow.png';
import Text from './cursors/Text.png';
import VerticalText from './cursors/VText.png';
import Help from './cursors/Help.png';
import Crosshair from './cursors/Cross.png';
import Pointer from './cursors/HandPointer.png';
import Progress from './cursors/AppStarting.png';
import Wait from './cursors/Wait.png';
import Alias from './cursors/Link.png';
import Copy from './cursors/Copy.png';
import Move from './cursors/Move.png';
import NoDrop from './cursors/Circle.png';
import NotAllowed from './cursors/NO.png';
import Grab from './cursors/Hand.png';
import Grabbing from './cursors/Handsqueezed.png';
import ColResize from './cursors/ColRezise.png';
import RowResize from './cursors/RowResize.png';
import NResize from './cursors/UpArrow.png';
import EResize from './cursors/RightArrow.png';
import SResize from './cursors/DownArrow.png';
import WResize from './cursors/LeftArrow.png';
import NsResize from './cursors/UpDownArrow.png';
import EwResize from './cursors/LeftRight.png';
import NeResize from './cursors/UpRightArrow.png';
import NwResize from './cursors/UpLeftArrow.png';
import SeResize from './cursors/DownRightArrow.png';
import SwResize from './cursors/DownLeftArrow.png';
import NeswResize from './cursors/AngleUpRight.png';
import NwseResize from './cursors/AngleUpLeft.png';
import ZoomIn from './cursors/ZoomIn.png';
import ZoomOut from './cursors/ZoomOut.png';

const cursors = {
  Auto,
  Text,
  VerticalText,
  Help,
  Crosshair,
  Pointer,
  Progress,
  Wait,
  Alias,
  Copy,
  Move,
  None: null,
  NoDrop,
  NotAllowed,
  Grab,
  Grabbing,
  ColResize,
  RowResize,
  NResize,
  EResize,
  SResize,
  WResize,
  NsResize,
  EwResize,
  NeResize,
  NwResize,
  SeResize,
  SwResize,
  NeswResize,
  NwseResize,
  ZoomIn,
  ZoomOut,
};

const toKebabCase = (str: string) =>
  `${str.charAt(0).toLowerCase()}${str.substring(1)}`.replace(
    /[A-Z]/g,
    (letter: string) => `-${letter.toLowerCase()}`,
  );

export type ICursor = Record<keyof typeof cursors, Property.Cursor>;

const Cursor = Object.keys(cursors).reduce(
  (all, cur) =>
    Object.assign(all, {
      [cur]: css`
        cursor: ${cursors[cur] && `url(${cursors[cur]}), `} ${toKebabCase(cur)};
      `,
    }),
  {} as ICursor,
);

export default Cursor;
