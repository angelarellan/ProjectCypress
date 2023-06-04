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








// Cypress.Commands.add('login', () =>{
//   cy.visit('https://the-internet.herokuapp.com')
//     cy.request({
//         method: 'POST',
//         url: '/authenticate',
//         form:true,
//         body:{

//             username: 'tomsmith',
//             password:'SuperSecretPassword',

//         }

// })

// cy.get.Cookie('rack.sesion').should('exist')
// cy.visit('https://the-internet.herokuapp.com/secure')
// cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')

// })




// it('Mismo test de arriba pero con el login como comando personalizado', ()=>{
//   cy.login()
//   cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')



// })




//Comandos para reutilizar y no abrir en otra ventana ojoopo//

// Cypress.Commands.add('visitInSameTab', (url) =>{
//   cy.on('window:before:load', (win) =>{
//    cy.stub(win, 'open').as('windowOpen').callsFake(()=>{
//      cy.visit(url)
//   })

//   })
// })