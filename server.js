const express = require("express");
const bodyParser = require("body-parser");
const shortid = require("shortid");
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

const Order = mongoose.model(
    "order",
    new mongoose.Schema({
      _id: {
        type: String,
        default: shortid.generate,
      },
        name: String,
        email: String,
        address: String,
        mobile:String,
        total: Number,
        buyItem: [
          {
            _id: String,
            title: String,
            price: Number,
          },
        ],
      },
      {
        timestamps: true,
      }
    )
  );

app.post("/api/orders", async (req, res) => {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.address ||
      !req.body.mobile ||
      !req.body.total ||
      !req.body.buyItem
    ) {
      return res.send({ message: "Fields cannot be Empty." });
    }
    const order = await Order(req.body).save();
    res.send(order);
});



app.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
});


var cors = require('cors')
app.use(cors())


const Login = mongoose.model(
  "login",
  new mongoose.Schema({
    _id: {
      type: String,
      default: shortid.generate,
    },
      email: String,
      password: String,
      usertype: String

    }
  )
);

app.post("/api/login", async (req, res) => {
  if (
    !req.body.email ||
    !req.body.password 
  ) {
    return res.send({ message: "Fields cannot be Empty." });
  }
  const login = await Login(req.body).save();
  res.send(login);
});


const port = process.env.PORT || 8000;
app.listen(port, () => console.log("serve at http://localhost:8000"));