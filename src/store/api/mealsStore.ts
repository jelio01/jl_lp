import { defineStore } from "pinia";

export const useMealsStore = defineStore("meals", {
  state: () => ({
    url: "",
    title: "",
    badgeTW: "",
    linkTW: "",
  }),
  getters: {
    getUrl: (state) => state.url,
    getTitle: (state) => state.title,
    getBadge: (state) => state.badgeTW,
    getLink: (state) => state.linkTW,
  },
  actions: {
    setTheme(url: string, title: string, badgeTW: string, linkTW: string) {
      this.url = url;
      this.title = title;
      this.badgeTW = badgeTW;
      this.linkTW = linkTW;
    },
  },
});
