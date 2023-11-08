import { useEffect } from "react";
import { useThemePreference } from "../../utils/useThemePreference";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";
import globe from "./globe.svg";

export const Header = () => {
  const { theme, setTheme } = useThemePreference();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={globe} alt="" />
        <div>
          <h1>Web Sustainability Guidelines</h1>
          <h2>
            An interactive version of{" "}
            <a href="https://w3c.github.io/sustyweb/">WSG 1.0</a>
          </h2>
        </div>
      </div>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle theme={theme} onThemeChange={setTheme} />
      </div>
    </header>
  );
};