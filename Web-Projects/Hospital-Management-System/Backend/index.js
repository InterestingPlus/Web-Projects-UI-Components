const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const mongoose = require("mongoose");

const app = express();
app.use(cors());
// app.use(cors({
//   origin: "http://127.0.0.1:5500"
// }));

app.use(express.json());

const db_uri = process.env.DATABASE_URI;

const PORT = process.env.PORT || 2000;

mongoose
  .connect(db_uri)
  .then(() => {
    console.log("Connected to MongoDB...!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const doctorSchema = mongoose.Schema({
  username: String,
  password: String,

  name: String,
  age: Number,
  specialization: String,
  contact: Number,
  availability: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

app.post("/create-doctor", async (req, res) => {
  const {
    username,
    password,
    name,
    age,
    specialization,
    contact,
    availability,
  } = req.body;

  console.log(req.body);

  const result = new Doctor({
    username,
    password,
    name,
    age,
    specialization,
    contact,
    availability,
  });

  result
    .save()
    .then(() =>
      console.log(
        `Doctor Created = Name : ${name} Age : ${age} Specialization : ${specialization}`
      )
    )
    .catch((err) => {
      console.log(err);
    });

  res.json({
    message: "User Created SuccessFully!",
    data: {
      name: req.body.name,
      age: req.body.age,
      role: req.body.role,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
