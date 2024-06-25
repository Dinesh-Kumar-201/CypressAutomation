//Screenshot & Video recording will happen automatically in cypress for failed test cases run through CLI only.
// If video not recorded then add - (video:true) in cypress.config.js file
//If screenshot not captured then add - (screenshotOnRunFailure=true) in cypress.config.js file
//If screenshot & videos to take for passing cases then add cy.screenshot() method whereever need & add videoUploadOnPasses:true in cypress.config.js file


describe("Capture Screenshot & Videos", () => {

    it("Capture screenshot and video", () => {

        cy.visit("https://www.flipkart.com/")

        cy.wait(3000).screenshot("HomePage")

        cy.get("img[title='Flipkart']").screenshot("Logo")

        //cy.title().should('eq', 'Amazon')
    })
})