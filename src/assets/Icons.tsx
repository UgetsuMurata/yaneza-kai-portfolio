import { MdDescription, MdOutlineDescription } from "react-icons/md";
import { IoHammer, IoHammerOutline } from "react-icons/io5";
import {
  PiCertificateFill,
  PiCertificateLight,
  PiUsersThreeFill,
  PiUsersThreeLight,
  PiOfficeChairFill,
  PiOfficeChairLight,
  PiMedalFill,
  PiMedalLight
} from "react-icons/pi";
import {
  BsLaptop,
  BsLaptopFill,
  BsTelephone,
  BsTelephoneFill,
} from "react-icons/bs";
import { RiGraduationCapFill, RiGraduationCapLine } from "react-icons/ri";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaViber } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const NAVIGATION_ICONS = {
  BIO: {
    active: <MdDescription />,
    inactive: <MdOutlineDescription />,
  },
  SKILLS: {
    active: <IoHammer />,
    inactive: <IoHammerOutline />,
  },
  EXPERIENCE: {
    active: <PiCertificateFill />,
    inactive: <PiCertificateLight />,
  },
  PROJECTS: {
    active: <BsLaptopFill />,
    inactive: <BsLaptop />,
  },
  REFERENCES: {
    active: <PiUsersThreeFill />,
    inactive: <PiUsersThreeLight />,
  },
  CONTACTS: {
    active: <BsTelephoneFill />,
    inactive: <BsTelephone />,
  },
};

const EXPERIENCES_ICONS = {
  ACADEMIC: {
    active: <RiGraduationCapFill />,
    inactive: <RiGraduationCapLine />,
  },
  WORK: {
    active: <PiOfficeChairFill />,
    inactive: <PiOfficeChairLight />,
  },
  ACHIEVEMENTS_AND_CERTIFICATIONS: {
    active: <PiMedalFill />,
    inactive: <PiMedalLight />,
  },
};

const CONTACTS_ICONS = [
  {
    social: "Facebook",
    icon: <AiOutlineFacebook/>,
    username: "@yanezakai",
    link: "https://www.facebook.com/yanezakai"
  },
  {
    social: "Instagram",
    icon: <AiOutlineInstagram/>,
    username: "@theskyler08",
    link: "https://www.instagram.com/theskyler08/"
  },
  {
    social: "Viber",
    icon: <FaViber/>,
    username: "09944344112",
    link: undefined
  },
  {
    social: "LinkedIn",
    icon: <AiOutlineLinkedin/>,
    username: "yaneza-kai",
    link: "https://www.linkedin.com/in/kai-yaneza/"
  },
  {
    social: "Github",
    icon: <AiOutlineGithub/>,
    username: "UgetsuMurata",
    link: "https://github.com/UgetsuMurata"
  },
  {
    social: "GMail",
    icon: <BiLogoGmail/>,
    username: "yanezakai@gmail.com",
    link: "mailto:yanezakai@gmail.com"
  },
]

export { NAVIGATION_ICONS, EXPERIENCES_ICONS, CONTACTS_ICONS };
