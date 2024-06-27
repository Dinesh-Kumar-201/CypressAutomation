
describe('Multiple Approaches of POST Call', () => {

    it('Approach1 - Hard Coded json object', () => {

        const requestBody = {
            firstname : "Cypress",
            lastname : "Testing",
            totalprice : 1331,
            depositpaid : true,
            bookingdates : {
                checkin : "2023-06-08",
                checkout : "2023-06-12"
            },
            additionalneeds : "Breakfast"
        }

        cy.request({

            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: requestBody

        }).then( (response) => {

            expect(response.status).to.eq(200)
            expect(response.body.booking.firstname).to.eq("Cypress")
            expect(response.body.booking.lastname).to.eq("Testing")
            expect(response.body.booking.totalprice).to.eq(1331)
            cy.log(response.body.bookingid)
        })
    })

    it('Approach2 - Dynamically generating json object', () => {

        const requestBody = {
            firstname : Math.random().toString(5).substring(2),
            lastname : Math.random().toString(5).substring(2),
            totalprice : 1331,
            depositpaid : true,
            bookingdates : {
                checkin : "2023-06-08",
                checkout : "2023-06-12"
            },
            additionalneeds : "Breakfast"
        }

        cy.request({

            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: requestBody

        }).then( (response) => {
            cy.log(requestBody.firstname+' & '+requestBody.lastname)
            expect(response.status).to.eq(200)
            expect(response.body.booking.firstname).to.eq(requestBody.firstname)
            expect(response.body.booking.lastname).to.eq(requestBody.lastname)
            expect(response.body.booking.totalprice).to.eq(1331)
            cy.log(response.body.bookingid)
        })
    })

    it.only('Approach3 - using Fixtures', () => {

        cy.fixture('requestBody.json').then( (data) => {

            const requestBody = data

            cy.request({

                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                body: requestBody
    
            }).then( (response) => {
                cy.log(requestBody.firstname+' & '+requestBody.lastname)
                expect(response.status).to.eq(200)
                expect(response.body.booking.firstname).to.eq(requestBody.firstname)
                expect(response.body.booking.lastname).to.eq(requestBody.lastname)
                expect(response.body.booking.totalprice).to.eq(1331)
                cy.log(response.body.bookingid)
                //To validate the property of the response
                expect(response.body).has.property('bookingid')
                expect(response.body.booking).has.property('bookingdates')
                expect(response.body.booking).has.property('totalprice',1331) //or below method
                expect(response.body.booking).to.have.property('lastname',requestBody.lastname)
            })
        })

    })
})