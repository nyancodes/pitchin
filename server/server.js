const app = require("./app");
const { PORT } = require("./config");

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
