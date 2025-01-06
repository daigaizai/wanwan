// worker.js
addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // 如果请求路径是 /api/message，返回 JSON 响应
    if (url.pathname === '/api/message') {
        event.respondWith(handleRequest(event.request));
    } else {
        // 否则返回请求的页面
        event.respondWith(fetch(event.request));
    }
});

async function handleRequest(request) {
    // 返回一个简单的 JSON 响应
    return new Response(
        JSON.stringify({ message: "Hello from Cloudflare Workers!" }),
        { headers: { 'Content-Type': 'application/json' } }
    );
}
