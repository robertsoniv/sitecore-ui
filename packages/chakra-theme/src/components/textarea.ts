const Textarea = {
  baseStyle: {
    maxW: "lg",
  },
  variants: {
    outline: {
      borderColor: "border-color-a11y",
      bg: "white",
      _hover: {
        borderColor: "border-color-a11y-hover",
      },
    },
  },
  defaultProps: {
    focusBorderColor: "primary.500",
  },
};

export default Textarea;
