import type { KeyOfColors, KeyOfTypography } from '~/styles/Theme';

type ButtonStyleProps = {
  fontSize: KeyOfTypography;
  color: KeyOfColors;
  backgroundColor: KeyOfColors;
  borderRadius?: string;
  opacity?: number;
};

type ButtonPressStyleProps = Partial<ButtonStyleProps>;

type ButtonDisabledStyleProps = Partial<ButtonStyleProps>;

type ButtonTypeProps = {
  default: ButtonStyleProps;
  press?: ButtonPressStyleProps;
  disabled?: ButtonDisabledStyleProps;
};

type ButtonVariantNames =
  | 'largePrimary'
  | 'largeSecondary'
  | 'largeSystem'
  | 'mediumTeritary'
  | 'smallButton'
  | 'otherQuestion'
  | 'tailQuestion'
  | 'nextQuestion';

type ButtonVariantProps = Record<ButtonVariantNames, ButtonTypeProps>;

export const BUTTON_VARAINTS: ButtonVariantProps = {
  largePrimary: {
    default: {
      fontSize: 'subtitle',
      color: 'gray000',
      backgroundColor: 'primary_default',
    },
    press: {
      backgroundColor: 'primary_press',
    },
    disabled: {
      color: 'gray400',
      backgroundColor: 'gray050',
    },
  },
  largeSecondary: {
    default: {
      fontSize: 'subtitle',
      color: 'gray000',
      backgroundColor: 'gray600',
    },
    press: {
      backgroundColor: 'gray800',
    },
    disabled: {
      color: 'gray400',
      backgroundColor: 'gray050',
    },
  },
  largeSystem: {
    default: {
      fontSize: 'subtitle',
      color: 'gray000',
      backgroundColor: 'system_default',
    },
    press: {
      backgroundColor: 'system_press',
    },
  },
  mediumTeritary: {
    default: {
      fontSize: 'b1',
      color: 'primary_default',
      backgroundColor: 'teritary_default',
    },
    press: {
      backgroundColor: 'teritary_press',
    },
  },
  smallButton: {
    default: {
      fontSize: 'caption',
      color: 'gray800',
      backgroundColor: 'gray000',
    },
    disabled: {
      color: 'gray400',
      backgroundColor: 'gray100',
    },
  },
  otherQuestion: {
    default: {
      fontSize: 'b2',
      color: 'gray600',
      backgroundColor: 'gray000',
      borderRadius: '8',
    },
    press: {
      backgroundColor: 'gray050',
    },
    disabled: {
      opacity: 0.6,
    },
  },
  tailQuestion: {
    default: {
      fontSize: 'b2',
      color: 'gray000',
      backgroundColor: 'primary_default',
      borderRadius: '8',
    },
    press: {
      backgroundColor: 'primary_press',
    },
    disabled: {
      opacity: 0.5,
    },
  },
  nextQuestion: {
    default: {
      fontSize: 'b2',
      color: 'gray000',
      backgroundColor: 'gray600',
      borderRadius: '8',
    },
    press: {
      backgroundColor: 'gray800',
    },
  },
};

export type KeyOfButtonVariants = keyof typeof BUTTON_VARAINTS;
