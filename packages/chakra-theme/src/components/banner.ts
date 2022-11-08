/**
 * CUSTOM COMPONENT DEFINITION - Banner
 */
import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Banner: ComponentMultiStyleConfig = {
  parts: ['wrapper', 'column-wrapper', 'title', 'text'],
  baseStyle: {
    wrapper: {
      padding: '6',
      width: '100%',
      position: 'relative',
      borderRadius: 'md',
      backgroundColor: 'gray.100',
      minHeight: '3xs',
    },
    'column-wrapper': {
      justifyContent: 'space-between',
      width: '100%',
    },
    title: {
      width: '100%',
    },
    text: {
      width: '100%',
    },
    'close-button': {
      position: 'absolute',
      top: 4,
      right: 4,
    },
    'text-wrapper': {
      minWidth: '384px',
      justifyContent: 'space-between',
      alignContent: 'top',
      maxWidth: 'calc(100% - 410px)',
    },
    'image-wrapper': {
      width: '100%',
      alignContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 12,
      justifyContent: 'flex-end',
      maxHeight: 'xs',
      maxWidth: 'xs',
    },
  },
};

export default Banner;
