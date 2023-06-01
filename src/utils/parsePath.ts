import type { Location } from '../types';

const parsePath = (path: string): Partial<Location> => {
  const parsedPath: Partial<Location> = {};

  if (!path) return parsedPath;

  const hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    parsedPath.hash = path.substring(hashIndex);
    path = path.substring(0, hashIndex);
  }

  const searchIndex = path.indexOf('?');
  if (searchIndex >= 0) {
    parsedPath.search = path.substring(searchIndex);
    path = path.substring(0, searchIndex);
  }

  if (!path) return parsedPath;

  parsedPath.pathname = path;

  return parsedPath;
};

export default parsePath;
