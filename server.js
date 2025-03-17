require("dotenv").config();
const express = require("express");
const cors = require("cors");

const emailRoutes = require("./routes/emailRoutes");
const aiRoutes = require("./routes/aiRoutes");
const quoteTipRoutes=require("./routes/quoteTipRoutes");

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

// ✅ Use Routes
app.use(emailRoutes);
app.use(aiRoutes);
app.use(quoteTipRoutes);

// ✅ Start the Server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
