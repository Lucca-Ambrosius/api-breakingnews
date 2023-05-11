import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Waiting for connection...");

  mongoose
    .connect( process.env.MONGODB_URL ,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB atlas sucessfully connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
