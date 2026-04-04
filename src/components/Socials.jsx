import { motion as Motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { useTheme } from "../hooks/ThemeContext";

function Socials() {
  const { theme } = useTheme();
  const baseBg = theme === "light" ? "#fff" : "#000";
  const baseText = theme === "light" ? "#000" : "#fff";
  const hoverBg = theme === "light" ? "#000" : "#fff";
  const hoverText = theme === "light" ? "#fff" : "#000";
  return (
    <>
      {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map(
        (Icon, index) => (
          <Motion.a
            animate={{
              backgroundColor: baseBg,
              color: baseText,
            }}
            transition={{
              duration: 0,
            }}
            key={index}
            href="#"
            className="p-2 lg:p-3 rounded border-2 border-black dark:border-white flex items-center justify-center"
            whileHover={{
              scale: 1.1,
              backgroundColor: hoverBg,
              color: hoverText,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
          </Motion.a>
        ),
      )}
    </>
  );
}

export default Socials;
