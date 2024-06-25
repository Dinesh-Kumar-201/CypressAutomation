
describe("Fixtures Test Suite", () => {

    //Accessing the data directly from fixtures file
    it.skip("Accessing data from fixtures file", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then( (data) => {

            cy.get("[name='username']").type(data.username)

            cy.get("[name='password']").type(data.password)
            
            cy.get("button[type='submit']").click()

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected)
        })

    })

    //Accessing the data through hooks for multiple it blocks
    let userData;

    before( () => {

        cy.fixture('orangehrm.json').then( (data) => {

            userData = data
        })
    })

    it("Accessing the data through hooks", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("[name='username']").type(userData.username)

        cy.get("[name='password']").type(userData.password)
            
        cy.get("button[type='submit']").click()

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userData.expected)

    })

})