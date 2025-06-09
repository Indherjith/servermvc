const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const protect = require('./middleware/authMiddleware');

dotenv.config(); 

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Testing of server");
});


app.use('/auth', authRoutes);

app.get("/dashboard", protect, (req, res) => {
  res.send("This is dashboard");
});



const PORT = process.env.PORT || 5000;

app.listen(PORT,async()=>{
  await mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
  console.log(`Server is running on PORT:${PORT}`);
})





