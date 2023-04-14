import badge from "./badge.vue";
import "@testing-library/cypress";
import { mount } from "cypress/vue";

describe("<badge />", () => {
  beforeEach(() => {
    //render component
    mount(badge);
  });

  it("Check Badge", () => {});
});
