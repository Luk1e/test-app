// Constants & types
import privateRoutes from "./private.routes";
import { rootPaths } from "../../constants";
import publicRoutes from "./public.routes";

const appRoutes = [
  {
    path: rootPaths.basePath,
    children: [privateRoutes, publicRoutes],
  },
];

export default appRoutes;
