// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

import 'cypress-file-upload';

//creating a new custom command for text click
Cypress.Commands.add('clickText', (text) => {

    cy.get('a').contains(text).click()

})

//Overwriting the contains command --- this is failing, not working
/*Cypress.Commands.overwriteQuery('contains',(originalFn, subject, filter, text, options = {}) => {

    if(typeof text === 'object') {
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false

    return originalFn(subject, filter, text, options)
})*/

//Custom command for login
Cypress.Commands.add('login', (username,password) => {
    
    cy.get('#Email').type(username)

    cy.get('#Password').type(password+'{enter}')
})