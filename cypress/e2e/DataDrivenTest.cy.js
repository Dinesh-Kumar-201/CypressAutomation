
describe("Data Driven Test Suite", () => {

    //Multiple input data will be handled
    it("Data Driven test", () => {

        cy.fixture('orangehrm2.json').then( (data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach( (userData) => {

                //To perform various test case conditions are imposed w.r.t the test data
                if(!userData.username || !userData.password) {

                    if(userData.username) {
                        cy.get("[name='username']").clear().type(userData.username)
                        cy.get("[name='password']").clear()
                    }

                    if(userData.password) {
                        cy.get("[name='username']").clear()
                        cy.get("[name='password']").clear().type(userData.password)
                    }

                    cy.get("button[type='submit']").click()

                    //Validation, if username or password is empty 
                    if(!userData.username || !userData.password) {

                        // cy.get("button[type='submit']").click().wait(2000)
                        
                        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')

                    }

                } else {
                    
                    cy.get("[name='username']").type(userData.username)

                    cy.get("[name='password']").type(userData.password)
            
                    cy.get("button[type='submit']").click()

                    //Validation, if username & password are not empty
                    if(userData.username == 'Admin' && userData.password == 'admin123') {

                        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userData.expected)
    
                        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    
                    } else {
    
                        cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userData.expected)
                    }

                }

                cy.reload()

            });
        })
    })

})