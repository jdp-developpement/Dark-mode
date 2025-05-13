import { Moon, Sun } from "lucide-react";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <>
      <div>
        <button
          onClick={toggleTheme}
          className={`p-3 bg-gray-200 rounded-full shadow transistion-colors duration-300 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-700"
          } `}
        >
          {theme === "light" ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-black" />
          )}
        </button>
      </div>
    </>
  );
}

export default ThemeToggle;
