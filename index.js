const express = require("express");
const { connectMongoDB } = require("./conection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 5000;

//DB
connectMongoDB("mongodb+srv://roshan:roshan@cluster0.hcqjsea.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error", err);
  });

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
