import BasePage from '././base-page';
import { endpoints } from '../types';

export class DashboardPage extends BasePage {
  constructor() {
    super(endpoints.dashboard);
  }
  selectors = {
    sideMenuPanel: '.oxd-sidepanel-body',
    highlightedMenu: '[class="oxd-main-menu-item active"]'
  };

  visitPage() {
    this.visit();
  }

  
}
