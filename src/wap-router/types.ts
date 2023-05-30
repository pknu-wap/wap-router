export type RouteObject = {
  path: string;
  element: React.ReactNode;
  children?: RouteObject[];
};

export type Route = {
  fragmentRegExp: RegExp;
  element: React.ReactNode;
  params: string[];
};
