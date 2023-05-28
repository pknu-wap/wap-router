import React, { Children, isValidElement, useContext } from "react";
import RouterContext from "./RouterContext";

interface RoutesProps {
  children: React.ReactNode;
}

const Routes = ({ children }: RoutesProps) => {
  const { path } = useContext(RouterContext);

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
