import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import logo from "/logo.png";
import { CONTACTS_ICONS } from "../assets/Icons";
import { cloneReactIcon } from "../variables/functions";

type ContactsType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  page: number;
};

export default function Contacts({ setCurrentPage, id, page }: ContactsType) {
  const { ref, inView } = useInView({
    threshold: 0.6, // at least 60% of the section must be visible
  });

  useEffect(() => {
    if (inView) setCurrentPage(page);
  }, [inView]);

  return (
    <div
      id={id}
      ref={ref}
      className="snap-start snap-always w-full h-screen flex-shrink-0 flex flex-col gap-16 justify-center"
    >
      <div className="flex flex-col gap-4">
      <img src={logo} alt="logo" className="h-20 object-contain" />
      <p className="font-header text-white w-full text-center text-4xl">
        Contacts
      </p>
      </div>
      {/* CONTACTS */}
      <div className="flex flex-row flex-wrap justify-evenly w-96 mx-auto">
        {CONTACTS_ICONS.map((values) => {
          return <ContactContainer {...values} />;
        })}
      </div>
    </div>
  );
}
type ContactType = {
  social: string;
  icon: any;
  username: string;
  link: string | undefined;
};
function ContactContainer({ social, icon, username, link }: ContactType) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -20; // rotate between -10 to 10 deg
    const rotateY = (x / rect.width - 0.5) * 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-28 h-28 flex items-center justify-center"
      style={{ perspective: "600px" }} // Optional: Move here for smoother tilt
    >
      {/* Hover Card */}
      {isHovered && (
        <div
          ref={cardRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-44 h-44 bg-white custom-glow-shadow-sm-white rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-lg pointer-events-auto"
          style={{
            transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.05s ease-out",
          }}
          onMouseMove={(e) => {
            e.stopPropagation();
            handleMouseMove(e);
          }}
          onMouseEnter={(e) => {
            e.stopPropagation();
            handleMouseEnter();
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            handleMouseLeave();
          }}
        >
          {/* Card Contents */}
          <div>
            {cloneReactIcon(icon, icon.props, `w-10 h-10 text-primary-dark`)}
          </div>
          <p className="font-semibold text-primary-dark">{social}</p>
          <p className="text-sm text-black">{username}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm bg-primary-dark text-white rounded hover:bg-primary-dark/80 transition"
            >
              Go To {social}
            </a>
          )}
        </div>
      )}

      {/* Default Icon */}
      {!isHovered && (
        <div
          className="z-10 pointer-events-auto"
          onMouseEnter={handleMouseEnter}
        >
          {cloneReactIcon(icon, icon.props, `w-10 h-10 text-primary`)}
        </div>
      )}
    </div>
  );
}
