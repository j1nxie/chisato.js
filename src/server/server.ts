import express from "express";
import type { Express } from "express";

export const app: Express = express();

app.use(express.json());

app.set("trust proxy", "loopback");
app.set("query parser", "simple");

app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		description: "Bot is online!",
		body: {
			time: Date.now(),
			version: "0.1.0",
		},
	});
});

console.log(`Starting express server on port ${process.env.PORT}`);
