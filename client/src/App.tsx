import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { useTheme } from "./hooks/theme";

const App = () => {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitiTheme } = useTheme();

  useEffect(() => {
    //Autentica usuário utilizando o token salvo no local storage;
    handleAuthenticateUser();

    //Aplicar o tema salvo pelo usuário no local storage
    handleInitiTheme();
  }, [handleAuthenticateUser, handleInitiTheme]);

  return <></>;
};

export default App;
