
describe('Query Parameter Testing', () => {

    const queryParam = {firstname:'John', lastnmae:'Smith'}

    it('Passing Query Parameter', () => {

        cy.request({

            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
            qs: queryParam

        }).then( (response) => {
            expect(response.status).eql(200)
        })
    })
})