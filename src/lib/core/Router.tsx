import React, { useState } from "react";
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
    window.history.pushState({}, "", path); // 브라우저의 주소창에 주소를 바꾼다.
  };

  const contextValue = {
    path,
    changePath,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
