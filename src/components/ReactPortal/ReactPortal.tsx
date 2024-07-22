import { useState, useLayoutEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId : string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface IReactPortal {
  children: ReactNode,
  wrapperId: string
}

const ReactPortal = ({ children, wrapperId = "react-portal-wrapper" }: IReactPortal) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default ReactPortal