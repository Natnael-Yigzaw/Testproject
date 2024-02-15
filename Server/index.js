const express = require("express");
const connectDb = require("./config/db");
const userRoute = require("./routes/UserRoute");

connectDb();
const app = express();

app.use("/users", userRoute);

app.listen(3000, () => console.log("Server started on port 3000"));
