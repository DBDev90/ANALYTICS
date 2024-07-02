import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
