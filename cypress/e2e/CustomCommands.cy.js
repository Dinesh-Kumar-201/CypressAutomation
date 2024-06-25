
describe("Custom Command Test Suite", () => {

    it("Test using new custom command", () => {

        cy.visit("https://www.flipkart.com/")

        //using custom command
        cy.clickText("Best Truewireless Headphones")
    })

    //this test is failing
    it.skip("Overwriting the contains command", () => {

        cy.visit("https://www.flipkart.com/")

        //using custom command
        cy.clickText("best tRUEwireless Headphones")
    })

    it.only("Custom login comman", () => {

        cy.visit("https://demo.nopcommerce.com/")

        cy.clickText('Log in')

        cy.login("testing@gmail.com", "test123")
    })
})