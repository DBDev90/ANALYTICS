export type User = {
    userName: string;
    name: string;
    email?: string;
};

export type ApiLogin = {
    user: User;
    authToken: string;
}; 

export type ApiGetUser = {
    user: User;
};