//interactuar con endpoints y respuestas request, setear, enviar respuestas etc//

//Método requestm, validar el estatus code, 200, 400, 500//

describe('Pruebas en Api con cypress', ()=>{


    // it('El endpoint "post" responde con status 200', ()=>{
    //     cy.visit('https://jsonplaceholder.typicode.com')
    //     cy.request('/posts')
    // })



//validar que la respuesta sea 200 y obtener//
// it ('El endpoint "post" responde con status 200', ()=>{
//     cy.request({

//     url:'https://jsonplaceholder.typicode.com/posts'}).then((respuesta)=>{expect(respuesta.status).to.eq(200)

//     })

// })

// //validar cantidad de Post que hay dentro de este endpoint//
// it('El endpoint "posts" tiene 100 entradas', () =>{
//    cy.visit('https://jsonplaceholder.typicode.com')
//    cy.request('/posts')
//    .its('body')
//    .should('have.length',100)

// })

// it('El post número 1, tiene por titulo "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"',()=>{
//     cy.visit('https://jsonplaceholder.typicode.com')
//     cy.request('/posts/1')
//     .its('body')
//     .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit') 


// })



//probar endpoint para el post//

// it('El Post request funciona corrctamente para el endpoint', ()=>{
//     cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
//     userId:1,
//     id:101,
//     title:'Relatos Salvajes',
//     body: 'Una película argentina'

//     }).then((respuesta)=>{
//         expect(respuesta.body).to.have.property('title','Relatos Salvajes')

// })

// })

/////metodo put///

// it('El PUT request funciona corrctamente para el endpoint', ()=>{
//     cy.request('PUT','https://jsonplaceholder.typicode.com/posts',{
  
//     title:'Relatos Salvajes',
//     body: 'Una película argentina'

//     }).then((respuesta)=>{
//         expect(respuesta.body).to.have.property('title','Relatos Salvajes')

// })

// })



/borrar un post, comentarios etc con DELETE, DEJAR EL ENDPOINT EN EL ESTADO DONDE ESTAABA//

it('El DELETE request funciona corrctamente para el endpoint', ()=>{
cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')

}) 
})
