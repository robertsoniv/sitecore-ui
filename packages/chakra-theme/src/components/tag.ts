import type { ComponentMultiStyleConfig } from "@chakra-ui/theme";

// TODO: WIP w/ @Fgrinaert on what variants (if any are necessary)

const Tag: ComponentMultiStyleConfig = {
  parts: ["container", "label"],
  variants: {
    default: {
      container: {
        backgroundColor: "primary.500",
      },
      label: {
        color: "primary.100",
      },
    },
  },
  defaultProps: {
    variants: "contained",
    colorScheme: "primary",
    size: "sm",
  },
};

export default Tag;
