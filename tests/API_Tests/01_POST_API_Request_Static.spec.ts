import { test, expect, request as playwrightRequest } from '@playwright/test';
import postAPIRequest from '../../data/POST_API_Request.json';

test('create POST API Request using static file in playwright and Typescript', async () => {
  const apiContext = await playwrightRequest.newContext({
    baseURL: process.env.BASE_API_URL, // Make sure this is defined
  });

  const postAPIResponse = await apiContext.post('/booking', { data: postAPIRequest });
  const jsonPOSTAPIResponse = await postAPIResponse.json();

  console.log('POST API Response :' + JSON.stringify(jsonPOSTAPIResponse, null, 2));
});
