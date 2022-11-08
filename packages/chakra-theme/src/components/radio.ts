const Radio = {
  baseStyle: {
    control: {
      borderColor: "border-color-a11y",
      bg: "white",
      _disabled: {
        bg: "blackAlpha.200",
        borderColor: "transparent",
      },
      _checked: {
        _disabled: {
          bg: "blackAlpha.200",
          borderColor: "transparent",
          color: "blackAlpha.500",
        },
      },
    },
  },
  defaultProps: {
    colorScheme: "primary",
  },
  sizes: {
    lg: {
      label: { fontSize: "md" },
    },
  },
};

export default Radio;
