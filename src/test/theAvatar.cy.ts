import theAvatar from "./theAvatar.vue";
import "@testing-library/cypress";
import { mount } from "cypress/vue";

describe("<theAvatar />", () => {
  beforeEach(() => {
    //render component
    mount(theAvatar);
  });

  it("Check Avatar", () => {});
});
