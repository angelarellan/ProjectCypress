import 'cypress-axe';

// describe('Pruebas de accesibilidad en el sitio freerangetesters', () =>{
//     it('Deberia cumplir con los estándares de accesibilidad', () => {
//     cy.visit('https://www.freerangetesters.com')
//     cy.injectAxe()
//     cy.checkA11y()
//     })
/////esto es para chequear toda la pag web, todos los errores posibles///





///esto para chequear algo especifico de la web, evaluar uno de los elementos
//se le pasa el locator, un link etc//
it('Deberia cumplir con los estándares de accesibilidad', () => {
    cy.visit('https://www.freerangetesters.com')
    cy.injectAxe()
    cy.checkA11y('#comp-l02x1m8d2 > .ppRL_Y > .cYOPqd > div')
    
    })







////para validar uno de los elementos de la web///