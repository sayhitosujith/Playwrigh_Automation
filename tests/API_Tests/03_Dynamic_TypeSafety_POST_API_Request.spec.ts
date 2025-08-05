import { expect, test } from '@playwright/test';
import { getPOSTAPIRequestBody } from '../../utils/APIHelper'; 

import { faker } from '@faker-js/faker';

test.use({
    baseURL: process.env.BASE_API_URL || 'https://restful-booker.herokuapp.com',
})

test('create POST API Request using dynamic api request body in playwright and Typescript ', async ({ request }) => {


  const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 }); // Generate a random number for total price

  const postAPIRequestBody = await getPOSTAPIRequestBody(firstName, lastName, totalPrice, true, 
    'Breakfast', '2018-01-01', '2019-01-01');

  //create POST API request
  const postAPIResponse = await request.post('/booking', {data: postAPIRequestBody});

  //print JSON API response
  const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response :'+JSON.stringify(jsonPOSTAPIResponse, null, 2));

    //validation of POST API response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json; charset=utf-8');

    //validate property/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('totalprice');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('depositpaid');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('bookingdates');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('additionalneeds');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    //validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01');

});