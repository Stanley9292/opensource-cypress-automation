import BasePage from '././base-page';
import { endpoints } from '../types';

export class DashboardPage extends BasePage {
  constructor() {
    super(endpoints.dashboard);
  }
  selectors = {
    sideMenuPanel: '.oxd-sidepanel-body',
    highlightedMenu: '[class="oxd-main-menu-item active"]'
    // passwordInput: '[name="password"]',
    // loginBtn: '[type="submit"]',
  };


//   fillInUsername(username: string) {
//     cy.get(this.selectors.userNameInput).type(username);
//   }

//   fillInPassword(password: string) {
//     cy.get(this.selectors.passwordInput).type(password, { log: false });
//   }

//   login(username, password) {
//     this.fillInUsername(username);
//     this.fillInPassword(password);
//     cy.get(this.selectors.loginBtn).click();
//   }
  
  visitPage() {
    this.visit();
  }

  
}
