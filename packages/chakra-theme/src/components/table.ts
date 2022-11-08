const Table = {
  baseStyle: {
    tr: {
      th: {
        fontSize: "sm",
        textTransform: "none",
        letterSpacing: "normal",
        borderColor: "border-color-subtle",
        color: "chakra-placeholder-color",
        fontWeight: "semibold",
      },
      td: {
        borderColor: "border-color-subtle",
      },
    },
  },
  variants: {
    striped: {
      tr: {
        th: {
          borderColor: "none",
        },
        td: {
          borderColor: "none",
        },
      },
    },
  },
};

export default Table;
