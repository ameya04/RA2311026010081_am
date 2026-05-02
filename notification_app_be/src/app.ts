const express = require("express");
const notificationRoutes = require("./routes/notifications").default;

const app = express();
app.use(express.json());

app.use("/notify", notificationRoutes);

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});