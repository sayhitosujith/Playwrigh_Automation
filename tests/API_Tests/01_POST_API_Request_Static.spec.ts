import { test } from '@playwright/test';
import postAPIRequest from '../../data/POST_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL || 'https://restful-booker.herokuapp.com',
})

test('create POST API Request using static file in playwright and Typescript', async ({ request }) => {

  const postAPIResponse = await request.post('/booking', {data: postAPIRequest})

  const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response :'+JSON.stringify(jsonPOSTAPIResponse, null, 2));
});