import React, { isValidElement, Children, Fragment } from 'react';
import type { RouteObject } from '../types';
import Route from './Route';

// JSX Route들로부터 Object Route들을 생성한다.
const createRoutesFromElements = (children: React.ReactNode): RouteObject[] => {
  let routes: RouteObject[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    if (child.type === Fragment) {
      routes = [...routes, ...createRoutesFromElements(child.props.children)];
      return;
    }
    if (!child.props.path || !child.props.element) return;
    if (typeof child.props.path !== 'string') return;
    if (child.type !== Route) {
      throw new Error(
        'All child components within the <Routes> component must be either a <Route> component or a <React.Fragment> component.',
      );
    }
    const route: RouteObject = {
      element: child.props.element,
      path: child.props.path,
    };

    routes.push(route);
  });

  return routes;
};

export default createRoutesFromElements;
