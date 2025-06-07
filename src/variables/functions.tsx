import React from "react";

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

function cloneReactIcon<T extends HTMLElement>(
  icon: React.DetailedReactHTMLElement<React.HTMLAttributes<T>, T>,
  props?: React.HTMLAttributes<T>,
  className?: React.HTMLAttributes<T>["className"]
): React.DetailedReactHTMLElement<React.HTMLAttributes<T>, T> {
  return React.cloneElement(icon, { ...props, className });
}

export { hexToRGBA, getCSSVar, cloneReactIcon };
