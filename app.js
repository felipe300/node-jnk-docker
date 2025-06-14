import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
	res.send("Hello World! From Docker & Jenkins!");
});

app.listen(PORT, () => {
	console.log(`Running on port: ${PORT}`);
});
