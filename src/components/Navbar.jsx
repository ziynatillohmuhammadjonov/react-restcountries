import { useState } from "react";

function Navbar() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const [darkMode, setDarkMode] = useState(false);
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setDarkMode(true);
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setDarkMode(false);
  }

  function onThemeSwitcherItemClick(event) {
    const theme = event.target.dataset.theme;

    if (theme === "system") {
      localStorage.removeItem("theme");
      setSystemTheme();
    } else if (theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }

  const themeSwitcherItems = document.querySelectorAll("#theme-switcher");
  themeSwitcherItems.forEach((item) => {
    item.addEventListener("click", onThemeSwitcherItemClick);
  });
  return (
    <div className="light: bg-white shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="px-10 py-6 flex justify-between max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Where in the world?</h2>
        <div>
          {darkMode ? (
            <button className="" onClick={setLightTheme}>
              <div
                className="inline-block w-[24px] text-center"
                data-theme-icon="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block h-6 w-6"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </div>
              <span data-theme-name="light">Light</span>
            </button>
          ) : (
            <button className="" onClick={setDarkTheme}>
              <div
                className="inline-block w-[24px] text-center"
                data-theme-icon="dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span data-theme-name="dark">Dark</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
{
  /* <svg
width="20"
height="20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
fillRule="evenodd"
clipRule="evenodd"
d="M13.55 13.81c-3.88 0-7.03-2.88-7.03-6.44 0-1.34.45-2.59 1.21-3.62C4.7 4.7 2.5 7.33 2.5 10.44c0 3.9 3.45 7.06 7.7 7.06 3.4 0 6.27-2 7.3-4.8a7.46 7.46 0 0 1-3.95 1.12Z"
fill="#fff"
stroke="#111517"
stroke-width="1.25"
></path>
</svg> */
}
