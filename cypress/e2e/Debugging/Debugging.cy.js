describe ('utilidades para debugging con cypress', ()=>{


    /*it('cy.log', () =>{

      cy.visit('https://the-internet.herokuapp.com/login')  
      cy.log('escribe el username')
      cy.get('#username').type('tomsmith')
      cy.log('escribe el password')
      cy.get('#password').type('SuperSecretPassword!')
      cy.log('Hace Click EN EL BOTON DE LOGIN')
      cy.get('form').contains('Login').click()
      cy.url().should('contain','/secure')*/


    


    ///comando pausa paraa ver lo que pasa y hacer pausas//
    /*it ('Ejemplo de cy.pause',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith').pause()
        cy.get('#password').pause().type('SuperSecretPassword!')
        cy.get('form').contains('Login').click().pause()
        cy.url().should('contain', '/secure')

    })*/


    ///ejemplo hacer debug se hace pausa y vemos qué pasa en ese comando, pausa es para fijarse nomás qué pasa //
    it ('Ejmplo de cy.debug',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.wait(10000)
    cy.get('#username').type('tomsmith')
    cy.get('#password').debug().type('SuperSecretPassword!')
    cy.get('form').contains('Login').click().pause()
    cy.url().should('contain', '/secure')
    })

    //diferencia entre debug y pausa, es que pausa hay que darle next//
    // deja en pausa las ejecuciones, no te va dar ninguna info en consola no va hacer nada extra.
    // EL DeBug, no te va poner las cosas en pausa, salvo que habras las de deptools del navegador
    // y va brindar info en consola de qué pasa detrás de escena exactamente,no te va dar nada extra
})
