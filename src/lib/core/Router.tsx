import React, { useState } from "react";
import RouterContext from "./RouterContext";

interface RouterProps {
  children: React.ReactNode;
}

const Router = ({ children }: RouterProps) => {
  // 요청한 주소를 path 상태로 관리한다.
  // 처음 요청한 주소를 기본값으로 사용한다.
  const [path, setPath] = useState(window.location.pathname);

  const contextValue = {
    path,
    changePath: setPath,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
