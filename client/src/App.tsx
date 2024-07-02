import { useEffect } from "react";
import { useAuth } from "./hooks/auth";

const App = () => {
  const { handleAuthenticateUser } = useAuth();

  useEffect(() => {
    //Autentica usuário utilizando o token salvo no local storage;
    handleAuthenticateUser();
  }, [handleAuthenticateUser]);

  return <></>;
};

export default App;
