import chatConversation from './icons/chatConversation.svg';
import check from './icons/check.svg';
import downArrow from './icons/downArrow.svg';
import hide from './icons/hide.svg';
import leftArrow from './icons/leftArrow.svg';
import refresh from './icons/refresh.svg';
import reload from './icons/reload.svg';
import right from './icons/right.svg';
import rightArrow from './icons/rightArrow.svg';
import setting from './icons/setting.svg';
import show from './icons/show.svg';
import toGoHome from './icons/toGoHome.svg';
import upArrow from './icons/upArrow.svg';
import user from './icons/user.svg';
import warning from './icons/warning.svg';

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
  warning,
  chatConversation,
  refresh,
  right,
};

export type IconName = keyof typeof ICONS;
