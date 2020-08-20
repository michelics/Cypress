export default class BasePage{
  static pause(ms) {
    cy.wait(ms)
  }
  static logInfo(message) {
    cy.log(message)
  }
  static setMobileViewport(message) {
    cy.viewport('iphone-x')
  }
  static setTabletViewport(message) {
    cy.viewport('ipdad-2')
  }
  static setDesktoptViewport(message) {
    cy.viewport('macbook-13')
  }
  static setLargeDesktoptViewport(message) {
    cy.viewport(1980, 1080)
  }
}