//the hooks - before, after, beforeEach, afterEach

//the tags - only, skip
//If any specific test need to be skipped, skip tag can be used. (it.skip())
//If any specific test need to be run, only tag can be used. (it.only())

/*
    The hooks order will be if there is only one test, 
    before
    beforeEach
    it
    afterEach
    after 

    If there are multiple tests, then it will follow
    before

    beforeEach
    it
    afterEach

    beforeEach
    it
    afterEach

    beforeEach
    it
    afterEach

    after

*/

describe("Hooks and Tags Test Suite", () => {

    before( () => {
        cy.log("******* This is Before Block *******")
    })

    after( () => {
        cy.log("******* This is After Block *******")
    })

    beforeEach( () => {
        cy.log("******* This is Before Each Block *******")
    })

    afterEach( () => {
        cy.log("******* This is After Each Block *******")
    })

    it("Test1", () => {
        cy.log("******* This is Test1 *******")
    })
    
    it("Test2", () => {
        cy.log("******* This is Test2 *******")
    })
    
    it("Test3", () => {
        cy.log("******* This is Test3 *******")
    })
    
    it("Test4", () => {
        cy.log("******* This is Test4 *******")
    })
})