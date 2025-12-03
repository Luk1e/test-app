// Pages
import { ErrorPage, LoginPage } from "../../pages";

// Components
import { RequireGuest } from "../guards";

// Constants & types
import { authPaths, rootPaths } from "../../constants";

const publicRoutes = {
  children: [
    {
      path: authPaths.basePath,
      element: <RequireGuest />,
      children: [
        {
          path: authPaths.children.login,
          element: <LoginPage />,
        },
      ],
    },
    {
      path: rootPaths.wildcard,
      element: <ErrorPage />,
    },
  ],
};

export default publicRoutes;
