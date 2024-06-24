
describe("Radio Button and Check Boxes Test Suite", () => {

    it("test1 - Radio Button", () => {

        cy.visit("https://practice.expandtesting.com/radio-buttons")

        cy.get('#black').check().should("be.checked")

        cy.get('#football').check().should("be.checked")

    })

    it("test1 - Check Boxes", () => {

        cy.visit("https://practice.expandtesting.com/checkboxes")

        //Checking box1
        cy.get('#checkbox1').check().should("be.checked")

        //Unchecking box2
        cy.get('#checkbox2').uncheck().should("not.be.checked")

        //Checking box2
        cy.get('#checkbox2').check().should("be.checked")

        //Unhecking box1
        cy.get('#checkbox1').uncheck().should("not.be.checked")

        //Checking all the boxes
        cy.get('[type=checkbox]').check().should("be.checked")

        //Unchecking all the boxes
        cy.get('[type=checkbox]').uncheck().should("not.be.checked")

        //Checking first box
        cy.get('[type=checkbox]').first().check().should("be.checked")

        //Checking last box
        cy.get('[type=checkbox]').last().check().should("be.checked")

        //Unchecking last box
        cy.get('[type=checkbox]').first().uncheck().should("not.be.checked")

        //Unchecking first box
        cy.get('[type=checkbox]').last().uncheck().should("not.be.checked")

    })
})