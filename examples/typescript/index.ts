import { ApifyClient } from 'apify-client';

/**
 * Example: How to call the apple-maps-scraper actor using Apify API Client
 *
 * For full documentation of the Apify Client for JavaScript, see: https://docs.apify.com/api/client/js
 * For full documentation of the actor, see: https://apify.com/lexis-solutions/apple-maps-scraper
 *
 * Note: This example uses the Apify API Client (apify-client) to call actors from external code.
 * If you want to create Actors, use the Apify SDK (apify) instead.
 */
async function runActor() {
  // Initialize the ApifyClient with your API token
  // Get your API token from https://console.apify.com/account/integrations
  const client = new ApifyClient({
    token: process.env.APIFY_TOKEN || 'YOUR_APIFY_TOKEN',
  });

  // Start the actor run and wait for it to finish
  // The .call() method starts the actor and waits for completion automatically
  const actorId = `lexis-solutions/apple-maps-scraper`;
  console.log(`Starting actor: ${actorId}`);

  const { defaultDatasetId } = await client.actor(actorId).call({
    query: "The Pyramids",
    proxyConfiguration: {
      "useApifyProxy": false
    },
  });

  console.log(`Actor run completed! Dataset ID: ${defaultDatasetId}`);

  // Get the results from the dataset
  const { items } = await client.dataset(defaultDatasetId).listItems();
  console.log(`Retrieved ${items.length} items from the dataset.`);
  console.log('Results:', items);
  return items;
}

// Run the example
if (require.main === module) {
  runActor()
    .then(() => {
      console.log('Example completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error running example:', error);
      process.exit(1);
    });
}

export { runActor };
