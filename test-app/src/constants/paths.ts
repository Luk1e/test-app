export const rootPaths = {
  basePath: "/",
  navigate: {
    root: "/",
  },
  wildcard: "*",
};

export const authPaths = {
  basePath: "auth",
  children: {
    login: "login",
  },
  navigate: {
    login: "/auth/login",
  },
};

export const dashboardPaths = {
  basePath: "dashboard",
  children: {
    users: "users",
  },
  navigate: {
    users: "/dashboard/users",
  },
};

export const errorPaths = {
  basePath: "error",
  children: {
    notFound: "404",
  },
  navigate: {
    notFound: "/error/404",
  },
};
