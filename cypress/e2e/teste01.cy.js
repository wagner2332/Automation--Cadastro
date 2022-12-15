/// <reference types="Cypress" />


describe('CADASTRO DE USUARIO ', () => {
  beforeEach(function(){
    cy.visit('https://phptravels.org/register.php')
  })
  it('Verificar titulo da pagina', () => {
   
    cy.title().should('be.equal', 'Register - PHPTRAVELS')
    
  })

  it('Dados para cadastro', () => {
    
    //Esperar toda a página carregar
    cy.wait(2000);

    //Apenas começar a digitação quando o elemento estiver visível
    cy.get('#inputFirstName').should('be.visible');

    cy.get('#inputFirstName').type('teste', {delay : 0});
    
    cy.get('#inputLastName').type('auto',{delay : 0});

    cy.get('#inputEmail').type('testeauto@gmail.com', {delay: 0});

    cy.get('.selected-dial-code').trigger('mouseover');
   
    cy.get('#inputPhone').type('12345678',{delay : 0});

    cy.get('#inputCompanyName').type('Test Tech',{delay : 0});

    cy.get('#inputAddress1').type('Marco Zero',{delay : 0});

    cy.get('#inputAddress2').type('Boa Viagem',{delay : 0});

    //Seleciona elementos dentro de um <select> 
    cy.get('#inputCountry').select('Brazil');

    cy.get('#stateselect').select('PE');

    cy.get('#inputCity').type('Recife',{delay : 0});

    cy.get('#inputPostcode').type('8877700',{delay : 0});

    cy.get('#customfield2').type('12345678',{delay : 0});

    //Criação de uma senha forte
    cy.get('#inputNewPassword1').type('testeQ@123456-');

    cy.get('#inputNewPassword2').type('testeQ@123456-');

    //Interage com o elemento bootstrap
    cy.get('.bootstrap-switch-label').click({force : true});

    //Verifica se existe 1 botão
    cy.get('[align="center"] > .btn').should(($p) => {expect($p).to.have.length(1)});

    cy.get('[align="center"] > .btn').click({force : true});
    
    //Valida mensagem de erro no cadastro pois não clicou no recaptch 'não sou um robô' 
    cy.get('.alert-danger > ul > li').should('include.text', 'Please complete the captcha and try again.');


  });
})