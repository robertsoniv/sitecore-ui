import { mode } from "@chakra-ui/theme-tools";

const Form = {
  parts: ["helperText"], // <<< I'm not sure why the docs keep telling us to put this part in here. maybe it's just out-of-date?
  baseStyle: (props: any) => ({
    helperText: {
        color: mode('pink.200', 'pink.800')(props),
    }
  })
};

export default Form;
