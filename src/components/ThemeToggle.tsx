import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice"; // Adjust the path as needed
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state:any) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {theme === "dark" ? (
        <Sun size={20} className="text-white hover:text-themeGreen dark:hover:text-[#d7a407]" />
      ) : (
        <Moon size={20} className="text-black hover:text-[] dark:hover:text-[#d7a407]" />
      )}
    </button>
  );
}