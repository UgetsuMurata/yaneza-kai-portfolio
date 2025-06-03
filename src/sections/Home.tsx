import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
      className="snap-start snap-always w-full h-screen flex-shrink-0"
    >
      <p className="text-9xl">
        Home Content: {inView ? " Showing" : " Not Showing"}
      </p>
    </div>
  );
}
