import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectMongoDB from './Config/db.js'
dotenv.config();
const app = express()
const port = process.env.PORT || 3000

console.log(process.env.MONGODB_URI); // Log the MongoDB URI to verify it's loaded correctly
//middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>")
});

const startServer = async () => {
  try {
    await connectMongoDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

startServer();
