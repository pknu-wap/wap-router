import React, { Children, isValidElement, useContext } from "react";
import RouterContext from "../context/RouterContext";
import { createRoutesFromElements } from ".";
import { RouteContext } from "../context";

interface RoutesProps {
  children: React.ReactNode;
}

const Routes = ({ children }: RoutesProps) => {
  const { path } = useContext(RouterContext);

  // -----------------------------
  type Route = {
    fragmentRegExp: RegExp;
    element: React.ReactNode;
    params: string[];
  };

  const ROUTE_PARAMETER_REGEXP = /:(\w+)/g; // :name, :song등 path parameters를 매칭하기 위한 정규표현식
  const URL_REGEXP = "([^\\/]+)"; // path parameter를 제외한 나머지 path를 매칭하기 위한 정규표현식

  const routes: Route[] = [];
  createRoutesFromElements(children).map((route) => {
    const params: string[] = [];
    const parsedFragment = route.path
      .replace(ROUTE_PARAMETER_REGEXP, (_match, paramName) => {
        params.push(paramName);
        return URL_REGEXP;
      })
      .replace(/\//g, "\\/"); // path parameter를 제외한 나머지 path를 매칭하기 위한 정규표현식

    routes.push({
      fragmentRegExp: new RegExp(`^${parsedFragment}$`),
      element: route.element,
      params,
    });
  });

  const getParams = (route: Route, path: string) => {
    const params: { [key: string]: string } = {};
    const matches = path.match(route.fragmentRegExp);

    matches?.shift(); // 첫번째 매칭은 전체 path이므로 제거
    matches?.forEach((paramValue, idx) => {
      const paramName = route.params[idx];
      params[paramName] = paramValue;
    });

    return params;
  };

  const checkRoute = () => {
    const currentRoute = routes.find((route) =>
      route.fragmentRegExp.test(path)
    );

    if (!currentRoute || !currentRoute.element) {
      return null;
    }

    const params = currentRoute.params.length
      ? getParams(currentRoute, path)
      : {};

    return (
      // RouteContext.Provider를 통해 현재 route의 params를 전달
      // useParams() hook을 통해 현재 route의 params를 사용할 수 있음
      <RouteContext.Provider value={{ params }}>
        {currentRoute.element}
      </RouteContext.Provider>
    );
  };

  return checkRoute();

  // -----------------------------

  let element = null;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return; // ignore non-elements
    if (child.type === React.Fragment) return; // ignore fragments
    if (!child.props.path || !child.props.element) return; // ignore non-routes
    if (child.props.path !== path) return; // ignore routes that don't match

    element = child.props.element; // this is the one!
  });

  return element;
};

export default Routes;
