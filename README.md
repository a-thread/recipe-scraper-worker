# Recipe Scraper Worker

This project is a Cloudflare Worker for scraping recipe data.

## Features
- Scrapes recipe information from web pages
- Written in TypeScript
- Uses Cheerio for HTML parsing
- Deploys to Cloudflare Workers using Wrangler

## Development

### Prerequisites
- Node.js 20+
- npm
- Cloudflare account
- Wrangler CLI (`npm install -g wrangler`)

### Install dependencies
```
npm ci
```

### Local development
```
npm run dev
```
This uses `wrangler dev` to run the worker locally.

### Testing
```
npm test
```

## Deployment

### Manual deploy
```
npm run deploy
```

### GitHub Actions deployment
Deployment is automated via GitHub Actions on every push to the `main` branch.

#### Setup
1. Create a Cloudflare API token with "Edit Cloudflare Workers" permissions.
2. Add the token as a secret named `CLOUDFLARE_API_TOKEN` in your GitHub repository.

## Configuration
- Worker entry: `src/index.ts`
- Wrangler config: `wrangler.toml`, `wrangler.jsonc`

## Useful Links
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)

---

Feel free to open issues or contribute!
