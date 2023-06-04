/*Tablas estáticas (refrescas page y no cambia nada la tabla) y 
dinámica con el refresh de pag se cambian datos, valores.

ejemplo 1: validar un texto en tabla estática, tr fila y td es la columna
, se busca indagando con el .get*/ 

describe ('Tablas estáticas y dinámicas', function () {
  //******** NO USAR ESTA FORMA MUY LARGA, OTRO METODO****//
//     it('Validamos el texto en una tabla dinámica', function () {
//         //Navegando a la web con tablita, esta pagina no existe//
//      cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')
//      //ubicamos la primera columna//
//      cy.get('#table1 > tbody > tr > td:nth-child(1)').each(($elm, index, $list)=>{
//         //agarramos el texto de cada elemeno en la columna 1//
//         const t = $elm.text();
//         //le ponemos qué estamos buscando que incluya
//         if(t.includes('Ranorex')){
//             //de acá vamos al emelemto que le sigue en el DOM
//             cy.get('#table1 > tbody > tr > td:nth-child(1)').eq(index).next().then(function(p){
//                 //Y tomamos el texto del elemento próximo//
//               const r = p.text()

//               //hacemos una validación de texto soibre este elemento//
//               expect(r).to.contains('Commercial')

//             })

//         }
//     })  ******** NO USAR ESTA FORMA MUY LARGA, OTRO METODO****



//esto es tablas dinámicas, vamos agarrar a facebook y haga click en el checkbox al lado de esa columna) 
//td es columna SI USAR ESTOS METODOS QUE VIENEN, MAS SENCILLO//
it ('Validamos una tabla dinámica', function () {
   cy.visit('https://chercher.tech/practice/dynamic-table')
   cy.contains('td', 'facebook.com')
   .prev()
   .find('input')
   .check()

})



//VALIDAR TABLA ESTÁTICA CODIGO PROLIJO tr es fila, td celda en tabla esta web no anda/

// it.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')
// cy.contains('td', 'Ranorex').next().should('have.text', 'Commercial')

})








