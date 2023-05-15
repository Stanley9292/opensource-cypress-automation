Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
    cy.session([username, password], () => {
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.get('[name="username"]').type(username);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
    })
  })