// React & libraries
import { BrowserRouter, useRoutes } from "react-router-dom";

// Constants & types
import appRoutes from "./configs/app.routes";

const RouterView = () => useRoutes(appRoutes);

export const AppRouter = () => (
  <BrowserRouter>
    <RouterView />
  </BrowserRouter>
);

export default AppRouter;
