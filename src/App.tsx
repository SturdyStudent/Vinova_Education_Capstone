import "./App.css";
import { ThemeProvider } from "@mui/material";
import AppRouter from "./router";
import { renderDefaultTheme } from "./theme/styles";

function App() {
  return (
    <ThemeProvider theme={renderDefaultTheme}>
      <div className="page">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
