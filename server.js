require("dotenv").config();
const express = require("express");
const cors = require("cors");

const emailRoutes = require("./routes/emailRoutes");
const aiRoutes = require("./routes/aiRoutes");
const quoteTipRoutes=require("./routes/quoteTipRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ✅ Use Routes
app.use("/api/email", emailRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/quotes", quoteTipRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});


// ✅ Start the Server
app.listen(PORT, () => {
  console.log(` Server running on ${PORT}`);
});
