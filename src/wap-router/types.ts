export type RouteObject = {
  path: string;
  element: React.ReactNode;
  children?: RouteObject[];
};
