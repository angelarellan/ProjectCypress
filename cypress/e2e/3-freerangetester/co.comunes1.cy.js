describe ("pruebas sobre UI", ()=>{
    beforeEach(() =>{
       cy .visit("https://the-internet.herokuapp.com/")

    })

    /*cypress no se lleva bien con nuevas pestañas, validar cosas , por políticas de empresa, dan herramientas para ver eso como removeattributo, manejar tag, target*/
    it('Nueva pestaña', () =>{
      cy.contains("Multiple Windows").click()
      cy.contains('Click Here').invoke('removeAttr','target').click()
      cy.contains('New Window').should('have.text', 'New Window')

    })


/*ShAdow DOM esto es para aislar componentes dentro de la aplicacion y cuando se trate de ubicar no se puede con get */
/*ejemplo
it('Shadow DOM', () => {
    cy.contains('Shadow DOM').click()
    cy.get('#content > :nth-child(3)').shadow().should('have.text','In a list!')
})*/



/*Pagina con contenido dinamico, no se puede ubicar con id,
 me valida todos los elementos visibles, valida todo,
SI se quiere validar un elemento primero o ultimo se pone en la línea asi con first o last (ultimo):
  cy.get('img').first().should('be.visible')
  Si es para uma imagen intermedia se coloca asi 
  con eq y la posicion partido de cero: cy.get('img').eq(2).should('be.visible')
*/
it('Primer y ultimo elemento', () =>{
    cy.contains('Dynamic Content').click()
    cy.get('img').last().should('be.visible')

})


/* otra técnica es padres e hijos
it('Padres e hijos', () =>{
    cy.contains('Dynamic Content').click()
    cy.get(':nth-child(4) > .large.2 > img').parent()
    cy.get('.example > :nth-child(7)').children()
})
*/

})

/* El invoke va invocar funciones para que se ejecuten sobre los elementos
, se puede hacer que un elemento que esté escondido se muestre.
El invoke se usa para animacion, el caso q mas se hace, se deja en el estado q se
necesita la app para testear, remover el atributo para q no navegue otra pestaña,
o mostrar algo que no está visible para validarlo por equis motivo. modificar 
el estado de la pag.

it ('Invoke', () => {
    cy.contains('Dynamic Content')
    .should('be.hidden')
    .invoke('show')
    .should('be.visible')
}) */

