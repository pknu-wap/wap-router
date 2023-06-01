export type RouteObject = {
  path: string;
  element: React.ReactNode;
};

export type RouteConfig = {
  fragmentRegExp: RegExp;
  element: React.ReactNode;
  params: string[];
};

export type Location = {
  pathname: string;
  search: string;
  hash: string;
};
