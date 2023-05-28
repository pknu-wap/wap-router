import React, { useEffect, useState } from "react";
import RouterContext from "./RouterContext";

interface RouterProps {
  children: React.ReactNode;
}

const Router = ({ children }: RouterProps) => {
  // 요청한 주소를 path 상태로 관리한다.
  // 처음 요청한 주소를 기본값으로 사용한다.
  const [path, setPath] = useState(window.location.pathname);

  const changePath = (path: string) => {
    setPath(path);
    // pushState의 data에 path를 넣어서 상태를 업데이트한다.
    window.history.pushState({ path }, "", path); // 브라우저의 주소창에 주소를 바꾼다.
  };

  const contextValue = {
    path,
    changePath,
  };

  // popstate 이벤트는 브라우저의 주소창에 변화가 생겼을 때 발생한다.
  // 브라우저의 주소창에 변화가 생기면 path 상태를 업데이트한다.
  // 리액트가 브라우저의 주소창에 변화가 생겼음을 알게 되면 path 상태를 업데이트한다.
  useEffect(() => {
    const handleOnPopState = (e: PopStateEvent) => {
      setPath(e.state?.path || "/");
    };

    window.addEventListener("popstate", handleOnPopState);

    return () => {
      window.removeEventListener("popstate", handleOnPopState);
    };
  }, []);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
