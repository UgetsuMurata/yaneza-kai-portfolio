import React, { type MouseEventHandler } from "react";
import { NAVIGATION_ICONS } from "../assets/Icons";

type NavigationPropsType = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};
export default function NavigationDisplay({
  state,
  setState,
}: NavigationPropsType) {
  const navigationItems = [
    {
      itemId: 0,
      item: "Home",
      iconActive: NAVIGATION_ICONS.BIO.active,
      iconInactive: NAVIGATION_ICONS.BIO.inactive,
    },
    {
      itemId: 1,
      item: "Skills",
      iconActive: NAVIGATION_ICONS.SKILLS.active,
      iconInactive: NAVIGATION_ICONS.SKILLS.inactive,
    },
    {
      itemId: 2,
      item: "Experiences",
      iconActive: NAVIGATION_ICONS.EXPERIENCE.active,
      iconInactive: NAVIGATION_ICONS.EXPERIENCE.inactive,
    },
    {
      itemId: 3,
      item: "Projects",
      iconActive: NAVIGATION_ICONS.PROJECTS.active,
      iconInactive: NAVIGATION_ICONS.PROJECTS.inactive,
    },
    {
      itemId: 4,
      item: "References",
      iconActive: NAVIGATION_ICONS.REFERENCES.active,
      iconInactive: NAVIGATION_ICONS.REFERENCES.inactive,
    },
    {
      itemId: 5,
      item: "Contacts",
      iconActive: NAVIGATION_ICONS.CONTACTS.active,
      iconInactive: NAVIGATION_ICONS.CONTACTS.inactive,
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-28 absolute right-12 top-12">
      {navigationItems.map((item) => {
        return (
          <NavigationItem
            {...item}
            state={state}
            onClick={() => setState(item.itemId)}
          />
        );
      })}
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
      className={`rounded-full w-fit gap-2 p-2 flex flex-row justify-center items-center font-content text-white shadow-md shadow-b-0 hover:brightness-90 hover:translate-y-0.5 transition-all cursor-pointer ${
        state === itemId
          ? "bg-secondary shadow-secondary"
          : "bg-white shadow-white"
      }`}
      onClick={onClick}
    >
      {React.cloneElement(iconActive, {
        ...iconActive.props,
        className: `w-5 h-5 text-${state === itemId ? "white" : "black"}`,
      })}{" "}
      {state === itemId && <p>{item}</p>}
    </div>
  );
}
