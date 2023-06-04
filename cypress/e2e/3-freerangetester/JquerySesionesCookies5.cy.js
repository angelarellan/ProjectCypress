//Esta es otra clase de cómo usar
//JQuery es sincrona y get es asincrona cypress funciona con eso, jquery es una libreria de JS, viajar atraves del DOM
//con el get cypress usa el jquery.. Jquery con cypress usar:
//Usar Jquery no es tan necesario, basta con el GET, jquery funciona por detras
//



// describe ('JQuery y Cypress', function () {
//     $.each([1,2.3]. (arrayIndex, arrayValue) ={
//     expect(arrayValue).to.eq(arrayValue)
//   })

// })



// describe ("Sesiones y Cookies", () =>{

// it('Sin sesión guardada', () => {
//     cy .visit("https://the-internet.herokuapp.com/login")
//     cy.get('#username').type("tomsmith")
//     cy.get('#password').type("SuperSecretPassword!")
//     cy.get('form').contains('Login').click()
//     cy.url().should('contain', '/secure')

// })




//guardando las cookkies, cacheando, guardar login, sirve para acelerar login y guardar usuarios//
//validar cookies, etc etc cy.getCookies()
// it('Con sesión guardada y traer todas las Cookies', () => {
//     cy.session('Tom', () =>{
//     cy.visit("https://the-internet.herokuapp.com/login")
//     cy.get('#username').type("tomsmith")
//     cy.get('#password').type("SuperSecretPassword!")
//     cy.get('form').contains('Login').click()
//     cy.url().should('contain', '/secure')
//     cy.getCookies().should('have.length',5).then((cookies)=>{
//         expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')

//    })
//   })



//   it('Ejemplo get cookies', () => {
//     cy.session('Tom', () =>{
//     cy.visit("https://the-internet.herokuapp.com/login")
//     cy.get('#username').type("tomsmith")
//     cy.get('#password').type("SuperSecretPassword!")
//     cy.get('form').contains('Login').click()
//     cy.url().should('contain', '/secure')
//     cy.getCookie('optimizelyPendingLogEvents').should('exist')
//     ///ó que no es nula//
//     cy.getCookie('optimizelyPendingLogEvents').should('not.be.null')
// })

//   })







// it('Ejemplo de limpiar cookies getCookies', () => {
//         cy.session('Tom', () => {
//         cy.visit("https://the-internet.herokuapp.com/login")
//         cy.get('#username').type("tomsmith")
//         cy.get('#password').type("SuperSecretPassword!")
//         cy.get('form').contains('Login').click()
//         cy.url().should('contain', '/secure')
//         cy.getCookies().should('have.length',5).then((cookies)=>{
//             expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
    
//        })
//       })

//       cy.clearCookies()
//       //esta de abajo va buscar las 5 cooklies pero las borró arriba, estp´OK EN EL RUNNER Q FALLE//
//       cy.getCookies().should('have.length',5)
// })




//MANIPULAR EL SISTEMA, TESTEAR LO Q HAYA Q TESTEAR SIN PREOCUPARSE POR COOKIES/
it('SETEAR Cookies', () => {
    cy.session('Tom', () => {
    cy.visit("https://the-internet.herokuapp.com/login")
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    cy.getCookie('CookieLoca').should('not.exist')
    //nombre se llama Cookieloca loca y valor Oreo/
    cy.setCookie('CookieLoca','Oreo')
    cy.getCookie('CookieLoca').should('have.property','value','Oreo')

    })

})


/* otra class, cómo setear el no proxys, ES PARA PODER LLEGAR AL AMBIENTE DE PRUEBA
NORMALMENTE TE DAS CUENTA CUANDO ABRES EL TEST RUNNER, CYPRESS OPEN BANNER AMARILLO DICE"NO 
PUDIMOS LLEGAR AL DOMINIO" POR PROXYS, HAY QUE SETEARLO
sirve cuando la empresa está detras de un proxys, hay que habilitarlo, 
y decirle que ese proxy no sea vigente para la app bajo prueba bajo el dominio
, setear la variable de ambiente es lo mejor y hacer:
en EL archivo package.json ESCRIBIR ESTO:

"env";{
   "NO_PROXY": "localhost,pepito.com"

},


ó en la terminal set NO_PROXY: "localhost,pepito.com"   Y SE LE PASA EL DOMINIO ESE
*/

