export type RouteObject = {
  path: string;
  element: React.ReactNode;
};

export type RouteConfig = {
  fragmentRegExp: RegExp;
  element: React.ReactNode;
  params: string[];
};

export type Path = {
  pathname: string;
  search: string;
  hash: string;
};
