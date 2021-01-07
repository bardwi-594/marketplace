const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://market:12345@cluster0.cgwxl.mongodb.net/onlinestore?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});


const Product = mongoose.model(
   "products",
    new mongoose.Schema({
      _id: String,
      title: String,
      description: String,
      image: String,
      price: Number
   })
);


app.get("/api/products", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("serve at http://localhost:8000"));