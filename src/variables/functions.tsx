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

function cloneReactIcon(
  icon: React.ReactElement<{ className?: string }>,
  props?: React.HTMLAttributes<HTMLElement>,
  className?: string
): React.ReactElement {
  const combinedClassName = [props?.className, className]
    .filter(Boolean)
    .join(" ");
  return React.cloneElement(icon, {
    ...props,
    className: combinedClassName,
  });
}

function formatDate(dateNum: number): string {
  const dateStr = dateNum.toString();
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1; // JS months are 0-indexed
  const day = parseInt(dateStr.substring(6, 8));

  const date = new Date(year, month, day);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export { hexToRGBA, getCSSVar, cloneReactIcon, formatDate };
