import { GENERAL_ICONS, NAVIGATION_ICONS } from "../assets/Icons";
import cnsc_logo from "../assets/img/logos/cnsc.png";
import hsi_logo from "../assets/img/logos/hsi.png";
import default_work_logo from "../assets/img/logos/default_work.png";
import dsr_achievement from "../assets/img/certificates/developer_stack_rank.jpg";
import topcit_certificate from "../assets/img/certificates/topcit_thumbnail.jpg";
import topcit_certificate_full from "../assets/img/certificates/topcit_certificate.jpg";
import google_ai_certificate from "../assets/img/certificates/google_ai_thumbnail.jpg";

const NAVIGATION_ITEMS = [
  {
    itemId: 0,
    item: "Home",
    iconActive: NAVIGATION_ICONS.BIO.active,
    iconInactive: NAVIGATION_ICONS.BIO.inactive,
  },
  {
    itemId: 1,
    item: "Skills",
    iconActive: NAVIGATION_ICONS.SKILLS.active,
    iconInactive: NAVIGATION_ICONS.SKILLS.inactive,
  },
  {
    itemId: 2,
    item: "Experiences",
    iconActive: NAVIGATION_ICONS.EXPERIENCE.active,
    iconInactive: NAVIGATION_ICONS.EXPERIENCE.inactive,
  },
  {
    itemId: 3,
    item: "Projects",
    iconActive: NAVIGATION_ICONS.PROJECTS.active,
    iconInactive: NAVIGATION_ICONS.PROJECTS.inactive,
  },
  {
    itemId: 5,
    item: "Contacts",
    iconActive: NAVIGATION_ICONS.CONTACTS.active,
    iconInactive: NAVIGATION_ICONS.CONTACTS.inactive,
  },
];

const HOME_CONTENTS = {
  header: "I Build, I Design, I Manage — I Make Ideas Real.",
  content: "Need a reliable team player who can manage, build, design, or test your digital solutions? I’m Kai Yaneza—legally known as Lloyd Jemuel L. Yaneza—a flexible and driven IT graduate with hands-on experience across multiple roles in tech. From leading projects and developing systems to crafting user interfaces and performing quality assurance, I bring a well-rounded, adaptable skill set to any team. I thrive in dynamic environments and am eager to contribute to innovative companies that value versatility, initiative, and collaboration."
}

const SKILLS_CONTENTS = {
  soft_skills: [
    {
      skill: "Leadership",
      measure: 9 // out of 10
    },
    {
      skill: "Team Collaboration",
      measure: 8 // out of 10
    },
    {
      skill: "Problem-Solving",
      measure: 9 // out of 10
    },
    {
      skill: "Attention to Detail",
      measure: 7 // out of 10
    },
    {
      skill: "Communication",
      measure: 7 // out of 10
    },
  ],
  hard_skills: [
    {
      skill: "Project Management",
      measure: 7 // out of 10
    },
    {
      skill: "Design & Prototyping",
      measure: 9 // out of 10
    },
    {
      skill: "System Development",
      measure: 8 // out of 10
    },
    {
      skill: "QA Testing",
      measure: 7 // out of 10
    },
    {
      skill: "Graphic Designing",
      measure: 6 // out of 10
    },
  ],
  tech_stack: [
    {
      skill: "Jira",
      measure: 7 // out of 10
    },
    {
      skill: "Figma",
      measure: 9 // out of 10
    },
    {
      skill: "Vite + ReactJS",
      measure: 8 // out of 10
    },
    {
      skill: "Android Studio",
      measure: 9 // out of 10
    },
    {
      skill: "Spring Boot",
      measure: 8 // out of 10
    },
    {
      skill: "Firebase",
      measure: 7 // out of 10
    },
    {
      skill: "Canva",
      measure: 8 // out of 10
    },
    {
      skill: "Adobe Photoshop",
      measure: 8 // out of 10
    },
  ]
}

const PROJECTS_CATEGORIES = [
  {
    id: "all",
    name: "All Projects",
    emoji: "⌨️"
  },
  {
    id: "graphic",
    name: "Graphic Design",
    emoji: "🎨"
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    emoji: "🖌️"
  },
  {
    id: "mobile",
    name: "Mobile Development",
    emoji: "📱"
  },
  {
    id: "software",
    name: "Software Development",
    emoji: "💻"
  },
  {
    id: "website",
    name: "Website Development",
    emoji: "🌐"
  },
  {
    id: "game",
    name: "Game Development",
    emoji: "🎮"
  },
]

const PROJECTS_CONTENTS = [
  {
    id: "unleash-landing-page",
    tags: "website",
    maincolor: "#003ABB",
    name: "Unleash Landing Page",
    date_created: 20250228,
    description: "I developed the official landing page for Unleash PH, a pet-focused social media app by Highly Succeed Inc., using ReactJS, HTML, and CSS. The objective was to build a responsive, visually engaging page that introduces the app and its features. I integrated a video hero banner, carousel displays, and a fully functional Contact Us form, all optimized for mobile responsiveness. This project showcased my ability to build modern web interfaces from scratch and effectively communicate a brand’s identity through design. The page was well received for its clarity, structure, and smooth user experience.",
    link: "https://unleash.ph/",
    totalImages: 8,
  }, {
    id: "lapak-tabanao-wedding",
    tags: "website",
    maincolor: "#FF9C00",
    name: "Lapak-Tabanao Wedding",
    date_created: 20221202,
    description: "This is a fully custom wedding website I built using pure HTML, CSS, and JavaScript to serve as the digital companion for Regine and Kris Anne’s wedding. The site included key details like schedules, dress codes, venue location via Google Maps, and a working RSVP system. Designed with a clean, user-friendly layout, it allowed guests to conveniently access information and confirm attendance. My goal was to create an elegant, mobile-ready solution that could reduce planning stress—and it succeeded, receiving praise from the couple and their guests alike.",
    link: "https://lapak-tabanao-wedding.netlify.app/",
    totalImages: 6,
  }, {
    id: "nibunki",
    tags: "game software",
    maincolor: "#0a7e00",
    name: "二分木 (Binary Tree)",
    date_created: 20220222,
    description: "Nibunki is a console-based visualization tool I developed using Python to creatively demonstrate how a Binary Tree works. Designed as an educational aid, the tool displays key structural concepts in real-time—including the root, parent-child relationships, edges, siblings, leaf nodes, degrees, levels, paths, height, and depth—as the tree dynamically grows. It also updates these attributes as new nodes are inserted, allowing users to see how the tree evolves. Built from scratch with clarity and interactivity in mind, Nibunki was so effective that even years after I completed it, my professor continues to use it as a demonstration tool for teaching data structures to new students.",
    link: "https://github.com/UgetsuMurata-CNSC-Projects/Nibunki",
    totalImages: 4,
  }, {
    id: "geostorm",
    tags: "game software",
    maincolor: "#b50000",
    name: "ジオストーム",
    date_created: 20220222,
    description: "ジオストーム is a text-based educational game developed in Python, aimed at raising awareness on natural disaster preparedness. Working as part of a team, I contributed to building its pathfinding logic, dynamic scenarios, and ASCII-based map rendering using libraries like Colorama, Pygame, and Pynput. The game challenges players to select safe evacuation routes across seven randomized disaster scenarios, with real-time feedback and background sounds enhancing the immersion. Remarkably, our professor continues to use this project years later as a class example, recognizing its clarity, creativity, and educational value.",
    link: "https://github.com/UgetsuMurata-CNSC-Projects/GeoStorm",
    totalImages: 6,
  }, {
    id: "mono-2",
    tags: "game software",
    maincolor: "#008a7d",
    name: "Mono²",
    date_created: 20220222,
    description: "Mono² is a console-based card pairing game I developed in Python, using linked lists to manage game logic in a simplified simulation of the traditional \"Unggoy Unggoyan\" game. Designed to be played in Player vs Player and Player vs Computer, the game uses text-based UI with ASCII visuals and coin-flip logic to determine turns. My role covered the full development lifecycle—from logic implementation to UI flow. The project not only reinforced my understanding of data structures but also turned out to be a fun and functional way to demonstrate algorithmic thinking in game design.",
    link: "https://github.com/UgetsuMurata-CNSC-Projects/Mono_2",
    totalImages: 11,
  }, {
    id: "crash-detection",
    tags: "robotics",
    maincolor: "#ac6700",
    name: "Crash Detection Device",
    date_created: 20250211,
    description: "This Crash Detection Device is a microcontroller-based safety solution I developed using the Arduino IDE and an Arduino Nano, commissioned by Senior High School students from Vinzons, Camarines Norte for their research project. The goal was to create a compact, reliable system that could automatically detect vehicle crashes and send emergency SMS alerts to pre-registered phone numbers. Designed with real-world applications in mind, the device is activated by the driver and uses crash-detection logic to trigger alerts in the event of a collision—ensuring that help can be notified even if the driver is incapacitated. I was primarily responsible for the programming logic—developing the system that detects impact and triggers alerts—and also contributed to the design and hardware integration alongside the team. The result was a functional and practical solution that demonstrates how accessible embedded systems can be applied to real-world safety challenges.",
    link: "https://github.com/UgetsuSoloFreelance/ArduinoCrashDetectionDevice",
    totalImages: 2,
  }, {
    id: "merkado",
    tags: "game mobile",
    maincolor: "#eb8022",
    name: "Merkado",
    date_created: 20241209,
    description: "Merkado is a story-driven educational game developed as a capstone project to gamify the entire Grade 9 Economics curriculum. Commissioned by Dr. Jheny P. Villacruz, an Araling Panlipunan teacher at Moreno Integrated School in Daet, Camarines Norte, the game transforms academic concepts into a narrative-based experience with interactive decision-making, quizzes, and branching scenarios. Players navigate through real-life economic situations—making choices, solving challenges, and learning through consequence-based outcomes. I contributed to the game's design and logic, helping ensure that core economics lessons such as supply and demand, scarcity, opportunity cost, and market systems are taught in a way that’s both engaging and aligned with educational standards. Merkado demonstrates how gamification and storytelling can meaningfully enhance classroom learning and student retention.",
    link: "https://github.com/CosmicBSIT/merkado/releases/download/v1.0.0/Merkado.v1.0.0-official.apk",
    totalImages: 2,
  },
]

const EXPERIENCE_CONTENTS = {
  ACADEMIC: [
    {
      logo: cnsc_logo,
      school: "Camarines Norte State College",
      academic_years: "2021 - 2025",
      course: "Bachelor of Science in Information Technology",
    }
  ],
  WORK_EXPERIENCE: [
    {
      logo: hsi_logo,
      company: "Unleash PH (Highly Succeed Inc.)",
      date: "January 2025 - April 2025",
      position: "Lead Website Developer",
      work_type: "Intern",
      description: [
        "Successfully led the development and deployment of Unleash PH's website under a tight deadline.",
        "Resolved multiple QA-reported issue tickets, enhancing overall site functionality and user experience.",
        "Directed a team in building Unleash PH's admin portal using Vite and ReactJS.",
        "Collaborated with UI/UX designers to refine and implement Figma-based design improvements.",
        "Collaborated with the Project Manager to help manage the Jira tickets.",
        "Ranked 7th in Highly Succeed Inc.'s internal “Staff Developer Stack Rank” during internship.",
        "Participated in a professional training session focused on Quality Assurancepractices."
      ]
    },
    {
      logo: hsi_logo,
      company: "Highly Succeed Inc.",
      date: "January 2025 - April 2025",
      position: "Graphics Design",
      work_type: "Intern",
      description: [
        "Designed and delivered multiple Figma-based UI/UX layouts within tight deadlines.",
        "Created pitch decks and visual materials using Canva for internal and external use.",
        "Produced assets, including flyers and posters, using Adobe Photoshop.",
        "Attended several training sessions to strengthen skills in graphic design."
      ]
    },
    {
      logo: hsi_logo,
      company: "Highly Succeed Inc.",
      date: "January 2025 - April 2025",
      position: "Web Developer",
      work_type: "Intern",
      description: [
        "Contributed visual and functional assets to the GoNegosyo website.",
        "Implemented front-end code enhancements to improve site performance and user interface.",
        "Identified and resolved multiple bugs and technical issues, ensuring a smoother user experience."
      ]
    },
    {
      logo: default_work_logo,
      company: undefined,
      date: "December 2023 - August 2024",
      position: "Lead Programmer",
      work_type: "Freelance",
      description: [
        "Communicated directly with multiple clients to propose tailored solutions, provide project updates, and deliver system presentations.",
        "Led the end-to-end development, testing, and maintenance of various commissioned systems, including mobile apps, websites, and Excel-based macros.",
        "Supervised a team of developers to ensure the successful delivery of client-requested systems and features."
      ]
    },
  ],
  ACHIEVEMENTS_AND_CERTIFICATIONS: [
    {
      logo: google_ai_certificate,
      type: 0, // 0 for certification
      name: "Google AI Essentials",
      issuing_organization: "Google",
      date_obtained: "December 10, 2024",
      CID: undefined,
      link: "https://coursera.org/verify/D6OEX2YV17EU"
    },
    {
      logo: topcit_certificate,
      type: 0, // 0 for certification
      name: "Test of Practical Competency in ICT (TOPCIT) - Level 2",
      issuing_organization: "Institute for Information & Communications Technology Promotion",
      date_obtained: "November 20, 2024",
      CID: "TL2405002503",
      link: topcit_certificate_full
    },
    {
      logo: dsr_achievement,
      type: 1, // 1 for achievement
      name: "Developer Stack Rank",
      issuing_organization: "Highly Succeed Inc.",
      date_obtained: "April 16, 2025",
      CID: undefined,
      link: dsr_achievement
    },
  ]
}

export { NAVIGATION_ITEMS, HOME_CONTENTS, SKILLS_CONTENTS, PROJECTS_CATEGORIES, PROJECTS_CONTENTS, EXPERIENCE_CONTENTS };
