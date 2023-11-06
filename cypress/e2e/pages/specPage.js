
class SpecPages{
    elements ={
       iframe:()=>cy.frameLoaded('#iFrameResizer0'),
       cookiesButton:()=>cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'),
       applyButton:()=>cy.get('[href="#job-form"]').first(),
       iframeContainer:()=>cy.get(".iframe-container-2"),
       inputFirstName:()=>cy.iframe('#iFrameResizer0').find('[name="firstName"]'),
       inputLastName:()=>cy.iframe('#iFrameResizer0').find("#inputLastName"),
       inputEmail:()=>cy.iframe('#iFrameResizer0').find("#inputEmail"),
       inputPhone:()=>cy.iframe('#iFrameResizer0').find("#inputTel"),
       fileResume:()=>cy.iframe('#iFrameResizer0').find("#cv"),
       labelFile:()=>cy.iframe('#iFrameResizer0').find('#field-resume-aria-desc > .secondary '),
       linkedInInput:()=>cy.iframe('#iFrameResizer0').find("#linkedin"),
       personalWebSite:()=>cy.iframe('#iFrameResizer0').find("#inputLink"),
       personalNote:()=>cy.iframe('#iFrameResizer0').find("#inputNote"),
       salary:()=>cy.iframe('#iFrameResizer0').find(".question").eq(0),
       notice:()=>cy.iframe('#iFrameResizer0').find(".question").eq(1),
       workAuthCheck:()=>cy.iframe('#iFrameResizer0').find('[type="radio"]').eq(0),
       locationInput:()=>cy.iframe('#iFrameResizer0').find(".question").eq(3),
       workFlexibilityCheck:()=>cy.iframe('#iFrameResizer0').find('[type="radio"]').eq(2),
       aggrement:()=>cy.iframe('#iFrameResizer0').find('[ng-model="candidate.gdprConsent"]'),
       btnSubmit:()=>cy.iframe('#iFrameResizer0').find(".applyButton")       
    }
    clickCookiesBtn(){
        this.elements.cookiesButton().click();
    }

    clickBtn(){
        this.elements.applyButton().click({force: true});
    }

    typeFirstName(firstName){
        this.elements.inputFirstName().type(firstName)
    }

    typeLastName(lastName){
        this.elements.inputLastName().type(lastName)
    }

    typeEmail(email){
        this.elements.inputEmail().type(email)
    }

    typePhone(phone){
        this.elements.inputPhone().type(phone)
    }

    selectFile(filePath){
        this.elements.fileResume().selectFile(filePath,{force: true})
    }

    typeCLetter(cLetter){
        this.elements.personalNote().type(cLetter);
    }

    typeLinkedInProfile(linkedinProfile){
        this.elements.linkedInInput().type(linkedinProfile);
    }
    
    typePersonalWebSite(webSite){
        this.elements.personalWebSite().type(webSite);
    }

    typeSalary(salary){
        this.elements.salary().type(salary)
    }

    typeNotice(notice){
        this.elements.notice().type(notice);
    }

    checkAuthWork(){
        this.elements.workAuthCheck().check({force: true});
    }

    typeLocation(location){
        this.elements.locationInput().type(location);
    }

    checkWorkFlexibility(){
        this.elements.workFlexibilityCheck().check({force: true});
    }

    checkAgrement(){
        this.elements.aggrement().check({force: true});
    }

    clickSubmit(){
        this.elements.btnSubmit().click({force: true});
    }
}
export default new SpecPages();