
describe('API Chaining', () => {

    it("GET PING Call", () => {

        cy.request('GET','https://restful-booker.herokuapp.com/ping')
        .then( (response) => {
            
            let statusCode = response.status

            if(statusCode==200 || statusCode==201) {
                
                //chaining POST request
                cy.fixture('requestBody.json').then( (data) => {
                    
                    let requestBody = data

                    cy.request({
                        method: 'POST',
                        url: 'https://restful-booker.herokuapp.com/booking',
                        body: requestBody
                    }).then( (response) => {

                        expect(response.status).eql(200)

                        expect(response.body.booking.firstname).eql(requestBody.firstname)

                        expect(response.body.booking.lastname).eql(requestBody.lastname)

                        let bookingID = response.body.bookingid

                        //chaining GET request
                        cy.request('GET',`https://restful-booker.herokuapp.com/booking/${bookingID}`)
                        .then( (response) => {

                            expect(response.status).eql(200)

                            expect(response.body.firstname).eql(requestBody.firstname)

                            expect(response.body.lastname).eql(requestBody.lastname)

                            //chaining POST request - token generation
                            cy.request({
                                method: 'POST',
                                url: 'https://restful-booker.herokuapp.com/auth',
                                body: {
                                    username : "admin",
                                    password : "password123"
                                }
                            }).then( (response) => {

                                let authToken = response.body.token

                                //chaining PUT request
                                let requestBody = {
                                    firstname : "Rohit",
                                    lastname : "Sharma",
                                    totalprice : 111,
                                    depositpaid : true,
                                    bookingdates : {
                                        checkin : "2018-01-01",
                                        checkout : "2019-01-01"
                                    },
                                    additionalneeds : "Breakfast"
                                }

                                cy.request({
                                    method: 'PUT',
                                    url: `https://restful-booker.herokuapp.com/booking/${bookingID}`,
                                    headers: {'Cookie' : `token=${authToken}`},
                                    body: requestBody
                                }).then( (response) => {

                                    expect(response.status).eql(200)

                                    expect(response.body.firstname).eql(requestBody.firstname)

                                    expect(response.body.lastname).eql(requestBody.lastname)

                                    //chaining DELETE request
                                    cy.request({
                                        method: 'DELETE',
                                        url: `https://restful-booker.herokuapp.com/booking/${bookingID}`,
                                        headers: {'Cookie' : `token=${authToken}`}
                                    }).then( (response) => {
    
                                        expect(response.status).eql(201)
    
                                    })
                                })
                            })
                        })
                    })
                })
                
            }
        })
    })
})