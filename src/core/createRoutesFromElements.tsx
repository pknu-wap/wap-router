import React, { isValidElement, Children, Fragment } from 'react';
import type { RouteObject } from '../types';
import Route from './Route';

/**
 * @description children을 통해 routeObjects를 생성
 *
 * 1. isValidElement를 통해 ReactElement인지 확인
 * 2. React.Fragment를 받으면 그 안의 children을 통해 routeObjects를 생성
 * 3. Route 컴포넌트가 아닌 컴포넌트는 에러를 발생시킴
 */
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
