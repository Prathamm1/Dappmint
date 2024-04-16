import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // use environment variable here
  apiVersion: 'v1',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
})