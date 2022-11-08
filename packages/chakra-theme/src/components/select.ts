const Select = {
  variants: {
    outline: {
      field: {
        borderColor: "border-color-a11y",
        bg: "white",
        _hover: {
          borderColor: "border-color-a11y-hover",
        },
      },
    },
  },
  defaultProps: {
    focusBorderColor: "primary.500",
  },
};
export default Select;
