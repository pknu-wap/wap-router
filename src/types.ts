export type RouteObject = {
  path: string;
  element: React.ReactNode;
  children?: RouteObject[];
};

export type RouteConfig = {
  fragmentRegExp: RegExp;
  element: React.ReactNode;
  params: string[];
};
