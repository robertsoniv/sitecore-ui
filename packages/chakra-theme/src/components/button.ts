import { ComponentStyleConfig, theme } from '@chakra-ui/react';
import type {
  SystemStyleObject,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
  rounded: 'full',
};

const variants: { [key: string]: SystemStyleObject | SystemStyleFunction } = {
  primary: {
    color: 'white',
    bg: 'primary.500',
    _hover: {
      bg: 'primary.600',
    },
    _active: {
      bg: 'primary.700',
    },
  },
  secondary: (props) => ({
    ...theme.components.Button.variants?.outline(props),
    color: 'text',
    borderColor: 'gray.900',
    _hover: {
      color: 'white',
      backgroundColor: 'gray.500',
      borderColor: 'gray.500',
    },
  }),
  danger: {
    color: 'white',
    bg: 'red.500',
    _hover: {
      bg: 'red.600',
    },
    _active: {
      bg: 'red.700',
    },
  },

  subtle: {
    color: 'primary.600',
    _hover: {
      bg: 'blackAlpha.100',
    },
    _active: {
      bg: 'primary.100',
    },
  },
  minimal: {
    color: 'blackAlpha.600',
    _hover: {
      bg: 'blackAlpha.100',
    },
    _active: {
      bg: 'blackAlpha.200',
    },
  },
  navHorizontal: {
    px: '2',
    color: 'blackAlpha.600',
    rounded: 'md',
    _hover: {
      bg: 'blackAlpha.100',
    },
    _active: {
      bg: 'blackAlpha.200',
    },
  },
  navHorizontalActive: {
    size: 'sm',
    px: '2',
    color: 'primary.600',
    rounded: 'md',
    bg: 'primary.100',
    _active: {
      bg: 'primary.200',
    },
  },
  navVertical: {
    px: '3',
    justifyContent: 'none',
    color: 'blackAlpha.600',
    rounded: 'md',
    _hover: {
      bg: 'blackAlpha.100',
    },
    _active: {
      bg: 'blackAlpha.200',
    },
  },
  navVerticalActive: {
    px: '3',
    justifyContent: 'none',
    color: 'primary.600',
    rounded: 'md',
    bg: 'primary.100',
    _active: {
      bg: 'primary.200',
    },
  },
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    fontSize: 'md',
  },
  sm: {
    fontSize: 'md',
  },
  xs: {
    fontSize: 'sm',
  },
};

const defaultProps = {
  colorScheme: 'primary',
};

const Button: ComponentStyleConfig = {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

export default Button;
