describe('POST /pet API', () => {

    const petCreateData = "api_pet_add_data.json";
    const baseUrl = "https://petstore.swagger.io/v2";

    it("should create a new pet record", () => {

        cy.fixture(petCreateData).as("petData").then(($body) => {
            // Send a POST request to the /pet endpoint
            cy.request('POST', baseUrl + '/pet', $body).then((response) => {
                // Assert the response status code
                expect(response.status).to.eq(200);
                // Assert the pet name with the response
                expect(response.body.name).to.eq($body.name);
                // Assert the pet tag id with given tag id
                expect(response.body.tags[0].id).to.eq($body.tags[0].id);

            });
        })
    });
})
