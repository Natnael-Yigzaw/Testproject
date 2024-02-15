const express = require("express");
const connectDb = require("./config/db");
const userRoute = require("./routes/UserRoute");
const PORT = process.env.PORT || 4500;

connectDb();
const app = express();

app.use("/users", userRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
