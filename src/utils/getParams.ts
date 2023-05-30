import type { Route } from '../types';

const getParams = (route: Route, path: string) => {
  const params: { [key: string]: string } = {};
  const matches = path.match(route.fragmentRegExp);

  matches?.shift();
  matches?.forEach((paramValue, idx) => {
    const paramName = route.params[idx];
    params[paramName] = paramValue;
  });

  return params;
};

export default getParams;
