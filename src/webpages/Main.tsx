import { useEffect, useState } from "react";
import NavigationDisplay from "../component/NavigationDisplay";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import Experiences from "../sections/Experiences";
import Projects from "../sections/Projects";
import Contacts from "../sections/Contacts";
import { NAVIGATION_ITEMS } from "../variables/variables";

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0);

  const [circle1, setCircle1] = useState({
    position: { x: 50, y: 50 }, // percentage values
    radius: 5,
  });
  const [circle2, setCircle2] = useState({
    position: { x: 50, y: 50 }, // percentage values
    radius: 5,
  });

  // Update circles based on current page
  useEffect(() => {
    switch (currentPage) {
      case 0:
        setCircle1({ position: { x: 50, y: 50 }, radius: 75 });
        setCircle2({ position: { x: 150, y: 50 }, radius: 5 });
        break;
      case 1:
        setCircle1({ position: { x: 25, y: 25 }, radius: 40 });
        setCircle2({ position: { x: 75, y: 75 }, radius: 20 });
        break;
      case 2:
        setCircle1({ position: { x: 2, y: 98 }, radius: 10 });
        setCircle2({ position: { x: 55, y: 45 }, radius: 75 });
        break;
      case 3:
        setCircle1({ position: { x: 20, y: 20 }, radius: 80 });
        setCircle2({ position: { x: 80, y: 70 }, radius: 30 });
        break;
      default:
        setCircle1({ position: { x: 150, y: 50 }, radius: 5 });
        setCircle2({ position: { x: -50, y: 50 }, radius: 40 });
    }
  }, [currentPage]);

  return (
    <div className="font-content w-full h-screen relative bg-black overflow-hidden">
      {/* NAVIGATION ICONS */}
      <div className="absolute inset-0 z-20">
        <NavigationDisplay state={currentPage} setState={scrollToSection}>
          <ContentManager setCurrentPage={setCurrentPage} />
        </NavigationDisplay>
      </div>

      {/* BACKGROUND */}
      <div className="z-0 absolute inset-0">
        {currentPage !== 5 && (
          <div className="absolute inset-0 backdrop-blur-sm z-10" />
        )}
        {/* Dynamic Circle 1 */}
        <div
          id="circle-bg-1"
          className="absolute outline-primary outline-[100px] rounded-full bg-transparent z-0 transition-all duration-1000 ease-in-out"
          style={{
            left: `${circle1.position.x}%`,
            top: `${circle1.position.y}%`,
            width: `${circle1.radius}vw`,
            height: `${circle1.radius}vw`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Dynamic Circle 2 */}
        <div
          id="circle-bg-2"
          className="absolute outline-primary outline-[100px] rounded-full bg-transparent z-0 transition-all duration-1000 ease-in-out"
          style={{
            left: `${circle2.position.x}%`,
            top: `${circle2.position.y}%`,
            width: `${circle2.radius}vw`,
            height: `${circle2.radius}vw`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
}

type ContentManagerType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function ContentManager({ setCurrentPage }: ContentManagerType) {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory">
      <Home
        setCurrentPage={setCurrentPage}
        id={NAVIGATION_ITEMS[0].item}
        page={NAVIGATION_ITEMS[0].itemId}
      />
      <Skills
        setCurrentPage={setCurrentPage}
        id={NAVIGATION_ITEMS[1].item}
        page={NAVIGATION_ITEMS[1].itemId}
      />
      <Experiences
        setCurrentPage={setCurrentPage}
        id={NAVIGATION_ITEMS[2].item}
        page={NAVIGATION_ITEMS[2].itemId}
      />
      <Projects
        setCurrentPage={setCurrentPage}
        id={NAVIGATION_ITEMS[3].item}
        page={NAVIGATION_ITEMS[3].itemId}
      />
      <Contacts
        setCurrentPage={setCurrentPage}
        id={NAVIGATION_ITEMS[4].item}
        page={NAVIGATION_ITEMS[4].itemId}
      />
    </div>
  );
}

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
