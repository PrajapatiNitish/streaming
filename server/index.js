import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/dbconfig/dbconfig.js"

connectDB();

const port = process.env.PORT;

app.listen(port, (req, res) => {
    console.log("server is running...", port);
});