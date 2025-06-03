import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ProjectsType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  page: number;
};

export default function Projects({ setCurrentPage, id, page }: ProjectsType) {
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
      className="snap-start snap-always w-full h-screen flex-shrink-0"
    >
      <p className="text-9xl">
        Projects Content: {inView ? " Showing" : " Not Showing"}
      </p>
    </div>
  );
}
