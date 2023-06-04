describe ('home de www.mercadolibre.com', () => {
    beforeEach ( () => {
     cy.visit ('https://www.mercadolibre.com/')
     })
     it ('should have a title', () =>{
  
        cy.title().should('include', 'Mercado')

     
    })
})