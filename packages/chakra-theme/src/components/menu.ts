import { ComponentStyleConfig } from '@chakra-ui/react';

import radii from '../foundations/radius';
import colors from '../foundations/colors';
import shadows from '../foundations/shadows';
import typography from '../foundations/typography';

const Menu: ComponentStyleConfig = {
  baseStyle: {
    list: {
      borderWidth: 0,
      borderRadius: radii.sm,
      boxShadow: shadows.md,
    },
  },
  variants: {
    filter: {
      list: {
        background: colors.white,
        border: `1px solid ${colors.gray['200']}`,
        boxShadow: 'none',
        borderRadius: '4px',
      },
      item: {
        color: '#000000',
        lineHeight: '1.0625rem',
        fontWeight: 400,
        fontSize: typography.fontSizes.md,
        paddingTop: '0.5125rem',
        paddingBottom: '0.5125rem',
        _hover: {
          background: 'initial',
        },
        _active: {
          background: 'initial',
          fontWeight: 600,
        },
        _selected: {
          background: 'initial',
          fontWeight: 600,
        },
        _focus: {
          background: 'initial',
        },
      },
    },
  },
};

export default Menu;
