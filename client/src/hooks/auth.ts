import { User } from "../@types/Auth";
import { useAppDispatch } from "../redux/hooks";
import {
  setAuthStatus,
  setAuthToken,
  setUser,
} from "../redux/slices/authSlice";
import { getUser, login } from "../services/requests";

const LOCAL_STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY;

export const useAuth = () => {
  const dispatch = useAppDispatch();

  /**
   * Função para autenticar usuário
   */
  const authenticate = (user: User, authToken: string) => {
    dispatch(setUser(user));
    dispatch(setAuthToken(authToken));
    dispatch(setAuthStatus("authenticated"));

    localStorage.setItem(LOCAL_STORAGE_KEY, authToken);
  };

  /**
   * Função para pegar o token do local storage
   */
  const handleGetToken = () => localStorage.getItem(LOCAL_STORAGE_KEY);

  //Função para pegar o usuário usando o authToken salvo no local storage
  const handleAuthenticateUser = async () => {
    const request = await getUser();
    const authToken = handleGetToken();

    if (!request.data || !authToken) {
      dispatch(setAuthStatus("not_authenticated"));
      return;
    }

    const { data } = request;
    authenticate(data.user, authToken);
  };

  /**
   * Função para efetuar login
   */
  const handleLogin = async ({
    user,
    password,
  }: {
    user: string;
    password: string;
  }) => {
    const request = await login(user, password);

    if (request.data) {
      const { data } = request;
      authenticate(data.user, data.authToken);
      return true;
    }

    dispatch(setAuthStatus("not_authenticated"));
  };

  /**
   * Função para efetuar logout
   */
  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setAuthToken(null));
    dispatch(setAuthStatus("not_authenticated"));

    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return {
    handleGetToken,
    handleAuthenticateUser,
    handleLogin,
    handleLogout,
  };
};
