import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { metadata } from 'next-sanity/studio/metadata'
import { Config } from 'sanity'

// Define your Sanity configuration
const config: Config = {
  projectId: 'ujzs69bc', // Find or replace 'yourProjectId' with your actual project ID
  dataset: 'production', // Find or replace 'yourDataset' with your actual dataset name
  // Add other configuration options as needed
}

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  )
}