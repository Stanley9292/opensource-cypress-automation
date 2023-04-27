export default class BasePage {
    constructor(private page: string) {}
    visit() {
      cy.visit(this.page);
    }
  
    public shouldContainAndBeVisible(selector, expected) {
      cy.get(selector).should('contain', expected).should('be.visible');
    }
  
    public shouldBeVisible(selector) {
      cy.get(selector).should('be.visible');
    }
  }
  