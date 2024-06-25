
import Login from "../PageObjects/LoginPage2"

describe("Login Operation using POM", () => {

    it("Login Approach1 without POM", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("[name='username']").type("Admin")

        cy.get("[name='password']").type("admin123")

        cy.get("button[type='submit']").click()

    })
    
    it("Login Approach2 with POM", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln = new Login()

        ln.setUserName("Admin")

        ln.setPassword("admin123")

        ln.clickSubmit()

    })

    it.only("Login Approach3 with POM using fixtures", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln = new Login()

        cy.fixture('orangehrm.json').then( (data) => {

            ln.setUserName(data.username)

            ln.setPassword(data.password)

            ln.clickSubmit()

        })

    })
})