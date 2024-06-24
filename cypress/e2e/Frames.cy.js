
describe("iFrames Test Site", () => {

    it("iframes using cypress-iframe plugin", ()=> {

        cy.visit("https://testpages.eviltester.com/styled/iframes-test.html")

        cy.frameLoaded("#theheaderhtml")

        cy.iframe().contains("Index").click

    })

})