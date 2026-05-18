import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'ea28290ca05575e2c1918c50012f06a0366d82de', queries,  });
export default client;
  