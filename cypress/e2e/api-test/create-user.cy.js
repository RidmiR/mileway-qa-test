describe('POST /user API', () => {

    const userData = "api_user_add_data.json";
    const baseUrl = "https://petstore.swagger.io/v2";

    it('create a user and veirfy the response', () => {
        // Send a POST request to the /user endpoint
        cy.fixture(userData).as("userData").then(($body) => {
            cy.request('POST', baseUrl + '/user', $body).then((response) => {
                expect(response.status).to.equal(200);
            });
        });
    });
});
