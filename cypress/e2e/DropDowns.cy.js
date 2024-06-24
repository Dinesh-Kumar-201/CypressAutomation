
describe("Dropdown Test Suite", () => {

    it("Dropdown with Select Tag", () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        let country = "Malaysia"

        cy.get("#zcf_address_country").select(country).should("have.value", country)
    })
    
    it("Dropdown without Select Tag", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        let country = "Malaysia"

        cy.get("#select2-billing_country-container").click()

        cy.get(".select2-search__field").type(country+"{enter}")

        cy.get("#select2-billing_country-container").should("have.text",country)
    })

    it("Auto Suggest Dropdown", () => {

        cy.visit("https://www.wikipedia.org/")

        let city = "Chennai"

        cy.get("#searchInput").type(city)

        cy.get(".suggestion-title").contains("International Airport").click();

        cy.get(".mw-page-title-main").then((value) => {
            
            let title = value.text()

            expect(title).to.equal("Chennai International Airport")
        })
    })

    it.only("Dynamic Suggest Dropdown", () => {

        cy.visit("https://www.google.co.in/")

        let search = "cypress automation tool"

        cy.get("[name='q']").type("cypress automation")

        //Clickong on the suggested text without each method
        //cy.get(".wM6W7d > span").contains("cypress automation tool").click();

        //Clicking on the suggested text with each method
        //each method takes three parameter - element, index, arraylist
        cy.get(".wM6W7d > span").each(($el, index, $list) => {

            // $el is a wrapped jQuery element
            if($el.text() == search) {

                // To perform click action on $el, it has to be wrapped using cy.wrap method 
                cy.wrap($el).click()
            }
        })

        //Validation using should keyword
        cy.get("[name='q']").should("have.value",search)

        //Validation using .then method & expect keyword
        cy.get("[name='q']").then((value) => {

            let text = value.text()

            expect(text).to.eql(search)
        })
    })
})