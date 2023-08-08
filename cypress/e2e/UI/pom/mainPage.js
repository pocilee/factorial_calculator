import data from "../../../fixtures/data.json"


module.exports = {
    get mainHeader() {
        return cy.get("h1")
    },
    get arrowButton() {
        return cy.get("span[class='input-group-addon']")
    },
    get calculatorInput() {
        return cy.get("input[id='number']")
    },
    get calculateButton() {
        return cy.get("button[id='getFactorial']")
    },
    get resultDisplay() {
        return cy.get("p[id='resultDiv']")
    },
    get termsAndConditionsLink() {
        return cy.get("a[href='/terms']")
    },
    get privacyLink() {
        return cy.get("a[href='/privacy']")
    },
    get footer() {
        return cy.get(".row-fluid > p:nth-of-type(2)")
    },
    get qxf2ServicesLink() {
        return cy.get('a[href="https://www.qxf2.com/?utm_source=qa-interview&utm_medium=click&utm_campaign=From%20QA%20Interview"]')
    },

    inputCalculationValue(value) {
        this.calculatorInput.should("be.visible").clear().type(value)
        this.calculateButton.should("be.visible").click()
    },
    assertElementsOnTheMainPage() {
        this.mainHeader.should("be.visible").and("have.text", data.mainPage.mainHeaderText)
        this.arrowButton.should("be.visible")
        this.calculatorInput.should("be.visible")
        this.calculateButton.should("be.visible")

        /**
         * Terms/Privacy assertions are skipped now, beacuse of the bug on the UI
         */

        // this.termsAndConditionsLink.should("be.visible").and("have.text", data.mainPage.termsAndConditions)
        // this.privacyLink.should("be.visible").and("have.text", data.mainPage.privacy)
        this.qxf2ServicesLink.should("be.visible").and("have.text", data.mainPage.qxf2LinkText)
        this.footer.should("be.visible").and("contain", "©")
    },
    assertTheResult(input, result) {
        this.resultDisplay.should("be.visible").and("have.text", `The factorial of ${input} is: ${result}`)
    },
    assertErrorFormatResult() {
        this.resultDisplay.should("be.visible").and("have.text", "Please enter an integer")
    }
}