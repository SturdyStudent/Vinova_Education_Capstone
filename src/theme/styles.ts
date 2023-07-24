import { createTheme} from "@mui/material"

export const renderDefaultTheme = createTheme(
        {
            palette: {
              primary: {
                light: '#999999',
                main: '#000',
                dark: '#fff',
                contrastText: '#fff',
              },
              secondary: {
                main: '#ff7961',
              },
            },
            breakpoints: {
              values: {
                    xs: 0,
                    sm: 414,
                    md: 600,
                    lg: 1440,
                    xl: 1920,
                }
              }
            }
    )
