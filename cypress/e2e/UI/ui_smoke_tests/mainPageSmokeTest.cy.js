/// <reference types="cypress"/>

import mainPagePom from "../pom/mainPage"
import factorial from "../../../support/helpers/calculateFactorialNumber"
import data from "../../../fixtures/data.json"

describe("Smoke test - Factorial Calcuator - main page", () => {

    const validTestValues = data.validTestValues.input

    beforeEach("Visit the main page", () => {
        cy.visit("/")
        cy.intercept({
            method: "POST",
            url: Cypress.config("baseApiUrl")
          }).as("calc");
    })

    it("Assert elements on the main page", () => {
        mainPagePom.assertElementsOnTheMainPage()
    })

    it("Check the calculation and response for valid test data", () => {
        for(let i=0; i<validTestValues.length; i++) {
            mainPagePom.inputCalculationValue(validTestValues[i])
            mainPagePom.assertTheResult(validTestValues[i], factorial(validTestValues[i]))
            cy.wait("@calc").then(({request, response}) => {
                console.log(request.body)
                expect(request.body).to.eq(`number=${validTestValues[i]}`)
                expect(response.body.answer).to.eq(factorial(validTestValues[i]))
                expect(response.headers["x-clacks-overhead"]).to.eq(data.api.theLegend)
            })
        }
    })
})