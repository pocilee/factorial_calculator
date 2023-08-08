/// <reference types="cypress"/>

import mainPagePom from "../pom/mainPage"
import data from "../../../fixtures/data.json"

describe("Smoke test - Factorial Calcuator - main page", () => {

    const validTestValues = data.validTestValues.input
    const validTestResults = data.validTestValues.result
    const randomStrings = data.randomTestStrings

    beforeEach("Visit the main page", () => {
        cy.visit("/")
    })

    it("Assert elements on the main page", () => {
        mainPagePom.assertElementsOnTheMainPage()
    })


    for(let i=0; i<randomStrings.length; i++) {
        it(`Invalid data - ${randomStrings[i]} - as a value, check validation`, () => {
                mainPagePom.inputCalculationValue(randomStrings[i])
                cy.wait(500)
                mainPagePom.assertErrorFormatResult()
        })
    }
})