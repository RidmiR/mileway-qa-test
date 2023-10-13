describe('GET /user/{username} API', () => {

    const userData = "api_user_add_data.json";
    const baseUrl = "https://petstore.swagger.io/v2";

    it('verify exsiting user details', () => {
        cy.fixture(userData).as("userData").then(($body) => {
            // Send a POST request to the /user endpoint
            cy.request({
                "method": "POST",
                "url": baseUrl + '/user',
                "body": $body
            })
                .then((response) => {
                    expect(response.status).to.eq(200);
                    // Send a GET request to the /user/{username} endpoint
                    cy.request({
                        "method": "GET",
                        "url": baseUrl + '/user/' + $body.username,
                    }).then((response) => {
                        // Assert the user details
                        expect(response.body.username).to.eq($body.username);
                        expect(response.body.email).to.eq($body.email);
                        expect(response.body.id).to.eq($body.id);
                    });
                })
        });
    });
});
