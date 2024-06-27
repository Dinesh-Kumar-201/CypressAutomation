
describe("HTTP Requests", () => {

    it("GET Call", () => {

        cy.request('GET', 'https://restful-booker.herokuapp.com/booking')
        .its('status').should('eql',200)
    })

    it('POST Call', () => {

        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                firstname : "Cypress",
                lastname : "API Automation",
                totalprice : 1204,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Breakfast"
            }
        }).its('status').should('eql',201)
    })

    it.skip('POST Call - Token Generation', () => {

        cy.request({
            method: 'POST',
            url : 'https://restful-booker.herokuapp.com/auth',
            body : {
                username : "admin",
                password : "password123"
            }
        }).then( (response) => {
            let authToken = response.body.token
            cy.log(authToken)
        })
    })

    it('PUT Call', () => {

        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/3593',
            body: {
                firstname : "API",
                lastname : "Automation",
                totalprice : 1104,
                depositpaid : true,
                bookingdates : {
                    checkin : "2022-03-03",
                    checkout : "2022-03-028"
                },
                additionalneeds : "Breakfast"
            }
        }).its('status').should('eql',200)
    })

    it("DELETE Call", () => {

        cy.request('DELETE', 'https://restful-booker.herokuapp.com/booking/3593')
        .its('status').should('eql',200)
    })
})