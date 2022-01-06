import { createServer } from 'miragejs';
import { createGraphQLHandler } from '@miragejs/graphql';
import Schema from './taco-schema.gql';

export function makeServer() {
  return createServer({
    routes() {
      const gqlHandler = createGraphQLHandler(Schema, this.schema);
      this.post('/graphql', gqlHandler);
    },
  });
}
