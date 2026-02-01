const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API ONLINE");
});

app.get("/check", (req, res) => {
  const key = req.query.key;
  if (!key) return res.json({ ok: false });

  const keys = JSON.parse(fs.readFileSync("keys.json"));
  res.json({ ok: keys[key] === true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API running on port", PORT);
});
