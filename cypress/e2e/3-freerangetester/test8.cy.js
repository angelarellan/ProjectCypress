describe ('home de www.freerangetesters.com', () => {
    beforeEach ( () => {
     cy.visit ('https://www.freerangetesters.com/')
     })
     it ('should have a title', () =>{
  
     cy.title().should('include', 'Aprender Testing')
     cy.get('#comp-l02x1m8d2label').click() 
     cy.get('#comp-l02x1m8d4label').click() 
     cy.get('.YT_9QV').click()
     cy.get('#comp-l02x1m8d2 > .ppRL_Y > .cYOPqd').click()
     cy.contains('Blog').click()
     cy.get('#comp-l02x1m8d4label').click()
    } )
    
    

})