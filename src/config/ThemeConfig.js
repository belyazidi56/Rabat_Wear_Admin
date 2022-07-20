import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brown: {
      900: 'hsl(177, 28%, 21%)',
      800: 'hsl(177, 28%, 29%)',
      700: 'hsl(177, 28%, 37%)',
      600: 'hsl(177, 28%, 45%)',
      500: 'hsl(177, 31%, 52%)',
      400: 'hsl(177, 31%, 60%)',
      300: 'hsl(177, 31%, 67%)',
      200: 'hsl(177, 31%, 74%)',
      100: 'hsl(177, 31%, 81%)',
      50: 'hsl(177, 31%, 88%)',
    },
  },
});

export default theme;
