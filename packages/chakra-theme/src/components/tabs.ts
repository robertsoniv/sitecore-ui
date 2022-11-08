const Tabs = {
  defaultProps: {
    colorScheme: "primary",
  },
  variants: {
    line: {
      tablist: {
        borderColor: "chakra-border-color",
      },
      tab: {
        fontWeight: "semibold",
        color: "gray.600",
      },
    },
  },
};

export default Tabs;
