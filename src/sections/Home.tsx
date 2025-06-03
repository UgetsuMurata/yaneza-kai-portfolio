import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import my_picture from "../assets/img/my-picture.png";
import "./sections.css";
import { HOME_CONTENTS } from "../variables/variables";

type HomeType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  page: number;
};

export default function Home({ setCurrentPage, id, page }: HomeType) {
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
      className="snap-start snap-always w-full h-screen flex-shrink-0 flex flex-row gap-4 px-12 justify-center items-center"
    >
      {/* IMAGE */}
      <div className="w-1/2 h-screen relative">
        <p className="w-full text-center font-content absolute top-1/2 -translate-y-1/2 z-30 text-responsive font-bold text-outline-white">
          KAI
        </p>
        <img
          src={my_picture}
          alt="kai in business attire"
          className="absolute h-screen w-full object-contain z-20"
        />
        <p className="w-full text-center font-content absolute top-1/2 -translate-y-1/2 z-10 text-responsive font-bold text-white">
          KAI
        </p>
        <div className="w-full aspect-square custom-glow-shadow absolute top-1/2 -translate-y-1/2 z-0 bg-radial-[at_50%_25%] from-primary to-primary-dark to-100% rounded-4xl" />
      </div>

      {/* CONTENT */}
      <div id="" className="w-1/2 flex flex-col">
        <p className="w-full text-4xl font-header text-white">
          {HOME_CONTENTS.header}
        </p>
        <p className="w-full text-lg font-content text-white">
          {HOME_CONTENTS.content}
        </p>
      </div>
    </div>
  );
}
