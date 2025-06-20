import { type MouseEventHandler, type ReactNode } from "react";
import { NAVIGATION_ITEMS as navigationItems } from "../variables/variables";
import { cloneReactIcon } from "../variables/functions";

type NavigationPropsType = {
  state: number;
  setState: (item: string) => void;
  children?: ReactNode;
};
export default function NavigationDisplay({
  state,
  setState,
  children,
}: NavigationPropsType) {
  return (
    <div className="absolute inset-0 flex flex-row">
      <div className="w-5/6">{children}</div>
      <div className="flex flex-col gap-4 w-1/6 mt-12">
        {navigationItems.map((item) => {
          return (
            <NavigationItem
              {...item}
              state={state}
              onClick={() => setState(item.item)}
            />
          );
        })}
      </div>
    </div>
  );
}

type ItemPropsType = {
  itemId: number;
  item: string;
  iconActive: any;
  iconInactive: any;
  state: number;
  onClick: MouseEventHandler<HTMLDivElement>;
};

function NavigationItem({
  itemId,
  item,
  iconActive,
  iconInactive,
  state,
  onClick,
}: ItemPropsType) {
  return (
    <div
      className={`rounded-full w-fit gap-2 p-2 flex flex-row justify-center items-center font-content hover:brightness-90 hover:translate-y-0.5 transition-all cursor-pointer ${
        state === itemId
          ? "bg-secondary custom-glow-shadow-sm-red"
          : "bg-white custom-glow-shadow-sm-white"
      }`}
      onClick={onClick}
    >
      {cloneReactIcon(
        state === itemId ? iconActive : iconInactive, // icon
        undefined, // props
        `w-5 h-5 text-${state === itemId ? "white" : "black"}` // className
      )}{" "}
      {state === itemId && <p className="text-white">{item}</p>}
    </div>
  );
}
