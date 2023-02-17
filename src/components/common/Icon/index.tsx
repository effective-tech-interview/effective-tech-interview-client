import type { IconName } from './icons';
import { ICONS } from './icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  iconName: IconName;
  size?: number;
  width?: number;
  height?: number;
}

export const Icon = ({ size = 22, width, height, iconName, wrapperProps, ...rest }: IconProps) => {
  const IconComponent = ICONS[iconName];
  return (
    <span {...wrapperProps}>
      <IconComponent {...rest} width={width || size} height={height || size} />
    </span>
  );
};
