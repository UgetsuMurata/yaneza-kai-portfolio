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

export { NAVIGATION_ICONS, EXPERIENCES_ICONS };
