import type { IconName } from './icons';
import { ICONS } from './icons';

type SizeType = 'oneSize' | 'eachSize';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  iconName: IconName;
  size?: SizeType;
  width?: number;
  height?: number;
}

type SizeProps = {
  [key in SizeType]: {
    w: number;
    h: number;
  };
};
export const Icon = ({
  size = 'oneSize',
  width = 22,
  height = 22,
  iconName,
  wrapperProps,
  ...rest
}: IconProps) => {
  const SIZE: SizeProps = {
    oneSize: {
      w: width,
      h: width,
    },
    eachSize: {
      w: width,
      h: height,
    },
  };
  const IconComponent = ICONS[iconName];
  return (
    <span {...wrapperProps}>
      <IconComponent width={SIZE[size]['w']} height={SIZE[size]['h']} {...rest} />
    </span>
  );
};
