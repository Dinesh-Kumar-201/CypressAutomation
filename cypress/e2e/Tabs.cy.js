
describe("Tabs Test Suite", () => {

    //Approach1 is by invoking the target attribute
    it("Handle Tabs - Approach1", () => {

        cy.visit("https://www.qalara.com/")

        let title = "Qalara | Global sourcing & wholesale | Verified wholesale suppliers from India"

        //Using id(#) as a selector
        cy.get("#search-form_search").type("dining{enter}")

        cy.wait(4000)

        cy.xpath("(//a[contains(@class,'products-on-listing')])[8]").invoke("removeAttr","target").click()

        cy.get('h1').should('contain','bowl')

        cy.go('back')
    })

    //Approach2 is by using href attribute
    it("Handle Tabs - Approach2", () => {

        cy.visit("https://www.qalara.com/")

        let title = "Qalara | Global sourcing & wholesale | Verified wholesale suppliers from India"

        //Using id(#) as a selector
        cy.get("#search-form_search").type("dining{enter}")

        cy.wait(4000)

        cy.xpath("(//a[contains(@class,'products-on-listing')])[12]").then((el) => {

            let url = el.prop('href')

            cy.visit(url)

            cy.url().should('eql',url)

            cy.wait(4000).screenshot()

            cy.go('back')

            cy.go(-1)
        })
        
    })
})
