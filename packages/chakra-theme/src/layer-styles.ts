const layerStyles = {
    bg: {
      white: { bg: "white" },
      light: { bg: "gray.50" },
      medium: { bg: "gray.100" },
      dark: { bg: "gray.200" },
    },
    sidebar: {
      white: { bg: "white" },
      light: { bg: "gray.50" },
      medium: { bg: "gray.100" },
      dark: { bg: "gray.200" },
    },
    footer: {
      white: { bg: "white" },
      light: { bg: "gray.50" },
      medium: { bg: "gray.100" },
      dark: { bg: "gray.200" },
    },
    light: {
      rounded: "md",
      bg: "gray.50",
      inset: {
        bg: "gray.50",
        shadow: "inner",
      },
    },
    medium: {
      rounded: "md",
      bg: "gray.100",
      inset: {
        bg: "gray.100",
        shadow: "inner",
      },
    },
    transparent: {
      rounded: "md",
      bg: "transparent",
      interactive: {
        transitionProperty: "common",
        transitionDuration: "normal",
        rounded: "md",
        bg: "transparent",
        _hover: { bg: "blackAlpha.100" },
        _active: { bg: "blackAlpha.200" },
      },
      selected: {
        transitionProperty: "common",
        transitionDuration: "normal",
        rounded: "md",
        bg: "primary.100",
        _active: { bg: "primary.200" },
      },
    },
    outline: {
      rounded: "md",
      bg: "white",
      border: "1px solid",
      borderColor: "chakra-border-color",
      interactive: {
        transitionProperty: "common",
        transitionDuration: "normal",
        border: "1px solid",
        borderColor: "chakra-border-color",
        rounded: "md",
        bg: "white",
        _hover: { bg: "gray.100" },
        _active: { bg: "gray.200" },
      },
      selected: {
        transitionProperty: "common",
        transitionDuration: "normal",
        border: "1px solid",
        borderColor: "chakra-border-color",
        rounded: "md",
        bg: "primary.100",
        _active: { bg: "primary.200" },
      },
    },
    outline2: {
      rounded: "md",
      bg: "white",
      border: "1px solid",
      borderColor: "chakra-border-color",
      interactive: {
        transitionProperty: "common",
        transitionDuration: "normal",
        border: "1px solid",
        borderColor: "chakra-border-color",
        rounded: "md",
        bg: "white",
        _hover: {
          shadow: "md",
        },
        _active: {
          bg: "gray.200",
          shadow: "base",
        },
      },
      selected: {
        transitionProperty: "common",
        transitionDuration: "normal",
        border: "1px solid",
        borderColor: "chakra-border-color",
        rounded: "md",
        bg: "primary.100",
        _hover: { shadow: "md" },
        _active: { bg: "primary.200", shadow: "base" },
      },
    },
    outline3: {
      rounded: "md",
      bg: "white",
      border: "1px solid",
      borderColor: "chakra-border-color",
      interactive: {
        transitionProperty: "common",
        transitionDuration: "normal",
        border: "1px solid",
        borderColor: "chakra-border-color",
        rounded: "md",
        bg: "white",
        _hover: { bg: "gray.100" },
        _active: { bg: "gray.200" },
      },
      selected: {
        transitionProperty: "common",
        transitionDuration: "normal",
        border: "1px solid",
        borderColor: "primary.500",
        rounded: "md",
        bg: "white",
        _hover: { bg: "gray.100" },
        _active: { bg: "gray.200" },
      },
    },
    shadow: {
      rounded: "md",
      bg: "white",
      shadow: "base",
      interactive: {
        transitionProperty: "common",
        transitionDuration: "normal",
        rounded: "md",
        bg: "white",
        shadow: "base",
        _hover: {
          shadow: "md",
        },
        _active: {
          bg: "gray.200",
          shadow: "base",
        },
      },
      selected: {
        transitionProperty: "common",
        transitionDuration: "normal",
        rounded: "md",
        bg: "primary.100",
        shadow: "base",
        _hover: {
          shadow: "md",
        },
        _active: { bg: "primary.200", shadow: "base" },
      },
    },
    white: {
      rounded: "md",
      bg: "white",
      interactive: {
        transitionProperty: "common",
        transitionDuration: "normal",
        rounded: "md",
        bg: "white",
        _hover: {
          shadow: "md",
        },
        _active: {
          bg: "gray.200",
          shadow: "base",
        },
      },
      selected: {
        transitionProperty: "common",
        transitionDuration: "normal",
        rounded: "md",
        bg: "primary.100",
        _hover: {
          shadow: "md",
        },
        _active: { bg: "primary.200", shadow: "base" },
      },
    },
    grayLight: {},
    gray: {},
    swatch: { minW: "8", maxW: "3xs", h: "8", rounded: "md", shadow: "inner" },
};

export default layerStyles
