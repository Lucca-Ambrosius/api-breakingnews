import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Waiting for connection...");

  mongoose
    .connect(
      "mongodb+srv://luccaambrosiuswk:12312344@cluster0.aitu9fc.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB atlas sucessfully connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
