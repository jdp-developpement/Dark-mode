import { Moon, Sun } from "lucide-react";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <>
      <div>
        {theme === "light" ? (
          <button
            onClick={toggleTheme}
            className="p-3 bg-gray-200 rounded-full shadow transistion-colors duration-300"
          >
            <Sun className="text-yellow-400" />
          </button>
        ) : (
          <button
            onClick={toggleTheme}
            className="p-3 bg-gray-700 rounded-full shadow transistion-colors duration-300"
          >
            <Moon className="text-black" />
          </button>
        )}
      </div>
    </>
  );
}

export default ThemeToggle;
