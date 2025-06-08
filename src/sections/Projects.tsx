import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cloneReactIcon, formatDate } from "../variables/functions";
import { GENERAL_ICONS } from "../assets/Icons";
import { PROJECTS_CATEGORIES, PROJECTS_CONTENTS } from "../variables/variables";

type ProjectsType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  page: number;
};

export default function Projects({ setCurrentPage, id, page }: ProjectsType) {
  const { ref, inView } = useInView({
    threshold: 0.6, // at least 60% of the section must be visible
  });

  const [currentCategory, setCurrentCategory] = useState("all");
  const [openProject, setOpenProject] = useState(false);
  const [project, setProject] = useState({
    id: "",
    tags: "",
    maincolor: "",
    name: "",
    date_created: 20010101,
    description: "",
    link: "",
    totalImages: 0,
  });
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  useEffect(() => {
    if (inView) setCurrentPage(page);
  }, [inView]);

  return (
    <div
      id={id}
      ref={ref}
      className="snap-start snap-always w-full h-screen flex-shrink-0 flex flex-col p-4"
    >
      {!openProject && (
        <>
          <p className="font-header text-4xl text-white mb-20">Projects</p>
          <div className="flex-1 w-full flex flex-row gap-4">
            {/* CATEGORIES AND SEARCH BAR */}
            <div className="h-full flex flex-col gap-4">
              <p className="font-header text-base text-white">Categories</p>

              <div className="flex w-full flex-row gap-2 items-center p-2 bg-white outline-1 outline-primary-dark rounded-full">
                {cloneReactIcon(
                  GENERAL_ICONS.search,
                  GENERAL_ICONS.search.props,
                  "w-5 h-5 text-primary-dark"
                )}
                <input
                  className="font-content text-primary-dark outline-0"
                  placeholder="Search"
                />
              </div>
              <div className="flex-1 flex flex-col w-full gap-2">
                {PROJECTS_CATEGORIES.map((value) => (
                  <Category
                    {...value}
                    currentId={currentCategory}
                    setId={setCurrentCategory}
                  />
                ))}
              </div>
            </div>

            {/* PROJECTS DISPLAY*/}
            <div className="grid grid-cols-4 gap-2 flex-1">
              {projectsList(PROJECTS_CONTENTS, currentCategory).map((value) => (
                <ProjectContainer
                  {...value}
                  setProject={setProject}
                  setOpenProject={setOpenProject}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {openProject && (
        <div className="w-full h-full bg-white rounded-4xl p-12 flex flex-col">
          <div className="flex flex-row w-full items-center gap-4">
            <div
              onClick={() => {
                setOpenProject(false);
              }}
            >
              {cloneReactIcon(
                GENERAL_ICONS.left,
                GENERAL_ICONS.left.props,
                "w-8 h-8 text-primary-dark cursor-pointer hover:brightness-90 hover:translate-y-0.5"
              )}
            </div>
            <p className="font-header text-4xl flex-1">PROJECT OVERVIEW</p>
          </div>
          <div className="flex-1 flex flex-row">
            <div className="w-1/2 h-full grid grid-cols-3 gap-2 overflow-y-auto p-2">
              {Array.from({ length: project.totalImages }).map((_, index) => (
                <img
                  key={index}
                  src={`/projects/unleash-landing-page/images/${index}.png`}
                  alt={`Image ${index}`}
                  onClick={() =>
                    setOverlayImage(
                      `/projects/unleash-landing-page/images/${index}.png`
                    )
                  }
                  className="w-full h-full rounded-xl object-contain cursor-pointer brightness-90 hover:brightness-100"
                />
              ))}
            </div>
            <div className="w-1/2 h-full flex flex-col">
              <div className="flex-1 w-full">
                <p className="font-header text-4xl">{project.name}</p>
                <p className="font-content text-xs mb-4">
                  {formatDate(project.date_created)}
                </p>
                <p>{project.description}</p>
                <div className="w-full h-[2px] rounded-full bg-secondary-dark my-4" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 w-fit h-fit rounded-full bg-secondary text-white text-xs cursor-pointer hover:brightness-90 hover:translate-y-0.5">
                    View Project
                  </div>
                </a>
              </div>
              <div className="text-xs text-primary-dark-900/80">
                <p>Tags: {project.tags.split(" ").join("; ")};</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {overlayImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer"
          onClick={() => setOverlayImage(null)}
        >
          <img
            src={overlayImage}
            alt="Expanded"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg"
            onClick={(e) => {e.stopPropagation()}}
          />
        </div>
      )}
    </div>
  );
}

type ProjectType = {
  id: string;
  tags: string;
  maincolor: string;
  name: string;
  date_created: number;
  description: string;
  link: string;
  totalImages: number;
};

function projectsList(
  originalList: ProjectType[],
  category: string
): ProjectType[] {
  return originalList.filter(
    (project) =>
      project.tags.split(" ").includes(category) || category === "all"
  );
}

type ProjectContainerType = {
  id: string;
  tags: string;
  maincolor: string;
  name: string;
  date_created: number;
  description: string;
  link: string;
  totalImages: number;
  setProject: React.Dispatch<React.SetStateAction<ProjectType>>;
  setOpenProject: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProjectContainer({
  id,
  tags,
  maincolor,
  name,
  date_created,
  description,
  link,
  totalImages,
  setProject,
  setOpenProject,
}: ProjectContainerType) {
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
      className="relative w-full h-30 flex items-center justify-center"
      style={{ perspective: "300px" }} // Optional: Move here for smoother tilt
    >
      {/* HOVER ELEMENTS */}
      {isHovered && (
        <div
          ref={cardRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-44 bg-white custom-glow-shadow-sm-white rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-lg pointer-events-auto cursor-pointer"
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
          onClick={() => {
            setOpenProject(true);
            setProject({
              id: id,
              tags: tags,
              maincolor: maincolor,
              name: name,
              date_created: date_created,
              description: description,
              link: link,
              totalImages: totalImages,
            });
          }}
        >
          {/* Card Contents */}
          <img
            src={`/projects/${id}/thumbnail.png`}
            alt="thumbnail"
            className="w-full h-20 object-contain"
          />
          <p className="font-semibold text-primary-dark">{name}</p>
          <p className="text-sm text-black">{formatDate(date_created)}</p>
        </div>
      )}

      {/* ORIGINAL ELEMENT */}
      <div
        id={id}
        className={`w-full h-30 rounded-2xl ${
          isHovered ? "bg-transparent" : "bg-white"
        } flex flex-col justify-between items-center p-2`}
        onMouseEnter={handleMouseEnter}
      >
        <img
          src={`/projects/${id}/thumbnail.png`}
          alt="thumbnail"
          className={`w-full h-20 object-contain ${isHovered ? "hidden" : ""}`}
        />
        <p
          className={`font-content font-bold text-${maincolor}/60 w-full text-center ${
            isHovered ? "hidden" : ""
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

type CategoryType = {
  currentId: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  name: string;
  emoji: string;
};

function Category({ currentId, setId, id, name, emoji }: CategoryType) {
  const [color, setColor] = useState(id === currentId ? "primary" : "white");
  const [colorBG, setColorBG] = useState(
    id === currentId ? "primary-dark" : "white"
  );
  useEffect(() => {
    setColor(id === currentId ? "primary" : "white");
    setColorBG(id === currentId ? "primary-dark" : "white");
  }, [currentId]);

  return (
    <div
      id={id}
      className={`p-2 rounded-full bg-${colorBG}/40 outline-1 outline-${colorBG} text-${color} select-none cursor-pointer hover:brightness-90`}
      onClick={() => setId(id)}
    >
      <p>
        <span>{emoji}</span> {name}
      </p>
    </div>
  );
}
