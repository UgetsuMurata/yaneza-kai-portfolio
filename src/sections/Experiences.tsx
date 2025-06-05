import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cloneReactIcon } from "../variables/functions";
import { EXPERIENCES_ICONS } from "../assets/Icons";
import { EXPERIENCE_CONTENTS } from "../variables/variables";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sections.css";

type ExperiencesType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  page: number;
};

export default function Experiences({
  setCurrentPage,
  id,
  page,
}: ExperiencesType) {
  const [shown, setShown] = useState(0);
  const shownRef = useRef(shown);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: shown === 2 ? 3 : 1,
    slidesToScroll: 1,
  };

  const { ref, inView } = useInView({
    threshold: 0.6, // at least 60% of the section must be visible
  });

  useEffect(() => {
    if (!inView) return;
    let isThrottled = false;
    setCurrentPage(page);
    setShown(0);

    const handleScroll = (e: WheelEvent) => {
      const currentShown = shownRef.current;
      if (
        (currentShown >= 2 && e.deltaY > 0) ||
        (currentShown <= 0 && e.deltaY < 0)
      ) {
        window.removeEventListener("wheel", handleScroll);
        return;
      }

      e.preventDefault();
      if (isThrottled) return;
      isThrottled = true;

      setShown((prev) => {
        return e.deltaY > 0 ? prev + 1 : prev - 1;
      });

      setTimeout(() => {
        isThrottled = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [inView]);

  useEffect(() => {
    shownRef.current = shown;
  }, [shown]);

  return (
    <div
      id={id}
      ref={ref}
      className="snap-start snap-always w-full h-screen flex-shrink-0 flex flex-col gap-4 p-10"
    >
      {/* NAVIGATION */}
      <div className="flex flex-row gap-4">
        <SubNavItems
          id={0}
          current={shown}
          icon={EXPERIENCES_ICONS.WORK}
          name={tabToExperience(0)}
          onClick={() => setShown(0)}
        />
        <SubNavItems
          id={1}
          current={shown}
          icon={EXPERIENCES_ICONS.ACADEMIC}
          name={tabToExperience(1)}
          onClick={() => setShown(1)}
        />
        <SubNavItems
          id={2}
          current={shown}
          icon={EXPERIENCES_ICONS.ACHIEVEMENTS_AND_CERTIFICATIONS}
          name={tabToExperience(2)}
          onClick={() => setShown(2)}
        />
      </div>

      {/* CONTENTS */}
      <Slider {...settings}>
        {shown === 0
          ? EXPERIENCE_CONTENTS.WORK_EXPERIENCE.map((value) => (
              <WorkExperienceListItem {...value} />
            ))
          : shown === 1
          ? EXPERIENCE_CONTENTS.ACADEMIC.map((value) => (
              <AcademicExperienceListItem {...value} />
            ))
          : EXPERIENCE_CONTENTS.ACHIEVEMENTS_AND_CERTIFICATIONS.map((value) => (
              <ACListItem {...value} />
            ))}
      </Slider>
    </div>
  );
}

function tabToExperience(tab: number): string {
  return [
    "Work History",
    "Academic Background",
    "Achievements and Certifications",
  ][tab];
}

type subNavItemsType = {
  id: number;
  current: number;
  icon: {
    active: any;
    inactive: any;
  };
  name: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

function SubNavItems({ id, current, icon, name, onClick }: subNavItemsType) {
  const [active, setActive] = useState(id === current); // track active status
  useEffect(() => setActive(id === current), [current]); // change active status on current change
  return (
    <div
      className="flex flex-row rounded-full select-none custom-glow-shadow-sm-white cursor-pointer h-fit w-fit bg-white items-center hover:translate-y-0.5 hover:brightness-90 transition-transform"
      onClick={onClick}
    >
      <div
        className={`p-2 w-fit h-fit rounded-full bg-${
          active ? "secondary" : "white"
        }`}
      >
        {cloneReactIcon(
          active ? icon.active : icon.inactive, // icon
          active ? icon.active.props : icon.inactive.props, // props
          `w-5 h-5 text-${active ? "white" : "black"}` // className
        )}
      </div>
      {active && <p className="ps-2 pe-4 font-content text-black">{name}</p>}
    </div>
  );
}

type AcademicExperienceItemType = {
  logo: string;
  school: string;
  academic_years: string;
  course: string;
};

function AcademicExperienceListItem({
  logo,
  school,
  academic_years,
  course,
}: AcademicExperienceItemType) {
  return (
    <div className="mx-auto my-5 w-4xl p-8 bg-white outline-1 outline-black flex flex-row h-40 rounded-full justify-center gap-8 custom-glow-shadow-lg">
      <div className="w-24 h-24 rounded-full overflow-clip custom-glow-shadow-sm">
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
      <div className="h-full flex-1 flex flex-col justify-center">
        <p className="font-bold font-header text-black text-lg">{course}</p>
        <p className="font-semibold font-content text-black text-sm">
          {school}
        </p>
        <p className="font-content text-black text-sm">{academic_years}</p>
      </div>
    </div>
  );
}

type WorkExperienceItemType = {
  logo: string;
  company: string | undefined;
  date: string;
  position: string;
  work_type: string;
  description: string[];
};

function WorkExperienceListItem({
  logo,
  company,
  date,
  position,
  work_type,
  description,
}: WorkExperienceItemType) {
  return (
    <div className="mx-auto my-5 w-4xl p-8 bg-white outline-1 outline-black flex flex-col h-full rounded-4xl justify-center gap-8 custom-glow-shadow-lg">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-24 h-24 rounded-full overflow-clip custom-glow-shadow-sm">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="h-full flex-1 flex flex-col justify-center">
          <p className="font-bold font-header text-black text-lg">
            {position} - {work_type}
          </p>
          <p className="font-semibold font-content text-black text-sm">
            {company}
          </p>
          <p className="font-content text-black text-sm">{date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 font-content text-base w-full">
        <ul>
          {description.map((item) => {
            return <li className="list-disc">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

type ACExperienceItemType = {
  logo: string;
  type: number;
  name: string;
  issuing_organization: string;
  date_obtained: string;
  CID: string | undefined;
  link: string;
};

function ACListItem({
  logo,
  type,
  name,
  issuing_organization,
  date_obtained,
  CID,
  link,
}: ACExperienceItemType) {
  return (
    <div className=" w-64 mx-auto my-5 p-8 bg-white outline-1 outline-black flex h-96 flex-col rounded-4xl justify-center gap-4 custom-glow-shadow-lg">
      <div className="w-full aspect-video overflow-clip custom-glow-shadow-sm rounded-xl">
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 flex flex-col w-full">
        <p className="font-bold font-header w-full text-center text-black text-base">
          {name}
        </p>
        <p className="font-semibold font-content text-black text-sm w-full text-center">
          {issuing_organization}
        </p>
        <p className="font-semibold font-content text-black text-xs w-full text-center">
          {date_obtained}
        </p>
        <p className="font-content text-black text-xs w-full text-center">
          {CID}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mx-auto mt-auto py-1 px-2 bg-secondary-dark text-white text-center text-xs rounded-full select-none hover:translate-y-0.5">See {type === 0 ? "Certificate" : "Achievement"}</a>
      </div>
    </div>
  );
}
