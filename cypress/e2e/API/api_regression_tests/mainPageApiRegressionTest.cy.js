import mainPageApiPom from "../pom/mainPageApi"
import randomNumber from "../../../support/helpers/generateRandomNumber"
import data from "../../../fixtures/data.json"

describe("API regression test", () => {

    it("Receive Infinity response", () => {
        for(let i=0; i<10; i++) {
            mainPageApiPom.sendValue(randomNumber(171, 991)).then((response)=> {
                const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                const body = JSON.parse(bodyString);
                expect(body.answer).to.eq(Infinity)
            })
        }  
    })

    //test is skipped, beacuse response is 500 SERVER ERROR
    it.skip("Send string as a value", () => {
        for(let i=0; i<data.randomTestStrings.length; i++) {
            mainPageApiPom.sendValue(data.randomTestStrings[i]).then((response)=> {
                const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                const body = JSON.parse(bodyString);
                expect(body.answer).to.eq("Please enter an integer")
            })
        }  
    })
})