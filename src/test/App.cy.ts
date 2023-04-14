import App from "App.vue";
import "@testing-library/cypress";
import { mount } from "cypress/vue";

describe("<App />", () => {
  beforeEach(() => {
    //render component
    mount(App);
  });

  it("Check App", () => {});
});
