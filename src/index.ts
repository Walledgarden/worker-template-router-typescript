import { Router } from '@tsndr/cloudflare-worker-router'

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket
}


// Initialize router
const router = new Router<Env>();

router.get('/', ({ req, res }) => {
	res.body = 'It works!';
});

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		return router.handle(env, request)
	}
}