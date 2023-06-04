
/* Usa libreria chai para hacer aserciones de JS y commands, se usa should para validar
Las validaciones implícitas van esta dadas por should como and, should va venir despeus de 
localizar elemento*/ 

describe ('Validaciones implícitas y explícitas', () => {
    beforeEach(() =>{
       cy .visit("https://the-internet.herokuapp.com/")

    })

    it('Validaciones implícitas',() =>{
        cy.contains('Inputs').click()
        cy.get('h3').should('have.text','Inputs')
        cy.get('.example').should('have.class', 'example').and('be.visible').and('be.visible')
        
    })


    it('Validaciones explícitas',() =>{
        cy.contains('Inputs').click()
        expect('Inputs').to.equals('Inputs')

        
    })


/*Funcionesw CallBack es una funcion que se ejecuta
despues que otra se ejecutó, sirve para controlar el orden 
que se ejecuta las acciones
la funciion callback ejemplo es => {con el beforeEach.
  Es delegar eso a otra funcion  sin ejjemplo esto
*/ 






})

