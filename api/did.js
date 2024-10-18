export default async function handler(req, res) {
  const subdomain = req.headers.host.split('.')[0]; // Get the subdomain part of the request.

  // Map of subdomains to DIDs (this could come from a database or be hardcoded for simplicity)
  const didMapping = {
    sinblio: 'did:plc:abqvrmko7aoiwmxacmg55sgr',
    // Add other subdomains as needed
  };

  const did = didMapping[subdomain];

  if (did) {
    res.status(200).send(did);
  } else {
    res.status(404).send('DID not found');
  }
}
