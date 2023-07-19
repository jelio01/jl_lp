import { defineStore } from "pinia";

export const useThemeTWStore = defineStore("theme", {
  state: () => ({
    icon: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
    title: "Nacht-Modus wählen",
    theme: "light",
    hTW: "text-center font-bold tracking-tight text-blue-600 antialiased dark:text-blue-200",
    textGrayTW: "text-gray-600 dark:text-slate-200",
    textSkyTW:
      "text-sky-300 dark:text-slate-200 hover:text-sky-200 dark:hover:text-slate-300",
    textColorTW: [
      "text-green-600 dark:text-green-200",
      "text-red-600 dark:text-red-200",
      "text-yellow-600 dark:text-yellow-200",
      "text-blue-600 dark:text-blue-200",
    ],
    badgeTW: [
      "m-2 inline-flex items-center rounded-full px-3 py-1 font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-50 hover:bg-white-300 dark:hover:bg-gray-900 bg-opacity-90",
    ],
    topImg: "8be3355c",
  }),
  getters: {
    getIcon: (state) => state.icon,
    getTitle: (state) => state.title,
    getThemeMode: (state) => state.theme,
    getBadgeTWLength: (state) => state.badgeTW.length,
    getBadgeTW: (state) => (badgeId) => state.badgeTW[badgeId],
    getTextColorTWLength: (state) => state.textColorTW.length,
    getTextColorTW: (state) => (textId) => state.textColorTW[textId],
    getHTW: (state) => state.hTW,
    getTextGrayTW: (state) => state.textGrayTW,
    getTextSkyTW: (state) => state.textSkyTW,
    getTopImg: (state) => state.topImg,
  },
  actions: {
    setTheme(theme: string) {
      if (theme === "dark") {
        this.theme = "dark";
        this.icon =
          "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z";
        this.title = "Tag-Modus wählen";
        this.topImg = "9749e9f2";
      } else {
        this.theme = "light";
        this.icon =
          "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z";
        this.title = "Nacht-Modus wählen";
        this.topImg = "8be3355c";
      }
    },
  },
});
