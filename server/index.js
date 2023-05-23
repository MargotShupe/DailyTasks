const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

//after deploying frontend replace the localhost with the new http
const corsOptions = {
  origin: "https://mern-deploy1-frontend.onrender.com",
};

app.use(express.json());
app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/react-daily", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

//Models

const Daily = require("./models/Daily");

//testing with postman Body raw
app.get("/dailyt", async (req, res) => {
  const dailyt = await Daily.find();

  res.json(dailyt);
});

//JSON text in postman
app.post("/dailyt/new", (req, res) => {
  const dailyt = new Daily({
    text: req.body.text,
  });

  dailyt.save();

  res.json(dailyt);
});

//testing by adding the id number in the localhost
app.delete("/dailyt/delete/:id", async (req, res) => {
  const result = await Daily.findByIdAndDelete(req.params.id);

  res.json({ result });
});

//testing by adding the id number in the localhost
//testing const completeDaily with get request to fix error in cosole
app.get("/dailyt/complete/:id", async (req, res) => {
  const dailyt = await Daily.findById(req.params.id);

  dailyt.text = req.body.text;

  dailyt.save();

  res.json(dailyt);
});

// app.patch("/dailyt/update/:id", async (req, res) => {
//   const dailyt = await Daily.findById(req.params.id);

//   dailyt.text = req.body.text;

//   dailyt.save();

//   res.json(dailyt);
// });

app.listen(3001, () => {
  console.log("Backend server is running! Hola");
});
