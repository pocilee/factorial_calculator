const sendValue = (input) => {

    const formData = new FormData()
    formData.append("number", input)   

    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: Cypress.config("baseApiUrl"),
        body: formData
      })
      .then((response) => {
        return response;
      });
  };

  export default {
    sendValue
  };