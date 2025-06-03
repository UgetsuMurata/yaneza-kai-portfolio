import { MdDescription, MdOutlineDescription } from "react-icons/md";
import { IoHammer, IoHammerOutline } from "react-icons/io5";
import { PiCertificateFill, PiCertificateLight, PiUsersThreeFill, PiUsersThreeLight } from "react-icons/pi";
import { BsLaptop, BsLaptopFill, BsTelephone, BsTelephoneFill } from "react-icons/bs";

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

export { NAVIGATION_ICONS };
