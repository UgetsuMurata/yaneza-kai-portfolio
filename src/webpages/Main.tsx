import { useState } from "react";
import NavigationDisplay from "../component/NavigationDisplay";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import Experiences from "../sections/Experiences";
import Projects from "../sections/Projects";
import References from "../sections/References";
import Contacts from "../sections/Contacts";
import "./Main.css";
import { NAVIGATION_ITEMS } from "../variables/variables";

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0);

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
        <div className="absolute inset-0 backdrop-blur-sm z-10" />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-4/5 aspect-square outline-primary outline-[100px] rounded-full bg-transparent z-0" />
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
      <References
        setCurrentPage={setCurrentPage}
        id={NAVIGATION_ITEMS[4].item}
        page={NAVIGATION_ITEMS[4].itemId}
      />
      <Contacts
        setCurrentPage={setCurrentPage}
        id={NAVIGATION_ITEMS[5].item}
        page={NAVIGATION_ITEMS[5].itemId}
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
