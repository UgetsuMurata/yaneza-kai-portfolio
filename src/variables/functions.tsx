import React from "react";
import type { ReactNode } from "react";

function hexToRGBA(hex: string, alpha: number): string {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

function cloneReactIcon(
  icon: React.DetailedReactHTMLElement<any, HTMLElement>,
  props?: any,
  className?: string
): React.DetailedReactHTMLElement<any, HTMLElement> {
  return React.cloneElement(icon, { ...props, className: className });
}

export { hexToRGBA, getCSSVar, cloneReactIcon };
