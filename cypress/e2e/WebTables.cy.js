
describe("Dynamic WebTable Test Suite", () => {

    beforeEach("Login", () => {

        cy.visit("https://demo.opencart.com/admin/index.php")

        cy.get("#input-username").clear().type("demo")

        cy.get("#input-password").clear().type("demo")

        cy.get("button[type='submit']").click()

        //After logging in, click on Customers menu
        cy.get("#menu-customer>a").click()

        cy.get("#menu-customer > ul > li:first-child").click()
    })

    it("Check number of rows & columns", () => {

        //To know the length of the column
        cy.get("table[class='table table-bordered table-hover'] > thead > tr > td").should("have.length",7)
        
        //To know the length of the row
        cy.get("table[class='table table-bordered table-hover'] > tbody > tr").should("have.length",10)

    })

    it("Read a data from specific row & column", () => {

        cy.get("table[class='table table-bordered table-hover'] > tbody > tr:nth-child(8) > td:nth-child(3)").contains("ak@gmail.com")
    })

    it("Read all the data from the first page", () => {
      
        cy.get("table[class='table table-bordered table-hover'] > tbody > tr").each(($row, index, $rows) => {

            cy.wrap($row).within(() => {

                cy.get("td").each(($col, index, $cols) => {

                    cy.log($col.text())

                    //Assertion on random data
                    if($col.text() == "ak@gmail.com") {

                        assert.isTrue(true, "Element is equal")
                    }
                })
            })
        })
    })

    it.only("Pagination", () => {

        let totalPages;

        cy.get("[class='col-sm-6 text-end']").then((element) => {

            let myText = element.text()

            totalPages = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1)

            cy.log("Total Pages =======> "+totalPages)

            //For testing taking only 5 pages
            totalPages = 5

            for(let p=1; p<=totalPages; p++) {

                if(totalPages>1) {

                    cy.log("Active Page ========> "+p)

                    cy.get("ul[class='pagination'] > li:nth-child("+p+")").click()

                    cy.wait(1000)

                    cy.get("table[class='table table-bordered table-hover'] > tbody > tr").each( ($row, index, $rows) => {

                        cy.wrap($row).within( () => {

                            cy.get("td:nth-child(3)").then( (e) => {

                                let email = e.text()

                                cy.log(email)
                            })
                        })
                    })

                }
            }
        })
        
    })

})