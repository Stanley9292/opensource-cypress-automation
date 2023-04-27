import BasePage from '././base-page';
import { endpoints } from '../types';

export class LoginPage extends BasePage {
  constructor() {
    super(endpoints.nothing);
  }
  selectors = {
    userNameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginBtn: '[type="submit"]',
  };

  containsUrl(partialUrl: string) {
    cy.url().should('include', partialUrl);
  }

  fillInUsername(username: string) {
    cy.get(this.selectors.userNameInput).type(username);
  }

  fillInPassword(password: string) {
    cy.get(this.selectors.passwordInput).type(password, { log: false });
  }

  login(username, password) {
    this.fillInUsername(username);
    this.fillInPassword(password);
    cy.get(this.selectors.loginBtn).click();
  }
  
  visitPage() {
    this.visit();
  }

  
}
