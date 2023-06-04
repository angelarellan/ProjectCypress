describe ('www.jumbomas.com.ar',()=>{
    beforeEach ( () =>{
        cy.visit ('https://www.jumbomas.com.ar/')
    })

    it ('should have a title', () =>{
  
        cy.title().should('include', 'Jumbo Mas')

     
})
})