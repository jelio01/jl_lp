import theContent from "./theContent.vue";
import "@testing-library/cypress";
import { mount } from "cypress/vue";

describe("<theContent />", () => {
  beforeEach(() => {
    //render component
    mount(theContent);
  });

  it("Check Content", () => {});
});
