export type Unidade = {
    cnes: string;
    nome: string;
};

export type ApiGetUnidades = {
    unidades: Unidade[];
    totalUnidades: number;
};

export type ApiGetUnidadeByCNES = {
    unidade: Omit<Unidade, "nome">;
};