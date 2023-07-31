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
                main: '#1F3684',
                light: '#F9F3ED',
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
