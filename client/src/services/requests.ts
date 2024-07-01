import { ApiGetUser, ApiLogin } from "../@types/Auth";
import { ApiGetUnidadeByCNES, ApiGetUnidades } from "../@types/Unidades";
import { api } from "./api";

//Auth
export const login = async (user: string, password: string) => {
  return await api<ApiLogin>({
    endpoint: "auth/login",
    method: "POST",
    data: { user, password },
    withAuth: false,
  });
};

export const getUser = async () => {
  return await api<ApiGetUser>({
    endpoint: "auth/me",
  });
};

//Unidades
export const getUnidades = async () => {
  return await api<ApiGetUnidades>({
    endpoint: "unidades",
  });
};

export const getUnidade = async (cnes: string) => {
  return await api<ApiGetUnidadeByCNES>({
    endpoint: `unidades/${cnes}`,
  });
};
