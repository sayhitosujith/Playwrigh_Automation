import { expect, test } from '@playwright/test';
import postAPIRequest from '../../data/POST_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL || 'https://restful-booker.herokuapp.com',
})

test('create POST API Request using static file in playwright and Typescript', async ({ request }) => {
//create POST API request
  const postAPIResponse = await request.post('/booking', {data: postAPIRequest})

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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by SUJITH');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by sadashivareddy');

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01');

});