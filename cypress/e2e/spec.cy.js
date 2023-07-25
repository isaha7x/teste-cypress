  /// <reference types="Cypress" />
  it('passes', () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button').click()
    cy.get('.flash.success').should('be.visible')
  })

  it('passes', () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPasswor!')
    cy.get('button').click()
    cy.get('.flash.error').should('be.visible')
  })