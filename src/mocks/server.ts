import { setupServer } from 'msw/node';
import { handlers } from './handlers';
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);

beforeAll(() => {
  // Establish API mocking before all tests.
  server.listen();
});

// reset any request handlers that we may add during the tests,
// so they don't affect other tests
afterEach(() => server.resetHandlers());

// Clean up after all tests are done, preventing this
// interception layer from affecting irrelevant tests.
afterAll(() => {
  server.close();
});
