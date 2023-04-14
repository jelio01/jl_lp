import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { VueCookieNext } from "vue-cookie-next";
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";
import AppLink from "@/components/multi/appLink.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use((context) => {
  const storeId = context.store.$id;

  const serializer = {
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  };
  //sync store from localStorage
  const item: string = window.localStorage.getItem(storeId) as string;
  const fromStorage = serializer.deserialize(item);

  if (fromStorage) {
    context.store.$patch(fromStorage);
  }

  //listen for changes and update localStorage
  context.store.$subscribe((mutation, state) => {
    window.localStorage.setItem(storeId, serializer.serialize(state));
  });
});

app.use(VueCookieNext);
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.component("appLink", AppLink);
app.provide("axios", app.config.globalProperties.axios);

app.component("vue-cookie-accept-decline", VueCookieAcceptDecline);

app.mount("#app");

VueCookieNext.config({
  expire: "1d",
  path: "/",
  domain: "localhost",
  secure: "HttpOnly",
  sameSite: "Strict",
});

VueCookieNext.setCookie("test", "1");
