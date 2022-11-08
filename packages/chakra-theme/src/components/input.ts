const Input = {
  baseStyle: {
    field: {
      maxW: 'md',
    },
  },
  variants: {
    outline: {
      field: {
        _disabled: {
          bg: 'pink.900',
          opacity: 1,
          // optionally, you could nest the _placeholder text styles in here for more styling control
          // _placeholder: {
          //   opacity: .4
          // },
        },
      },
    },
  },
};

export default Input;
