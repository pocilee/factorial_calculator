import mainPageApiPom from "../pom/mainPageApi"
import data from "../../../fixtures/data.json"

describe("API smoke test", () => {

    const validTestValues = data.validTestValues.input
    const validTestResults = data.validTestValues.result

    it("send valid request", () => {
        for(let i=0; i<validTestValues.length; i++) {
            mainPageApiPom.sendValue(validTestValues[i]).then((response)=> {
                const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                const body = JSON.parse(bodyString);
                expect(body.answer).to.eq(validTestResults[i])
            })
        }  
    })
})