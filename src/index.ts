import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hellow form My NodeJS App" });
});

app.listen(3000, function () {
  console.log(`App is liseting on port 3000`);
});
