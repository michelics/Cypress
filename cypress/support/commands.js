import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"

addMatchImageSnapshotCommand({
  failureTreshold: 0.00,
  failureTreholdType: "percent",
  customDiffConfig: { treshold: 0.0 },
  capture: "viewport"
})

Cypress.Commands.add('isVisible', selector => {
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
  cy.get(selector).should('not.exist')
})

Cypress.Commands.add("setResolution", size => { 
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

Cypress.Commands.add("login", (username, password) => { 
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.get('#user_login').clear().type(username, { delay: 50 })
  cy.get('#user_password').clear().type(password)
  cy.get('input[type="checkbox"]').click()
  cy.contains('Sign in').click()
})