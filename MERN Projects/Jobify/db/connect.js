import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  });
};

export default connectDB;
