export default class Navbar {
  static clickonLogo() { 
    cy.get('.brand').click()
  }
  static search(text) {
    cy.get('#searchTerm').type(`${text} {enter}`)
  }
  static clickSignIn() {
    cy.contains('Sign in').click()
  }
  static displaySignInButton() {
    cy.isVisible('#signin_button')
  }
  static clickSettigs() {
    cy.contains('Settings').click()
  }
  static logout() {
    cy.contains('username').click()
    cy.get('#logout_link').click()
  }
}