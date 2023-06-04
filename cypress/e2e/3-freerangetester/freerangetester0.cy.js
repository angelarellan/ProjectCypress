

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
    } ) 
  
    it ('hay ocho cursos con el boton ver mas',() =>{
      cy.get('#comp-l02x1m8d2label').click()
      cy.get('[data-testid="linkElement"] > .M3I7Z2').should('have.length',12)
    })
  


  
      //para validar una clase//
  
    /*it('el campo nombre del formulario posee clase body > div.consent-banner-root.MNUFxS.gWuMIp.jUcJ2u',() =>{
        cy.get('#input_comp-l1ed927d').should('have class','body > div.consent-banner-root.MNUFxS.gWuMIp.jUcJ2u')
    })*/
    
  
      ///vereficar que un elemento tiene un texto dado o un valor dado//
  
      it('hay un link llamado blog en la barra de navegación',()=>{
        cy.get('#comp-l02x1m8d1label').should('have.text','Blog')
  
  
      })
    ///verificar que algo se vea o esté en pantalla//
     it('existe un botón de Empeza Aprender en el home', ()=>{
       cy.wait(4000)
       cy.get(' #comp-krjarw4p > a').should('be.visible')
      })
  
      ///verificar que un elemento no sea visible ejemplo++
      /*it('existe un botón de Empeza Aprender en el home', ()=>{
        cy.wait(4000)
        cy.get(' #comp-krjarw4p > a').should('not.be.visible')
       })*/
  
  
        ///verificar que el elemento existe, no importa si es visible o no//
      it('existe un botón de Empeza Aprender en el home', ()=>{
          cy.wait(4000)
          cy.get(' #comp-krjarw4p > a').should('exist')
         })

         

        })
      
       /*/si el elemento está chequeado//or no checheado es 'not.be.checked'
      it ('El elemento está checked', ()=>{
        cy.wait(3000)
        cy.get('******le pasas el cy.get'********).should('be.checked') 
      })*/


      /*el elemento está desactivado
      it ('El elemento está disabled', ()=>{
        cy.wait(3000)
        cy.get('******le pasas el cy.get'********).should('be.disabled') 
      })*/

  /*ejemplo de As alias para renombrar el locator que es largo y renombrar y le pones el nombre q quieras//
    it('existe un botón de empezar a Aprender en el home',()=>{
    cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').as('Empezá a Aprender!')
    cy.get('Empezá a Aprender!').should('exist')/*
    })*/
    

    /*Comando .find sirve para ubicar web element, es eficiente, ubica elements están muy
    metidos dentro del done
    ejemplo:
    it ('el elemento está checked', () => {
      cy.get('').should('be.checked')
      cy.get('#form').find('[type=checkedbox"]').should('be.checked')*/

/*
*/
