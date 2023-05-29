import React, { isValidElement } from "react";
import { RouteObject } from "../types";

// JSX Route들로부터 Object Route들을 생성한다.
const createRoutesFromElements = (
  children: React.ReactNode,
  parentPath: number[] = []
): RouteObject[] => {
  let routes: RouteObject[] = [];
  React.Children.forEach(children, (element, idx) => {
    if (!isValidElement(element)) return;

    const treePath = [...parentPath, idx];

    // path가 없는 경우, path를 생성한다.
    if (element.type === React.Fragment) {
      // Transparently support React.Fragment and its children.
      routes = [...routes, ...createRoutesFromElements(element.props.children)];
      return;
    }

    const route: RouteObject = {
      element: element.props.element,
      path: element.props.path,
    };

    if (element.props.children) {
      route.children = createRoutesFromElements(
        element.props.children,
        treePath
      );
    }

    routes.push(route);
  });

  return routes;
};

export default createRoutesFromElements;
