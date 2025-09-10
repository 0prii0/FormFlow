// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import studentRoutes from './routes/studentRoutes.js';
app.use('/api/students', studentRoutes);

import employeeRoutes from './routes/employeeRoutes.js';
app.use('/api/employees', employeeRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
