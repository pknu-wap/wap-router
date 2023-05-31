export type RouteObject = {
  path: string;
  element: React.ReactNode;
};

export type RouteConfig = {
  fragmentRegExp: RegExp;
  element: React.ReactNode;
  params: string[];
};
