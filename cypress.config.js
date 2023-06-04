module.exports = {
  projectId: '1efvoh',
  projectId: "h7not1",
  e2e: {
    setupNodeEvents(on, config) {

      //es decir poner asi:return require('./cypress/ ruta index.js')(on,config)
    
    
    
    
    
    // implement node event listeners here



    
    },


  }}
/// estas 2 linea de abajo se agregó en capitulo34 ES PARA GUARDAR LOGIN EXPERIMENTAL
//Y CUARDAR USUARIOS QUE ES SESION ES DECIR en JquerySesionesCookies5.cy.js linea 92 CY.SESSION('Tom', () =>{ //
  // "experimentalSessionAndOrigin":true,
  // "experimentalSessionSupport":true
// };


const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});

