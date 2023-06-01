import type { Path } from '../types';

const parsePath = (path: string): Path => {
  const parsedPath: Path = {
    pathname: '',
    search: '',
    hash: '',
  };

  if (path) {
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

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
};

export default parsePath;
