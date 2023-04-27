import { LoginPage } from "../pages/login-page";

describe('Login functionality test suite', () => {
    const loginPage = new LoginPage();

    before(() => {
        // loginPage.visit();
        cy.login('Admin', 'admin123');
    });

    it('Should be able to login.', () => {
        // loginPage.login('Admin', 'admin123');
        loginPage.visit();

        cy.intercept({
            method: 'GET',
            url: '/web/index.php/api/v2/dashboard/employees/action-summary',
        }).as('employees');
        
        cy.wait('@employees').then((interception) => {
            expect(interception.response?.statusCode).to.be.eq(200);
            expect(interception.response?.headers, 'headers').to.include({
              'content-type': 'application/json',
            });
          });

        cy.get('.oxd-userdropdown-name').should('be.visible');
    });

    it('Should be able see left dashboard', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/');
        
    });


})