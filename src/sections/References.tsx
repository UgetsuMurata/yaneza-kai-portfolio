import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { REFRENCES_CONTENTS } from "../variables/variables";
import { cloneReactIcon } from "../variables/functions";
import { GENERAL_ICONS } from "../assets/Icons";

type ReferencesType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  page: number;
};

export default function References({
  setCurrentPage,
  id,
  page,
}: ReferencesType) {
  const { ref, inView } = useInView({
    threshold: 0.6, // at least 60% of the section must be visible
  });

  const [referenceID, setReferenceID] = useState(0);
  const [currentReference, setCurrentReference] = useState(
    REFRENCES_CONTENTS[0]
  );

  const referenceRef = useRef<HTMLParagraphElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const ref = referenceRef.current;
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const containerRect = ref.offsetParent?.getBoundingClientRect();
      if (containerRect) {
        setPosition({
          top: rect.top - containerRect.top,
          left: rect.left - containerRect.left,
        });
      }
    }
  }, [currentReference]);

  const handleLeftClick = () => {
    const newID =
      (referenceID - 1 + REFRENCES_CONTENTS.length) % REFRENCES_CONTENTS.length;
    setReferenceID(newID);
    setCurrentReference(REFRENCES_CONTENTS[newID]);
  };

  const handleRightClick = () => {
    const newID = (referenceID + 1) % REFRENCES_CONTENTS.length;
    setReferenceID(newID);
    setCurrentReference(REFRENCES_CONTENTS[newID]);
  };

  useEffect(() => {
    if (inView) setCurrentPage(page);
  }, [inView]);

  return (
    <div
      id={id}
      ref={ref}
      className="snap-start snap-always w-full h-screen flex-shrink-0 p-12 overflow-hidden"
    >
      <div className="bg-primary rounded-4xl w-full h-full flex flex-row items-center">
        {/* NAME AND IMAGE */}
        <div className="w-1/2 h-screen relative">
          {/* IMAGE */}
          <img
            src={currentReference.img}
            className="h-screen w-auto absolute bottom-0 left-1/2 -translate-x-1/2 object-contain z-10"
            alt="Reference"
          />

          {/* Floating text positioned exactly on top of the white name */}
          <p className="absolute ps-4 py-12 top-1/2 -translate-y-1/2 z-20 font-content text-6xl font-bold text-outline-white-sm pointer-events-none">
            {currentReference.name}
          </p>

          <div className="py-12 ps-4 h-full overflow-hidden flex flex-col justify-evenly z-0 relative">
            <p className="font-content text-6xl font-bold text-outline-white-sm">
              {currentReference.name}
            </p>
            <p className="font-content text-6xl font-bold text-outline-white-sm">
              {currentReference.name}
            </p>
            <p className="font-content text-6xl font-bold text-outline-white-sm">
              {currentReference.name}
            </p>
            <p className="font-content text-6xl font-bold text-white">
              {currentReference.name}
            </p>
            <p className="font-content text-6xl font-bold text-outline-white-sm">
              {currentReference.name}
            </p>
            <p className="font-content text-6xl font-bold text-outline-white-sm">
              {currentReference.name}
            </p>
            <p className="font-content text-6xl font-bold text-outline-white-sm">
              {currentReference.name}
            </p>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col justify-evenly">
          <div className="flex flex-col gap-4">
            <p className="text-6xl w-4/5 font-header text-black">
              {currentReference.name}
            </p>
            <p className="w-3/5 text-lg font-content text-black">
              {currentReference.position} - {currentReference.company}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {currentReference.contacts.map((value) => (
              <Contacts {...value} />
            ))}
          </div>
          <a
            href={currentReference.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-4 py-2 rounded-full bg-secondary-dark text-white w-fit text-sm select-none cursor-pointer hover:brightness-90 hover:translate-y-0.5">
              Find in LinkedIn
            </div>
          </a>

          {/* LEFT AND RIGHT BUTTONS */}
          <div className="flex flex-row w-full justify-end gap-4 pe-4">
            <div onClick={handleLeftClick}>
              {cloneReactIcon(
                GENERAL_ICONS.left,
                GENERAL_ICONS.left.props,
                "w-8 h-8 text-secondary-dark cursor-pointer hover:brightness-90 hover:translate-y-0.5"
              )}
            </div>
            <div onClick={handleRightClick}>
              {cloneReactIcon(
                GENERAL_ICONS.right,
                GENERAL_ICONS.right.props,
                "w-8 h-8 text-secondary-dark cursor-pointer hover:brightness-90 hover:translate-y-0.5"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ContactsType = {
  icon: any;
  value: string;
  link: string | undefined;
};

function Contacts({ icon, value, link }: ContactsType) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-row gap-2 items-center">
        {cloneReactIcon(icon, icon.props, "w-6 h-6 text-black")}
        <p>{value}</p>
      </div>
    </a>
  );
}
