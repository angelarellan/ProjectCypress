describe ("pruebas sobre UI", () => {
    beforeEach(() =>{
       cy .visit("https://the-internet.herokuapp.com/")

    })



    /*it("Ejemplo de click", () => {
        cy.contains("Add/Remove Elements").click()
        cy.get('button').click()
        cy.contains('Delete').click()

    })*/




    /*El Type se usa  para escribir en campos de textos ojoo , ejemplo se usa
    en conjuncion con click */

/*it("Ejemplo de escritura", () => {
    cy.contains("Form Authentication").click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
})*/



/*Comandos para checkbox se le agrega el .check y par deschequear tambien .uncheck*/
/*it("Ejemplos de checkboxes",() =>{
 cy.contains("Checkboxes").click()
 cy.get('#checkboxes > :nth-child(1)').check()
 cy.get('#checkboxes > :nth-child(3)').uncheck()

})*/




/*otra opcion es elegir de un dropDown list*/
// it("Elegir de un dropdown", () => {
// cy.contains("Dropdown").click()
// cy.get('#dropdown').select("Option 2")

// })


/*tambien al select se le puede pasar asi, la posicion: 
select (1) ó select(2) ó el nombre de la opción, cualquiera sirve*/ 



/*otro ejemplo de borrar campos con CLEAR con .clear, es decir despues que se escribió
normalmente esto no se usa, a menos que la aplicacion venga por
defecto con el campo lleno, ejemplo  por las dudas, eso no es comun*/

// it("Ejemplo de escritura", () => {
//     cy.contains("Form Authentication").click()
//     cy.get('#username').type("tomsmith")
//     cy.get('#password').type("SuperSecretPassword!")
//     cy.get('#password').clear()
//     cy.get('.fa').click()


// })




/* no comando ojo, Hovers, pasar el mouse por algo, muestran elementos ocultos,
cypress nos permite modificar o forzar el click element oculto, con force:true, es forzar el click
no importa q esté oculto. Es decir esto es para hacer click en elemento oculto
. Para validar que este visible el elemento oculto, hay que invocar con:

.invoke("show").should Es decir: cy.get("#content > div > div:nth-child(4) > div > a").invoke("show").should('not.be.visible')  */

// it ("Hover sobre elemento", () => {
//    cy.contains("Hovers").click()
//    cy.get("#content > div > div:nth-child(4) > div > a").click({force: true})

// })


/**Ejemplo click derecho de un popup, cypress no maneja alertas, hace click
 * pero no lo muestra está OK, pero lo muestra en la ejecucion a la izquierda
 * Despues validamos la alerta, trigger gatillar y validar mensaje de popup
 * este es opcional : cy.get('#hot-spot').invoke("trigger","contextmenu")
 * ó el ultimo expect.../ */
it("click derecho", () =>{
    cy.contains("Context Menu").click()
    cy.get('#hot-spot').rightclick()
    cy.get('#hot-spot').invoke("trigger","contextmenu")
    cy.on("window:alert", (alert)=>{
         expect(alert).to.equal("You selected a context menu") 
    })
})








})










