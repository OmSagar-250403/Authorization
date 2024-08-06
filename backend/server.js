import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan"; // Import morgan middleware
import connect from "./database/db.js";
import router from "./routes/route.js";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

/* MIDDLEWARES */

app.use(express.json());
app.use(cors());
app.use(morgan('tiny')); // Use morgan middleware
app.disable('x-powered-by'); // less hackers know about our stack


const port = process.env.PORT || 8000; // Set port from env variable or default to 8080

console.log(`Server listening on port ${port}`);

/** HTTP GET Request */
app.get('/', (req, res) => {
  res.status(201).json("Home GET Request");
});

/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
connect().then(() => 
{
    try 
    {
        // Start the server
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } 
    
    catch (error) 
    {
        console.log('Cannot connect to the server')
    }

}).catch(error => 
{
    console.log("Invalid database connection...!");
})