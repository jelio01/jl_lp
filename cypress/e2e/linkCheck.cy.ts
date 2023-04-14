import {} from "cypress";
import sourceData from "../../src/data/data.json";

type SourceDataBasicObject = { id: number; name: string; url: string };

describe("External Link Test", () => {
  it("Check HTTP 200 Codes", () => {
    const interestLinks: Array<SourceDataBasicObject> =
      sourceData.developer.interests;

    for (let ili = 0; ili < interestLinks.length; ili++) {
      linkCall(interestLinks[ili].url);
    }

    /////////////////////////////////////////////////////////////////////////

    const knowledgeLinks: Array<SourceDataBasicObject> =
      sourceData.developer.knowledge;

    for (let kli = 0; kli < knowledgeLinks.length; kli++) {
      linkCall(knowledgeLinks[kli].url);
    }

    /////////////////////////////////////////////////////////////////////////
    const basicsLinks: Array<SourceDataBasicObject> =
      sourceData.developer.basics;

    for (let bli = 0; bli < basicsLinks.length; bli++) {
      linkCall(basicsLinks[bli].url);
    }

    /////////////////////////////////////////////////////////////////////////
    const branchesLinks: Array<SourceDataBasicObject> = sourceData.branches;

    for (let bi = 0; bi < branchesLinks.length; bi++) {
      linkCall(branchesLinks[bi].url);
    }

    /////////////////////////////////////////////////////////////////////////
    const api1Links: Array<string> = [
      sourceData.apis[0].url1,
      sourceData.apis[0].url2,
    ];

    for (let ali = 0; ali < api1Links.length; ali++) {
      linkCall(api1Links[ali]);
    }

    /////////////////////////////////////////////////////////////////////////
    const api2Links: Array<string> = [sourceData.apis[1].url1];

    linkCall(api2Links[0]);

    /////////////////////////////////////////////////////////////////////////
    const tippsLinksArray: Array<{ id: number; desc: string; url: string }> =
      sourceData.tipps;

    for (let tai = 0; tai < tippsLinksArray.length; tai++) {
      linkCall(tippsLinksArray[tai].url);
    }

    /////////////////////////////////////////////////////////////////////////
    const impressumLinks: Array<{ id: number; url: string }> =
      sourceData.impressumSources;

    for (let imi = 0; imi < impressumLinks.length; imi++) {
      linkCall(impressumLinks[imi].url);
    }

    /////////////////////////////////////////////////////////////////////////
    const impressumHints: Array<{ id: number; linkText: string; url: string }> =
      sourceData.impressumHints;

    for (let ihi = 0; ihi < impressumHints.length; ihi++) {
      linkCall(impressumHints[ihi].url);
    }
  });
});

const linkCall = (url: string) => {
  cy.request("GET", url).then((response) => {
    expect(response.status).to.eq(200);
  });
};
