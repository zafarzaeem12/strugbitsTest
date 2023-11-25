const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const CustomerRouter = require("./router/Customers");

//app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/Customer', express.static(path.join(__dirname, '/public/Customer')));
app.use(express.json());
app.use(cors());

// routes start here
app.use("/admin/api/", CustomerRouter);

dotenv.config();

const port = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE_URL1)
  .then((res) => console.log(`Database connected successfully`))
  .catch((err) => console.log(`Database not connected `));

app.listen(port, () => {
  console.log(`Server is running on ${port} Port`);
});
