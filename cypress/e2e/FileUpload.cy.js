import 'cypress-file-upload';

describe("File Upload Test Suite", ()=> {

    it("Single File Upload", () => {

        cy.visit("https://practice.expandtesting.com/upload")

        cy.get("#fileInput").attachFile('Test1.docx');

        // cy.wait(3000)

        cy.get("#fileSubmit").click()

        cy.wait(2000)

        cy.get('h1:nth-of-type(1)').should('have.text',  'File Uploaded!')
    })

    it("File Upload - Rename", () => {

        cy.visit("https://practice.expandtesting.com/upload")

        cy.get("#fileInput").attachFile({filePath: 'Test1.docx', fileName: 'myFile.docx'})

        cy.get("#fileSubmit").click()

        cy.get('h1:nth-of-type(1)').should('have.text',  'File Uploaded!')
    })

    it("File Upload - Drag & Drop", () => {

        cy.visit("https://practice.expandtesting.com/upload")

        cy.get("#fileInput").attachFile('Test2.docx', {subjectType: 'drag-n-drop'})

        cy.get("#fileSubmit").click()

        cy.get('h1:nth-of-type(1)').should('have.text',  'File Uploaded!')
    })

    it("Multiple Files Upload", () => {

        cy.visit("https://practice.expandtesting.com/upload")

        cy.get("#fileInput").attachFile(['Test1.docx', 'Test2.docx']);

        cy.get("#fileSubmit").click()

        cy.wait(2000)

        cy.get('h1:nth-of-type(1)').should('have.text',  'File Uploaded!')
    })

    //This method is for reference, it wont run
    it.skip("File Upload - Shadow Dom", () => {

        //If the upload button is in shadow dom, then add the below method (includeShadowDom: true)
        cy.get('selector', {includeShadowDom:true}).attachFile('Test1.docx')

        //Not only upload, if any element is said to be inside shadow dom, we ahve to use (includeShadowDom: true) in get method

    })
})