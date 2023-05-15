import { DashboardPage } from "../pages/dashboard-page";

describe('Dashboard functionality test suite', () => {
    const dashboardPage = new DashboardPage();

    beforeEach(() => {
        cy.login();
        dashboardPage.visitPage();
    });

    it('Should be able see left dashboard', () => {
        cy.get(dashboardPage.selectors.sideMenuPanel).should('be.visible');
    });

    it('Should have dashboard selection in left panel highlighted', () => {
        cy.get(dashboardPage.selectors.highlightedMenu).contains('Dashboard');
    });
})