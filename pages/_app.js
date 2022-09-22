import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: "var(--chakra-ui-focus-ring-color)",
      boxShadow: "0 0 0 1px var(--chakra-ui-focus-ring-color)",
    },
  },
});

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    brand: {
      accent: "#F66C28",
      accentDark: "#fa661d",
    },
  },
  styles: {
    global: {
      ":host,:root": {
        "--chakra-ui-focus-ring-color": "#F66C28",
      },
    },
  },
  shadows: {
    outline: "0 0 0 1px var(--chakra-ui-focus-ring-color)",
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
      },
    },
    Select: {
      variants: {
        outline: variantOutlined,
      },
    },
    Textarea: {
      variants: {
        outline: () => variantOutlined().field,
      },
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
