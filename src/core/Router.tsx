import React, { useEffect, useState } from 'react';
import RouterContext from '../context/RouterContext';
import type { Path } from '../types';
import { parsePath } from '../utils';

interface RouterProps {
  children: React.ReactNode;
}

/**
 * @description
 * 브라우저의 주소창에 변화가 생기면 path 상태를 업데이트한다.
 */
const Router = ({ children }: RouterProps) => {
  // 요청한 주소를 path 상태로 관리한다.
  // 처음 요청한 주소를 기본값으로 사용한다.
  const { hash, pathname, search } = window.location;
  const [path, setPath] = useState<Path>({
    hash,
    pathname,
    search,
  });

  const changePath = (path: string) => {
    const { hash, pathname, search } = parsePath(path);
    setPath({ hash, pathname, search });
    // pushState의 data에 path를 넣어서 상태를 업데이트한다.
    window.history.pushState({ pathname, hash, search }, '', path); // 브라우저의 주소창에 주소를 바꾼다.
  };

  // popstate 이벤트는 브라우저의 주소창에 변화가 생겼을 때 발생한다.
  // 브라우저의 주소창에 변화가 생기면 path 상태를 업데이트한다.
  // 리액트가 브라우저의 주소창에 변화가 생겼음을 알게 되면 path 상태를 업데이트한다.
  useEffect(() => {
    const handleOnPopState = (e: PopStateEvent) => {
      const hash = e.state?.hash || '';
      const pathname = e.state?.pathname || '/';
      const search = e.state?.search || '';

      setPath({
        hash,
        pathname,
        search,
      });
    };

    window.addEventListener('popstate', handleOnPopState);

    return () => {
      window.removeEventListener('popstate', handleOnPopState);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
