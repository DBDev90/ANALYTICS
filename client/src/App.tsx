import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { useTheme } from "./hooks/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import { MainRoutes } from "./routes";

const App = () => {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitiTheme, theme } = useTheme();

  useEffect(() => {
    //Autentica usuário utilizando o token salvo no local storage;
    handleAuthenticateUser();

    //Aplicar o tema salvo pelo usuário no local storage
    handleInitiTheme();
  }, [handleAuthenticateUser, handleInitiTheme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <MainRoutes />
    </ThemeProvider>
  );
};

export default App;
