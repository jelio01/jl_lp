import theHeader from "./theHeader.vue";
import "@testing-library/cypress";
import { mount } from "cypress/vue";

describe("<theHeader />", () => {
  beforeEach(() => {
    //render component
    mount(theHeader);
  });

  //Selector Constants
  const logoSelector: string = "#jl_logo";

  it("Logo IMG exist", () => {
    cy.get(logoSelector).should("be.visible");
  });
});
