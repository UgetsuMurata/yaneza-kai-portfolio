import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import my_picture from "../assets/img/my-picture-2.png";
import { SKILLS_CONTENTS } from "../variables/variables";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { getCSSVar, hexToRGBA } from "../variables/functions";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type SkillsType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  page: number;
};

export default function Skills({ setCurrentPage, id, page }: SkillsType) {
  const { ref, inView } = useInView({
    threshold: 0.6, // at least 60% of the section must be visible
  });

  const [shown, setShown] = useState(0);
  const shownRef = useRef(shown);
  const [skillList, setSkillList] = useState(SKILLS_CONTENTS.soft_skills);
  const [dataList, setDataList] = useState(
    listToRadarChartData({ value: SKILLS_CONTENTS.soft_skills })
  );

  useEffect(() => {
    if (!inView) return;
    let isThrottled = false;
    setCurrentPage(page);
    setShown(0);
    setSkillList(SKILLS_CONTENTS.soft_skills);
    setDataList(listToRadarChartData({ value: SKILLS_CONTENTS.soft_skills }));

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
    if (shown === 0) {
      setSkillList(SKILLS_CONTENTS.soft_skills);
      setDataList(listToRadarChartData({ value: SKILLS_CONTENTS.soft_skills }));
    } else if (shown === 1) {
      setSkillList(SKILLS_CONTENTS.hard_skills);
      setDataList(listToRadarChartData({ value: SKILLS_CONTENTS.hard_skills }));
    } else if (shown === 2) {
      setSkillList(SKILLS_CONTENTS.tech_stack);
      setDataList(listToRadarChartData({ value: SKILLS_CONTENTS.tech_stack }));
    } else {
      setSkillList([]);
      setDataList(listToRadarChartData({ value: [] }));
    }
  }, [shown]);

  return (
    <div
      id={id}
      ref={ref}
      className="snap-start snap-always w-full h-screen flex-shrink-0 flex flex-row px-12 gap-4"
    >
      {/* NAVIGATION DOTS */}
      <div className="flex flex-col gap-4 py-12">
        <div
          className={`w-6 h-6 outline-4 outline-secondary-dark rounded-full cursor-pointer ${
            shown === 0 ? "bg-secondary" : "bg-transparent"
          }`}
          onClick={() => setShown(0)}
        />
        <div
          className={`w-6 h-6 outline-4 outline-secondary-dark rounded-full cursor-pointer ${
            shown === 1 ? "bg-secondary" : "bg-transparent"
          }`}
          onClick={() => setShown(1)}
        />
        <div
          className={`w-6 h-6 outline-4 outline-secondary-dark rounded-full cursor-pointer ${
            shown === 2 ? "bg-secondary" : "bg-transparent"
          }`}
          onClick={() => setShown(2)}
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 relative">
        {/* BACKGROUND */}
        <div className="overflow-hidden absolute z-0 top-12 bottom-12 w-full rounded-4xl custom-glow-shadow bg-radial-[at_100%_20%] from-primary to-primary-dark-900 from-35% flex flex-row justify-end">
          <div className="flex flex-col justify-around px-2 opacity-30">
            <p className="font-content text-outline-primary-dark-900 text-7xl font-bold">
              {tabToSkill(shown)}
            </p>
            <p className="font-content text-outline-primary-dark-900 text-7xl font-bold">
              {tabToSkill(shown)}
            </p>
            <p className="font-content text-outline-primary-dark-900 text-7xl font-bold">
              {tabToSkill(shown)}
            </p>
            <p className="font-header text-primary-dark-900 text-7xl font-bold">
              {tabToSkill(shown)}
            </p>
            <p className="font-content text-outline-primary-dark-900 text-7xl font-bold">
              {tabToSkill(shown)}
            </p>
            <p className="font-content text-outline-primary-dark-900 text-7xl font-bold">
              {tabToSkill(shown)}
            </p>
            <p className="font-content text-outline-primary-dark-900 text-7xl font-bold">
              {tabToSkill(shown)}
            </p>
          </div>
        </div>
        {/* IMAGE */}
        <img
          src={my_picture}
          alt="kai in business attire"
          className="absolute h-screen w-1/2 object-contain z-10"
        />
        {/* CONTENTS */}
        <div className="absolute w-2/3 z-20 flex flex-col items-end top-12 bottom-12 right-0 py-12 px-12">
          {/* LIST OF SKILLS */}
          <div className="flex-1 flex flex-col w-fit justify-center items-center">
            <div className="flex flex-col items-end">
              {skillList.map((value) => {
                return <SkillItem value={value} />;
              })}
            </div>
            <div className="flex-1 w-full">
              <Radar
                data={dataList}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  layout: { padding: 0 },
                  scales: {
                    r: {
                      min: 0,
                      max: 10,
                      ticks: {
                        display: false,
                        stepSize: 2,
                      },
                      pointLabels: {
                        font: {
                          family: getCSSVar("--font-content"),
                          size: 12,
                          weight: "bold",
                        },
                        color: hexToRGBA(
                          getCSSVar("--color-primary-dark-900"),
                          1
                        ),
                      },
                      grid: {
                        color: hexToRGBA(
                          getCSSVar("--color-secondary-dark"),
                          1
                        ),
                      },
                      angleLines: {
                        display: true,
                        color: hexToRGBA(
                          getCSSVar("--color-secondary-dark"),
                          0.3
                        ),
                      },
                    },
                  },
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      backgroundColor: hexToRGBA(
                        getCSSVar("--color-black"),
                        0.5
                      ),
                      borderColor: hexToRGBA(getCSSVar("--color-black"), 1),
                      borderWidth: 1,
                      titleFont: {
                        family: getCSSVar("--font-content"),
                        size: 14,
                      },
                      bodyFont: {
                        family: getCSSVar("--font-content"),
                        size: 12,
                      },
                      callbacks: {
                        // Optional: Customize tooltip content
                        label: function (context) {
                          return ` ${context.formattedValue}/10`;
                        },
                      },
                    },
                  },
                }}
                redraw
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function tabToSkill(tab: number): string {
  return ["SOFT SKILLS", "HARD SKILLS", "TECH STACK"][tab];
}

type SkillItemType = {
  value: { skill: string; measure: number };
};

function SkillItem({ value }: SkillItemType) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="font-content text-responsive-skill font-bold text-white shadow-2xl">
        {value.skill}
      </p>
      <div className="flex flex-row gap-1">
        {Array.from({ length: value.measure }).map((_, index) => (
          <div
            key={index}
            className="bg-secondary w-5 h-2 rounded-full shadow-2xl shadow-secondary"
          />
        ))}
        {Array.from({ length: 10 - value.measure }).map((_, index) => (
          <div
            key={index}
            className="bg-white w-5 h-2 rounded-full shadow-2xl shadow-white"
          />
        ))}
      </div>
      <p className="font-content text-xs font-bold text-secondary shadow-2xl">
        {value.measure}/10
      </p>
    </div>
  );
}

type Skill = {
  skill: string;
  measure: number;
};

type SkillType = {
  value: Skill[];
};

function listToRadarChartData({ value }: SkillType) {
  return {
    labels: value.map((skill) => skill.skill),
    datasets: [
      {
        data: value.map((skill) => skill.measure),
        backgroundColor: "rgba(163, 17, 0, 0.2)",
        borderColor: "rgba(234, 23, 0, 1)",
        borderWidth: 2,
      },
    ],
  };
}
