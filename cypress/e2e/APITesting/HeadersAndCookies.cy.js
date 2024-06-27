
describe('Headers and Cookies', () => {

    let authToken, bookingID;

    before('Token Generation', () => {

        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            headers: { 'Content-Type':'application/json' },
            body: {
                "username" : "admin",
                "password" : "password123"
            }
        }).then( (response) => {
            expect(response.status).eql(200)
            authToken = response.body.token
            cy.log(authToken)
        })
    })

    it('POST Call - Booking Generation', () => {

        cy.fixture('requestBody.json').then( (data) => {
            
            const requestBody = data

            cy.request({
                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                body: requestBody,
                cookies: {'cookieName' : 'myCookie'}
            }).then( (response) => {
                expect(response.status).eql(200)
                bookingID = response.body.bookingid
                cy.log(bookingID)
            })
        })
    })

    it('GET Call - Booking Details', () => {

        cy.fixture('requestBody.json').then( (data) => {
            
            const requestBody = data

            cy.request('GET','https://restful-booker.herokuapp.com/booking/'+bookingID)
            .then( (response) => {
                expect(response.status).eql(200)
                expect(response.body.firstname).eql(requestBody.firstname)
                expect(response.body.lastname).eql(requestBody.lastname)
            })
        })
        
    })





})