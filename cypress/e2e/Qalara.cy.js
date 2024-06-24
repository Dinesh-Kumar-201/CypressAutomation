
describe("Qalara Test Suite", () => {

    it("test1", () => {

        cy.visit("https://www.qalara.com/")

        let title = "Qalara | Global sourcing & wholesale | Verified wholesale suppliers from India"

        cy.title().should('eq',title)   //Title Assertion

        //Using id(#) as a selector
        cy.get("#search-form_search").type("dining{enter}")

        //Using class(.) as a selector
        cy.get(".qa-font-butler").contains('dining')    //Content Assertion
    })

    //Implicit Assertions uses should, and.
    it("test2 - Implicit Assertion", () => {

        let url = "https://www.qalara.com/"

        cy.visit(url)

        let title = "Qalara | Global sourcing & wholesale | Verified wholesale suppliers from India"

        //Using should seperately
        cy.title().should('include',"Global sourcing & wholesale")
        cy.title().should('contain', "Verified wholesale suppliers from India")

        //Using should as chaining
        cy.url().should('eq',url).should('includes',"qalara")

        //Instead of using should as chain, and can be used
        cy.url().should('eq',url).and('include',"qalara")
        cy.title().should('include',"Global sourcing & wholesale")
        //.and('not.contain',"Verified wholesale suppliers from India")   //adding not to contain checks the negative case
        .and('eq',title)

        //Checking for the element presence & visibility
        cy.get('#search-form_search').should('exist').and('be.visible')

        //Checking the length of an element or no of element present
        cy.get('a[href]').should('have.length.lessThan',20)

        let search = "dining"

        //Typing the value in to the input field
        cy.get('#search-form_search').type(search)

        //Verifying the typed value
        cy.get('#search-form_search').should('have.value',search)
        
    })

    //Explicit Assertions uses expect(BDD), assert(TDD).
    //.only method is used to run only this test, remaining test will be skipped
    it("test3 - Explicit Assertion", () => {

        let url = "https://www.qalara.com/"

        cy.visit(url)

        cy.get("[title='Product']").select("Seller")

        //used get method to locate the element
        //cy.get('.ant-btn > .send-query-button-text').click()

        //used contains method to locate the element based on text content & explicitly using timeout to overcome the default 4sec wait
        cy.contains("SIGN UP AS A BUYER", {timeout:6000}).click()

        let expectedValue = "Sign up as a buyer"

        //To get the value from the element & do assertion
        cy.get('.signup-heading').then( (value) => {

            let actualValue = value.text()    //method to get the value

            //BDD Style Assertion
            expect(actualValue).to.equal(expectedValue)     //positive assertion
            expect(actualValue).to.not.equal(expectedValue)       //negative assertion

            //TDD Style Assertion
            assert.equal(actualValue,expectedValue)     //positive assertion
            //assert.notEqual(actualValue,expectedValue)      //negative assertion

        })
        
    })

})