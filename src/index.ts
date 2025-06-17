import { parseRecipeFromHtml } from "./scraper";

export default {
	async fetch(request: Request) {
		const url = new URL(request.url).searchParams.get("url");
		if (!url) return new Response("Missing ?url=", { status: 400 });

		// Tiny edge-cache: 1 day
		const cacheKey = new Request(request.url);
		const cache = caches.default;
		const cached = await cache.match(cacheKey);
		if (cached) return cached;

		try {
			const html = await fetch(url, {
				headers: {
					"User-Agent":
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36",
					"Accept-Language": "en-US",
				},
			}).then(r => r.text());

			const recipe = await parseRecipeFromHtml(html, url);
			const resp = new Response(JSON.stringify(recipe), {
				headers: { "content-type": "application/json" },
			});
			resp.headers.set("Cache-Control", "s-maxage=86400");
			resp.headers.set("Access-Control-Allow-Origin", "*");  // ← add this
			await cache.put(cacheKey, resp.clone());
			return resp;
		} catch (err: any) {
			return new Response(err.message, { status: 502 });
		}
	},
};
