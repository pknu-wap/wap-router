import type { Path } from '../types';

/**
 * @description path를 pathname, search, hash로 분리하여 객체로 반환
 *
 * @example
 * parsePath('/post/12/user/34#comment-123')
 * // {
 * //   pathname: '/post/12/user/34',
 * //   search: '',
 * //   hash: '#comment-123',
 * // }
 */
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
