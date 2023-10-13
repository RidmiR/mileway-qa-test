describe('DELETE /pet/{petId} API', () => {

    const petStoreData = "api_pet_store_order.json";
    const baseUrl = "https://petstore.swagger.io/v2";

    // it('delete existing pet record', () => {

    //     cy.fixture(petStoreData).as("orderData").then(($body) => {

    //         cy.request({
    //             "method": "POST",
    //             "url": baseUrl + '/store/order',
    //             "body": $body
    //         })
    //             .then((response) => {
    //                 expect(response.status).to.eq(200);
    //                 cy.log(response.body.id)
    //                 // Send a DELETE request to the /store/order/{orderId} endpoint
    //                 cy.request({
    //                     "method": "DELETE",
    //                     "url": baseUrl + '/store/order/' + response.body.id,
    //                 }).then((response) => {
    //                     // Assert the response status code
    //                     expect(response.status).to.eq(200);
    //                 });
    //             })
    //     })
    // })

    it('delete invalid oder id and verify the status', () => {

        // Send a DELETE request to the /store/order/{orderId} endpoint
        cy.request({
            method: 'DELETE',
            url: baseUrl + '/store/order/abc',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404);
        });
    })
})
