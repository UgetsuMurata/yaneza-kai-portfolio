import { NAVIGATION_ICONS } from "../assets/Icons";

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
  header: "Lorem ipsum dolor sit amet.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at libero rhoncus lectus commodo laoreet ut in leo. Praesent vitae eleifend elit, vitae dictum eros. Fusce aliquet magna vitae laoreet condimentum. Morbi eget euismod elit. Curabitur ut justo eleifend, dictum nunc sit amet, posuere ex."
}

const SKILLS_CONTENTS = {
  soft_skills: [
    {
      skill: "skill 1",
      measure: 5 // out of 10
    },
    {
      skill: "skill 2",
      measure: 4 // out of 10
    },
    {
      skill: "skill 3",
      measure: 2 // out of 10
    },
    {
      skill: "skill 4",
      measure: 7 // out of 10
    },
    {
      skill: "skill 5",
      measure: 10 // out of 10
    },
  ],
  hard_skills: [
    {
      skill: "skill 1",
      measure: 3 // out of 10
    },
    {
      skill: "skill 2",
      measure: 8 // out of 10
    },
    {
      skill: "skill 3",
      measure: 8 // out of 10
    },
    {
      skill: "skill 4",
      measure: 4 // out of 10
    },
    {
      skill: "skill 5",
      measure: 1 // out of 10
    },
  ],
  tech_stack: [
    {
      skill: "skill 1",
      measure: 2 // out of 10
    },
    {
      skill: "skill 2",
      measure: 9 // out of 10
    },
    {
      skill: "skill 3",
      measure: 1 // out of 10
    },
    {
      skill: "skill 4",
      measure: 5 // out of 10
    },
    {
      skill: "skill 5",
      measure: 10 // out of 10
    },
  ]
}

export { NAVIGATION_ITEMS, HOME_CONTENTS, SKILLS_CONTENTS };
