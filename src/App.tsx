import "./App.css";
import { ThemeProvider } from "@mui/material";
import AppRouter from "./router";
import { renderDefaultTheme } from "./theme/styles";
import Navigator from "./components/Navigator/Navigator";

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
