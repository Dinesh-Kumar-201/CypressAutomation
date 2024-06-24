
describe("OrangeHRM Test Suite", () => {

  it('test1-positive', () => {

    //To visit/launch the application
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //title() - used to get the title of current page, should - used to validate
    cy.title().should('eq', "OrangeHRM")

    //Below are the possible CSS selectors for locating the element
    //id - using #idValue, class - using .classValue, attribute - using [attributeName = 'attributeValue'],

    //get method used to fetch the element, type emthod used to set values to the element
    cy.get("[name='username']").type("Admin")

    //enter is passed in curly braces along with the type input to perform the click action.
    //It is an alternative way to perform click method
    //cy.get("[name='password']").type("admin123{enter}")

    //By using click method
    cy.get("[name='password']").type("admin123")
    cy.get("button[type='submit']").click()

    cy.title().should('eq', "OrangeHRM")

  })

  it('test2-negative', () => {

    //To visit/launch the application
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //title() - used to get the title of current page, should - used to validate
    cy.title().should('eq', "OrangeHRM")

    //Below are the possible CSS selectors for locating the element
    //id - using #idValue, class - using .classValue, attribute - using [attributeName = 'attributeValue'],

    //get method used to fetch the element, type emthod used to set values to the element
    cy.get("[name='username']").type("Admin")

    //enter is passed in curly braces along with the type input to perform the click action.
    //It is an alternative way to perform click method
    //cy.get("[name='password']").type("admin123{enter}")

    //By using click method
    cy.get("[name='password']").type("admin123")
    cy.get("button[type='submit']").click()

    cy.title().should('eq', "OrangeHRM123")

  })

})