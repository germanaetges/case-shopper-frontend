import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: '#2DA77A',
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: '#2DA77A',
      main: '#2DA77A',
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#0000',
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
})