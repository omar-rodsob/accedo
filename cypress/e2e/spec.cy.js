import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';
import specPage from './pages/specPage';

describe('template spec', () => {
  it('passes', () => {
   cy.visit('');
   cy.wait(3000);
   SpecPage.clickCookiesBtn();  
   SpecPage.clickBtn();
   SpecPage.elements.iframeContainer().should('be.visible');
   cy.wait(10000);
   //cy.frameLoaded('#iFrameResizer0');
   cy.frameLoaded('#iFrameResizer0');
   cy.wait(3000);
   //cy.wait(specPage.elements.iframe());
   SpecPage.typeFirstName(user.firstName);
   SpecPage.typeLastName(user.lastName);
   SpecPage.typeEmail(user.email);
   SpecPage.typePhone(user.phone);
   SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
   cy.wait(3000);
   SpecPage.elements.labelFile().contains('OmarRodriguez-Resume.pdf');
   SpecPage.typeCLetter(user.cLetter);
   specPage.typeLinkedInProfile(user.linkedProfile);
   specPage.typePersonalWebSite(user.githubSite);
   specPage.typeSalary(user.salary);
   specPage.typeNotice(user.notice);
   specPage.checkAuthWork();
   specPage.typeLocation(user.location);
   specPage.checkWorkFlexibility();
   specPage.checkAgrement();
   specPage.clickSubmit();
  })
})