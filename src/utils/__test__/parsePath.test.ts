import parsePath from '../parsePath';

describe('parsePath', () => {
  it('should parse path with pathname', () => {
    const path = '/user/main';
    const result = parsePath(path);
    expect(result).toEqual({
      pathname: '/user/main',
    });
  });

  it('should parse path with pathname and search', () => {
    const path = '/user/main?name=John&tag=1';
    const result = parsePath(path);
    expect(result).toEqual({
      pathname: '/user/main',
      search: '?name=John&tag=1',
    });
  });

  it('should parse path with pathname and hash', () => {
    const path = '/user/main#profile';
    const result = parsePath(path);
    expect(result).toEqual({
      pathname: '/user/main',
      hash: '#profile',
    });
  });

  it('should parse path with pathname, search, and hash', () => {
    const path = '/user/main?name=John#profile';
    const result = parsePath(path);
    expect(result).toEqual({
      pathname: '/user/main',
      search: '?name=John',
      hash: '#profile',
    });
  });

  it('should parse path with search and hash', () => {
    const path = '/?name=John#profile';
    const result = parsePath(path);
    expect(result).toEqual({
      pathname: '/',
      search: '?name=John',
      hash: '#profile',
    });
  });
});
