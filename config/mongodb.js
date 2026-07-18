import mongoose from "mongoose"

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("Database Connected")
  })

  let uri = process.env.MONGODB_URI;

  if (uri && !uri.includes('/imagify')) {
    if (uri.includes('?')) {
      const parts = uri.split('?');
      // Append database name before the query parameters
      uri = `${parts[0].replace(/\/$/, "")}/imagify?${parts[1]}`;
    } else {
      uri = `${uri.replace(/\/$/, "")}/imagify`;
    }
  }

  await mongoose.connect(uri)
}

export default connectDB