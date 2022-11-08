import { extendTheme } from '@chakra-ui/react';
import { ChakraTheme } from '@chakra-ui/theme';
import foundations from './foundations/index';
import * as components from './components/index';
import styles from './styles';
import layerStyles from './layer-styles';
import semanticTokens from './semantic-tokens';

const sitecoreTheme: Record<string, any> = extendTheme({
  config: {
    useSystemColorMode: false,
    cssVarPrefix: 'sitecore',
  },
  ...foundations,
  components: {
    ...components,
  },
  styles,
  layerStyles,
  semanticTokens,
});

export default sitecoreTheme as ChakraTheme;
