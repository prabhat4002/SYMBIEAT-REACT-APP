import dotenv from 'dotenv';
dotenv.config();
import {fileURLToPath} from 'url'
import { dirname } from 'path';
import path from 'path';
console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import chatbotRouter from './routers/chatbot.router.js'; // Use 'import' here

import { dbconnect } from './config/database.config.js';
dbconnect();

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const app = express();
app.use(express.json());

// CORS configuration for testing
app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true,
    })
);

// Log environment variables (for debugging only, remove in production)
console.log("Environment Variables:");
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/chatbot', chatbotRouter); // Register chatbot router here

const publicFolder=path.join(__dirname,'public');
app.use(express.static(publicFolder));

app.get('*',(req,res)=>{
    const indexFilePath=path.join(publicFolder,'index.html');
    res.sendFile(indexFilePath);
})
// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error encountered:", err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
