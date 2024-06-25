import mongoose from "mongoose";
// mongoose.set("strictQuery", false);

const dbConnect = async () => {
    console.log(process.env.MONGODB_URI);
    
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI ?? "");

        if (conn.connection.readyState === 1) {
            console.log("DB connection is successful !");
        } else {
            console.log("DB connecting...");
        }
    } catch (error) {
        console.log("DB connection failed:", error);
        // throw new Error(error);
    }
};

export default dbConnect
