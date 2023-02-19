import { default as check } from './icons/check.svg';
import { default as downArrow } from './icons/downArrow.svg';
import { default as hide } from './icons/hide.svg';
import { default as leftArrow } from './icons/leftArrow.svg';
import { default as reload } from './icons/reload.svg';
import { default as rightArrow } from './icons/rightArrow.svg';
import { default as setting } from './icons/setting.svg';
import { default as show } from './icons/show.svg';
import { default as toGoHome } from './icons/toGoHome.svg';
import { default as upArrow } from './icons/upArrow.svg';
import { default as user } from './icons/user.svg';

export const ICONS = {
  user,
  show,
  reload,
  hide,
  check,
  downArrow,
  leftArrow,
  rightArrow,
  setting,
  toGoHome,
  upArrow,
};

export type IconName = keyof typeof ICONS;
