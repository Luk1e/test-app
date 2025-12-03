// React & libraries
import { Navigate } from "react-router-dom";

// Pages
import { DashBoardPage, ErrorPage } from "../../pages";

// Components
import { RequireAuth } from "../guards";

// Constants & types
import { dashboardPaths, rootPaths } from "../../constants";

const privateRoutes = {
  children: [
    { index: true, element: <Navigate to={dashboardPaths.navigate.users} /> },
    {
      path: dashboardPaths.basePath,
      element: <RequireAuth />,
      children: [
        { path: dashboardPaths.children.users, element: <DashBoardPage /> },
      ],
    },
    {
      path: rootPaths.wildcard,
      element: <ErrorPage />,
    },
  ],
};

export default privateRoutes;
