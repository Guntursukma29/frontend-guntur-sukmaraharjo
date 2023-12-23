// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api", // Specify the base API path
		createProxyMiddleware({
			target: "https://suitmedia-backend.suitdev.com",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "", // Remove the '/api' prefix when forwarding the request
			},
		})
	);
};
