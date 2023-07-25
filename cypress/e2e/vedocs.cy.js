  /// <reference types="Cypress" />
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('passes', () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://qa-vedocs.vm.touchtec.com.br/login')
    cy.get('.btn.btn-primary').contains('Médico').click()
    cy.get('.btn.btn-primary').contains('Continuar').click()
    cy.get('#formBasicEmail').type('admin')
    cy.get('#formBasicPassword').type('teste100')
    cy.get('#formCheckTermoResponsabilidade').click()
    cy.get('.centerByMargins.btn-submit-text').contains('Continuar').click() 
    cy.get('#inputCaixaBusca').type('Arthur Brown').click()
    cy.contains('Arthur Brown').click()
    cy.get('.document-31463').first().click()
  })


  it('passes', () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://qa-vedocs.vm.touchtec.com.br/login')
    cy.get('.btn.btn-primary').contains('Médico').click()
    cy.get('.btn.btn-primary').contains('Continuar').click()
    cy.get('#formBasicEmail').type('admin')
    cy.get('#formBasicPassword').type('teste100')
    cy.get('#formCheckTermoResponsabilidade').click()
    cy.get('.centerByMargins.btn-submit-text').contains('Continuar').click() 
    cy.get('#inputCaixaBusca').type('Arthur Brown').click()
    cy.contains('Arthur Brown').click()
    cy.get('.document-31462').first().click()
  })