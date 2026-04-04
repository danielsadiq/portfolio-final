import { IconContext } from "react-icons";

function Icon({ children, onClick, className = "text-xl" }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        transition-colors cursor-pointer rounded-sm p-2 
        hover:bg-gray-100 dark:hover:bg-gray-900 
        duration-500 ${className}
      `}
    >
      <IconContext.Provider value={{ className: "dark:text-white" }}>
        {children}
      </IconContext.Provider>
    </a>
  );
}

export default Icon;