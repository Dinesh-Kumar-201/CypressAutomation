
describe("Mouse Operations Test Suite", () => {

    it("MouseHover", () => {

        cy.viewport(1200,660)

        cy.visit("https://www.flipkart.com/")

        cy.get('[aria-label="Two Wheelers"]').trigger('mouseover')

        cy.contains("Electric Vehicles").should('be.visible')

        cy.contains("Electric Vehicles").click()
    })

    it("Right Click", () => {

        cy.viewport(1200,660)

        cy.visit("https://www.flipkart.com/")

        //Right click with using trigger method
        cy.get('[aria-label="Travel"]').trigger('contextmenu')

        //Right click without using trigger method
        cy.get('[aria-label="Travel"]').rightclick()

    })

    it("Double Click", () => {

        cy.viewport(1200,660)

        cy.visit("https://www.flipkart.com/")

        //Double click with using trigger method
        // cy.get('[aria-label="Mobiles"]').trigger('dblclick')

        //Double click without using trigger method
        cy.get('[aria-label="Mobiles"]').dblclick()

    })

    it("Scroll to the Element", () => {

        cy.viewport(1200,660)

        cy.visit("https://www.flipkart.com/")

        //Scroll to the element with using trigger method
        // cy.get("a[title='Cricket']").trigger('scroll')

        //Right click without using trigger method
        cy.get("a[title='Cricket']").scrollIntoView()

        cy.get("a[title='Cricket']").click()

    })

    it.only("Drag and Drop using plugin", () => {

        // cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")

        // cy.contains("Draggable 3").drag("#mydropzone")

        cy.viewport(1200,660)

        cy.visit("https://www.flipkart.com/")

        cy.xpath("(//div[@class='_25HC_u'])[3]").drag("[name='q']")

    })

})