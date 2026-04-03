import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Icon from "./IconContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <Motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white dark:bg-black dark:text-white p-5 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href='#intro' className='text-4xl font-bold text-inherit'>sadiq.</a>

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <Motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <Motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-0.5 bg-black dark:bg-white flex"
                layout
              ></Motion.span>
            </Motion.li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-x-4 items-center justify-center">
          <ThemeToggle/>
          <Motion.a
            href=""
            className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
            <span className="relative group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
              Resume <TbDownload size={16} />
            </span>
          </Motion.a>
        </div>

        <Motion.button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </Motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-black shadow"
          >
            <button
              className="absolute top-5 right-5 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold">
              {["about", "skills", "projects", "contact"].map((section) => (
                <Motion.li
                  key={section}
                  className="border-b"
                  whileHover={{ scale: 1.1 }}
                >
                  <button onClick={() => scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </Motion.li>
              ))}
              <div className="flex items-center justify-center gap-x-4 mt-4">
                <span>Switch Theme</span>
                <ThemeToggle/>
              </div>
              <Motion.a
                href=""
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
                <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </Motion.a>
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}
