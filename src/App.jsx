import { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  // Récupère le thème en localStorage au chargement
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {theme === "dark" ? "Dark mode" : "Light mode"}
      </h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
