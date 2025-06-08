import { GENERAL_ICONS, NAVIGATION_ICONS } from "../assets/Icons";
import cnsc_logo from "../assets/img/logos/cnsc.png";
import hsi_logo from "../assets/img/logos/hsi.png";
import default_work_logo from "../assets/img/logos/default_work.png";
import dsr_achievement from "../assets/img/certificates/developer_stack_rank.jpg";
import topcit_certificate from "../assets/img/certificates/topcit_thumbnail.jpg";
import topcit_certificate_full from "../assets/img/certificates/topcit_certificate.jpg";
import google_ai_certificate from "../assets/img/certificates/google_ai_thumbnail.jpg";
import joymie_fuentes from "../assets/img/references/joymie_fuentes.png";

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
    itemId: 4,
    item: "References",
    iconActive: NAVIGATION_ICONS.REFERENCES.active,
    iconInactive: NAVIGATION_ICONS.REFERENCES.inactive,
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
    description: "This landing page is created using ReactJS. It is used as the official website for Unleash PH, a pet social media app developed by Highly Succeed Inc.",
    link: "https://unleash.ph/",
    totalImages: 8,
  },
]

const REFRENCES_CONTENTS = [
  {
    img: joymie_fuentes,
    name: "JOYMIE FUENTES",
    position: "HR Associate/University and Training Coordinator",
    company: "Highly Succeed Inc.",
    contacts: [
      {
        icon: GENERAL_ICONS.email,
        value: "email@gmail.com",
        link: "mailto:email@gmail.com"
      },
      {
        icon: GENERAL_ICONS.telephone,
        value: "(+63) 912 345 6789",
        link: undefined
      }
    ],
    linkedin: "https://www.linkedin.com/in/joymie-fuentes-8ba87722a/"
  }
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

export { NAVIGATION_ITEMS, HOME_CONTENTS, SKILLS_CONTENTS, PROJECTS_CATEGORIES, PROJECTS_CONTENTS, REFRENCES_CONTENTS, EXPERIENCE_CONTENTS };
