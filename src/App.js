import "./App.css";
import Router from "./Router";
import BackDropProvider from "./Helpers/Context";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <BackDropProvider>
          <Router />
        </BackDropProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
