
describe("Javascript Alerts Test Suite", () => {

    //Javascript Alert: It will have some text and an 'OK' button
    it("Javascript Alert", () => {

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

        //Clicking the alert box
        cy.get("[value='Show alert box']").click()

        let alertMsg = "I am an alert box!"

        //Trigerring the alert event to capture the alert string
        cy.on("window:alert", (alertText) => {

            expect(alertText).to.eql(alertMsg)
        })

        //Alert closing will be handled automatically by cypress

        let alertExplanation = "You triggered and handled the alert dialog"

        cy.get("#alertexplanation").should("have.text", alertExplanation)
    })

    //Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' button
    it("Javascript Confirm Alert", () => {

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

        //Clicking the alert box
        cy.get("[value='Show confirm box']").click()

        let alertMsg = "I am a confirm alert"

        //Trigerring the confirm alert event to capture the alert string
        cy.on("window:confirm", (alertText) => {

            expect(alertText).to.eql(alertMsg)
        })

        //Alert closing will be handled automatically by cypress with default 'OK' button

        
        let confirmexplanation = "You clicked Cancel, confirm returned false."

        //Triggering an event to close the confirm alert by 'CANCEL' button
        cy.on("window:confirm", () => false)

        cy.get("#confirmexplanation").should("have.text", confirmexplanation)
    })

    //Javascript Prompt Alert: It will have some text with a input box or text box for user input along with 'OK' and 'Cancel' button
    it("Javascript Prompt Alert", () => {

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

        let inputText = "Dinesh"

        //This event trigger has to happen before clicking the alert box
        cy.window().then((win) => {
            
            cy.stub(win,'prompt').returns(inputText)
        })

        //Clicking the alert box
        cy.get("[value='Show prompt box']").click()

        let alertMsg = "I prompt you"

        //Trigerring the confirm alert event to capture the alert string
        cy.on("window:confirm", (alertText) => {

            expect(alertText).to.eql(alertMsg)
        })

        //Alert closing will be handled automatically by cypress with default 'OK' button

        
        let promptexplanation = "You clicked OK. 'prompt' returned "+inputText

        cy.get("#promptexplanation").should("have.text", promptexplanation)
    })

    //Authenticated Alert
    it("Authenticated Alert - approach1", () => {

        //Passing username, password credentials as a parameter
        cy.visit("https://testpages.eviltester.com/styled/auth/basic-auth-results.html", 
            {auth: {username:"authorized", password:"password001"}})

        cy.get("#status").should("have.text", "Authenticated")
    })

    //Authenticated Alert
    it.only("Authenticated Alert - approach2", () => {

        //Injecting username, password along with the url
        cy.visit("https://authorized:password001@testpages.eviltester.com/styled/auth/basic-auth-results.html")

        cy.get("#status").should("have.text", "Authenticated")
    })

})