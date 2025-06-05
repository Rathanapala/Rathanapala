import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '85s0kztz',  // replace this
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});
